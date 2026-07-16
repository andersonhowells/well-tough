import { createHash } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";
import http from "node:http";
import https from "node:https";

const MONITOR_PATH = new URL("../admin/pricing-monitor.json", import.meta.url);
const checkedAt = new Date().toISOString();

function hash(value) {
  return createHash("sha256").update(value).digest("hex");
}

function textFromHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#36;/g, "$")
    .replace(/&#163;/g, "£")
    .replace(/&#8364;/g, "€")
    .replace(/\s+/g, " ")
    .trim();
}

function pricingSignal(text) {
  const sentences = text
    .split(/(?<=[.!?])\s+|\s{2,}/)
    .map((part) => part.trim())
    .filter(Boolean);
  const important = sentences.filter((sentence) => {
    return /(\$|£|€|pricing|price|per user|per seat|per month|monthly|annually|annual|enterprise|business|team|premium|standard|credits?)/i.test(sentence);
  });
  return important.slice(0, 220).join(" ").slice(0, 24000) || text.slice(0, 24000);
}

function summarizeSignal(signal) {
  const matches = signal.match(/(?:\$|£|€)\s?\d+(?:[.,]\d+)?(?:\s?\/?\s?(?:user|seat|developer|month|mo|credit|year|annum))?/gi) || [];
  const unique = [...new Set(matches.map((item) => item.replace(/\s+/g, " ").trim()))];
  if (unique.length) {
    return `Price-like values found: ${unique.slice(0, 8).join(", ")}${unique.length > 8 ? "..." : ""}`;
  }
  return "No simple price values extracted; check the vendor page manually.";
}

function requestText(url, redirects = 0) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const client = parsed.protocol === "http:" ? http : https;
    const request = client.get(
      parsed,
      {
        headers: {
          "user-agent": "WellToughPricingMonitor/1.0 (+https://andersonhowells.github.io/well-tough/)"
        },
        timeout: 20000
      },
      (response) => {
        if ([301, 302, 303, 307, 308].includes(response.statusCode) && response.headers.location) {
          response.resume();
          if (redirects >= 5) {
            reject(new Error("Too many redirects"));
            return;
          }
          resolve(requestText(new URL(response.headers.location, parsed).toString(), redirects + 1));
          return;
        }

        if (response.statusCode < 200 || response.statusCode >= 300) {
          response.resume();
          reject(new Error(`HTTP ${response.statusCode}`));
          return;
        }

        response.setEncoding("utf8");
        let body = "";
        response.on("data", (chunk) => {
          body += chunk;
        });
        response.on("end", () => resolve(body));
      }
    );
    request.on("timeout", () => request.destroy(new Error("Request timed out")));
    request.on("error", reject);
  });
}

async function fetchSignal(source) {
  const html = await requestText(source.url);
  const signal = pricingSignal(textFromHtml(html));
  return {
    hash: hash(signal),
    summary: summarizeSignal(signal)
  };
}

const monitor = JSON.parse(await readFile(MONITOR_PATH, "utf8"));
const next = {
  ...monitor,
  updatedAt: checkedAt,
  sources: []
};

for (const source of monitor.sources) {
  try {
    const result = await fetchSignal(source);
    const previousHash = source.hash || null;
    const changed = previousHash && previousHash !== result.hash;
    next.sources.push({
      ...source,
      hash: result.hash,
      previousHash: changed ? previousHash : source.previousHash || null,
      status: previousHash ? (changed ? "changed" : "ok") : "baseline",
      lastChecked: checkedAt,
      lastChanged: changed ? checkedAt : source.lastChanged || null,
      error: null,
      summary: result.summary
    });
  } catch (error) {
    next.sources.push({
      ...source,
      status: "error",
      lastChecked: checkedAt,
      error: error.message,
      summary: "Automated check failed; verify manually."
    });
  }
}

await writeFile(MONITOR_PATH, `${JSON.stringify(next, null, 2)}\n`);
