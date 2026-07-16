const PASSWORD_HASH = "423ed5a97a34c30e";
const SESSION_KEY = "wellToughAdmin";

const tools = [
  {
    category: "Core AI assistant",
    name: "ChatGPT Business / Enterprise",
    vendor: "OpenAI",
    cost: "Business per-user/month; Enterprise via sales. Verify live price.",
    bestFor: "General productivity, analysis, document drafting, custom GPTs, data work and cross-functional pilots.",
    wtOffer: "Team setup, prompt library, governance rules, first 3 role-based use cases.",
    wtPrice: "£1,250-£3,500",
    notes: "Good default for mixed SMB use where teams need a broad assistant rather than one suite-specific copilot."
  },
  {
    category: "Core AI assistant",
    name: "Claude Team",
    vendor: "Anthropic",
    cost: "$20/seat/month annually; $25 monthly. Premium seats from $100 annually.",
    bestFor: "Long document work, policy drafting, analysis, writing quality and structured reasoning.",
    wtOffer: "Workspace setup, safe-use policy, document-analysis workflows, leadership and operations prompts.",
    wtPrice: "£1,250-£3,500",
    notes: "Useful where clients handle long reports, contracts, policies or technical documents."
  },
  {
    category: "Microsoft ecosystem",
    name: "Microsoft 365 Copilot",
    vendor: "Microsoft",
    cost: "Often quoted at about $30/user/month; verify current tenant and licensing terms.",
    bestFor: "Organisations already deep in Outlook, Teams, Word, Excel, PowerPoint and SharePoint.",
    wtOffer: "Readiness review, permissions audit, pilot group, role training, Teams/SharePoint adoption playbook.",
    wtPrice: "£1,500-£4,500",
    notes: "Value depends heavily on data hygiene, SharePoint permissions and staff usage habits."
  },
  {
    category: "Google ecosystem",
    name: "Google Workspace with Gemini",
    vendor: "Google",
    cost: "Starter $7, Standard $14, Plus $22 per user/month after promotions.",
    bestFor: "Gmail, Docs, Sheets, Meet, Drive and NotebookLM-enabled knowledge work.",
    wtOffer: "Gemini readiness review, Drive governance, role-based workflows, training and adoption metrics.",
    wtPrice: "£1,500-£4,500",
    notes: "Strong for Google-first businesses that want AI inside existing daily tools."
  },
  {
    category: "Research and knowledge",
    name: "Perplexity Enterprise",
    vendor: "Perplexity",
    cost: "Enterprise pricing via sales; historic Enterprise Pro benchmark was about $40/user/month.",
    bestFor: "Cited research, market scanning, competitive analysis and internal knowledge search.",
    wtOffer: "Research workflow design, source-quality rules, briefing templates and team training.",
    wtPrice: "£950-£2,500",
    notes: "Useful for firms where credible sourced answers matter: legal, finance, consulting, sales and product."
  },
  {
    category: "Knowledge workspace",
    name: "Notion Business with AI",
    vendor: "Notion",
    cost: "Business $20/member/month; Plus $10/member/month.",
    bestFor: "Knowledge base, project notes, AI meeting notes, lightweight operating system for small teams.",
    wtOffer: "Workspace design, knowledge taxonomy, AI notes policy, templates and team adoption.",
    wtPrice: "£1,250-£3,500",
    notes: "Best where the client lacks a clean source of truth and needs structure before automation."
  },
  {
    category: "Atlassian ecosystem",
    name: "Jira, Confluence and Rovo",
    vendor: "Atlassian",
    cost: "Rovo is available with eligible Standard, Premium or Enterprise Cloud plans for Jira, Confluence and Jira Service Management; verify the client's product tier and Rovo credit allowance.",
    bestFor: "Product, software, service, operations and PMO teams already running work through Jira, Confluence or Jira Service Management.",
    wtOffer: "Atlassian AI readiness review, Rovo use-case design, Jira/Confluence workflow mapping, governance and team training.",
    wtPrice: "£1,500-£5,500",
    notes: "Good fit where the client needs AI to connect work, knowledge and decisions rather than sit as a separate chatbot."
  },
  {
    category: "Atlassian ecosystem",
    name: "Rovo Dev",
    vendor: "Atlassian",
    cost: "$20/developer/month for Rovo Dev Standard, with included credits and additional usage billed by credit. Verify live terms.",
    bestFor: "Software development teams wanting AI support for code planning, generation, review and repetitive engineering work.",
    wtOffer: "Developer workflow assessment, pilot group setup, review gates, usage policy, code-risk controls and benefit tracking.",
    wtPrice: "£2,000-£6,500",
    notes: "Position only where engineering leadership will own adoption and code review standards remain explicit."
  },
  {
    category: "Atlassian ecosystem",
    name: "Trello with Atlassian AI/Rovo-connected workflows",
    vendor: "Atlassian",
    cost: "Trello has free and paid plans; AI/Rovo availability depends on the wider Atlassian subscription and rollout. Verify before quoting.",
    bestFor: "Small teams that need lightweight task management, campaign boards, onboarding checklists or simple operational control.",
    wtOffer: "Board redesign, template creation, workflow automation, action capture and operating rhythm setup.",
    wtPrice: "£750-£2,500",
    notes: "Often a practical first step where Jira would be too heavy for the client."
  },
  {
    category: "Meeting intelligence",
    name: "Fireflies.ai",
    vendor: "Fireflies",
    cost: "Pro $10, Business $19, Enterprise $39 per seat/month billed annually.",
    bestFor: "Meeting transcription, summaries, action capture, sales/customer-success follow-up.",
    wtOffer: "Consent wording, meeting policy, CRM/task integration, management reporting.",
    wtPrice: "£950-£2,500",
    notes: "High immediate value for sales, recruitment, account management and leadership meetings."
  },
  {
    category: "Meeting intelligence",
    name: "Loom Business + AI",
    vendor: "Atlassian / Loom",
    cost: "Business $18/user/month; Business + AI $24/user/month. Enterprise via sales. Verify billing route via Loom vs Atlassian.",
    bestFor: "Training, onboarding, asynchronous updates, product walkthroughs, process capture and client handovers.",
    wtOffer: "Video knowledge workflow, recording policy, AI summary templates, Confluence/Jira handoff and onboarding library.",
    wtPrice: "£950-£3,000",
    notes: "Useful where knowledge is trapped in calls, demos or repeated verbal explanations."
  },
  {
    category: "Automation",
    name: "Zapier",
    vendor: "Zapier",
    cost: "Free; Professional from $19.99/month; Team from $69/month; Enterprise via sales.",
    bestFor: "Low-code workflow automation, AI-powered zaps, simple data movement and departmental quick wins.",
    wtOffer: "Workflow discovery, build, testing, exception handling, documentation and handover.",
    wtPrice: "£500-£1,500 per workflow",
    notes: "Good first automation layer for SMBs before investing in custom development."
  },
  {
    category: "Automation",
    name: "Make",
    vendor: "Make",
    cost: "Tiered monthly pricing; verify live plan based on operations volume.",
    bestFor: "Visual automation flows, integrations, scheduled workflows and data transformations.",
    wtOffer: "Scenario design, build, monitoring setup and staff handover.",
    wtPrice: "£500-£1,500 per workflow",
    notes: "Often preferable where workflows need clearer visual mapping or more complex branching."
  },
  {
    category: "Project management",
    name: "Smartsheet AI and add-ons",
    vendor: "Smartsheet",
    cost: "Pro and Business paid plans, with Enterprise and Advanced Work Management via sales; add-ons such as Dynamic View and Data Shuttle are separately priced. Verify region and plan.",
    bestFor: "PMOs, operations, construction, implementation teams and multi-site organisations needing structured project control.",
    wtOffer: "Portfolio reporting review, AI summary workflow, sheet/dashboard design, automation and governance setup.",
    wtPrice: "£1,500-£5,500",
    notes: "Good where spreadsheet-like working needs stronger workflow, reporting and accountability."
  },
  {
    category: "Workshops and process mapping",
    name: "Miro AI",
    vendor: "Miro",
    cost: "Free, Starter, Business and Enterprise plans; AI credits vary by plan and additional credits may be purchased. Verify plan and credit model.",
    bestFor: "Workshops, process mapping, product discovery, transformation, service design and collaborative planning.",
    wtOffer: "Workshop design, process-map templates, AI synthesis workflow, action backlog and governance of workshop outputs.",
    wtPrice: "£750-£3,000",
    notes: "Best used to turn messy workshop input into prioritised, auditable actions."
  },
  {
    category: "Workshops and process mapping",
    name: "Lucid AI",
    vendor: "Lucid",
    cost: "Individual, Team and Enterprise pricing varies by Lucid product and region; verify live price before quote.",
    bestFor: "Technical diagrams, process architecture, systems mapping, operating models and transformation design.",
    wtOffer: "Current-state/future-state mapping, AI-assisted diagram standards, process library and operating model documentation.",
    wtPrice: "£950-£3,500",
    notes: "Useful where the diagnostic needs clearer systems, process or data-flow evidence."
  },
  {
    category: "CRM and sales",
    name: "HubSpot AI / Salesforce AI",
    vendor: "HubSpot / Salesforce",
    cost: "Varies by CRM tier and AI add-ons; verify per client stack.",
    bestFor: "Sales emails, pipeline updates, call summaries, lead scoring and customer-service workflows.",
    wtOffer: "Sales-process mapping, CRM AI configuration, prompt templates and adoption dashboard.",
    wtPrice: "£1,500-£5,000",
    notes: "Only recommend after CRM hygiene is assessed; poor CRM data will weaken AI value."
  },
  {
    category: "Software delivery",
    name: "GitHub with Copilot",
    vendor: "GitHub",
    cost: "GitHub Team $4/user/month and Enterprise $21/user/month; Copilot is a separate/additional AI add-on or bundled trial depending on plan. Verify live Copilot terms.",
    bestFor: "Software teams managing code, issues, pull requests, security and documentation in GitHub.",
    wtOffer: "Copilot adoption pilot, coding standards, review policy, issue-to-PR workflow, security guardrails and productivity tracking.",
    wtPrice: "£2,000-£6,500",
    notes: "Do not sell as replacement for engineering review; sell as controlled acceleration around existing delivery standards."
  },
  {
    category: "Software delivery",
    name: "GitLab Duo Agent Platform",
    vendor: "GitLab",
    cost: "GitLab Premium $29/user/month includes Duo credits; Ultimate custom pricing includes higher credits. Additional Duo credits are usage-based. Verify plan and credits.",
    bestFor: "DevSecOps teams using GitLab for source control, CI/CD, security and delivery management.",
    wtOffer: "Duo pilot, SDLC workflow assessment, merge-request controls, pipeline automation review and value measurement.",
    wtPrice: "£2,000-£7,500",
    notes: "Strong fit where AI can improve delivery flow, test generation, pipeline troubleshooting and security remediation."
  },
  {
    category: "Software delivery",
    name: "Azure DevOps with GitHub/Microsoft Copilot",
    vendor: "Microsoft / GitHub",
    cost: "Azure DevOps pricing depends on Basic users, pipelines, test plans and GitHub/Microsoft Copilot licensing. Verify tenant setup.",
    bestFor: "Microsoft-heavy engineering teams using boards, repos, pipelines and release management.",
    wtOffer: "Backlog-to-release workflow mapping, Copilot pilot, delivery reporting, policy controls and engineering adoption plan.",
    wtPrice: "£2,000-£7,500",
    notes: "Most valuable where delivery data is already structured enough to support reporting and automation."
  },
  {
    category: "Creative and marketing",
    name: "Canva, Adobe Firefly, image/video tools",
    vendor: "Various",
    cost: "Usually per user/month or credits; verify specific tool and commercial-use terms.",
    bestFor: "Marketing content, social posts, pitch visuals, product images and lightweight video.",
    wtOffer: "Brand-safe content workflow, approval process, prompt library and rights guidance.",
    wtPrice: "£750-£2,500",
    notes: "Governance matters: brand quality, copyright, client approvals and disclosure rules."
  },
  {
    category: "Design and product",
    name: "Figma AI",
    vendor: "Figma",
    cost: "Professional full seat $16/month, Organization full seat $55/month, Enterprise full seat $90/month; AI credits included by plan with add-ons available.",
    bestFor: "Product, UX, digital, marketing and design teams moving from idea to prototype to build.",
    wtOffer: "Design-to-delivery workflow, AI prototyping guardrails, Jira handoff, design-system governance and team training.",
    wtPrice: "£1,250-£4,500",
    notes: "Good where design output needs faster iteration without losing brand or product-control discipline."
  },
  {
    category: "Documents and agreements",
    name: "DocuSign AI / agreement management",
    vendor: "DocuSign",
    cost: "Plan and AI feature pricing varies by country, volume and agreement product. Verify current eSignature and IAM pricing before quote.",
    bestFor: "Sales, legal, HR, property, procurement and professional services teams handling repeated agreements.",
    wtOffer: "Agreement workflow review, obligation extraction process, approval routing, renewal tracking and document governance.",
    wtPrice: "£1,250-£4,500",
    notes: "Useful where contract admin, renewal leakage or approval delays create measurable cost."
  },
  {
    category: "Knowledge workspace",
    name: "Dropbox Dash / Dropbox AI",
    vendor: "Dropbox",
    cost: "Dropbox Standard from about €12/user/month annually in the UK/EU view; Advanced about €18/user/month; Dash/AI availability may vary. Verify region and plan.",
    bestFor: "Teams with large shared folders, client document packs, creative files or legacy file-store knowledge.",
    wtOffer: "File-store audit, AI search pilot, permissions review, folder taxonomy and document lifecycle controls.",
    wtPrice: "£1,250-£4,500",
    notes: "Start with governance: AI search is only useful if the underlying permissions and document hygiene are acceptable."
  },
  {
    category: "Knowledge workspace",
    name: "Box AI / Box Enterprise Advanced",
    vendor: "Box",
    cost: "Business Starter from $5/user/month; Enterprise Plus shown at $50/user/month annually; Enterprise Advanced with AI agents via sales. Verify plan and AI units.",
    bestFor: "Regulated or document-heavy teams needing secure content management, e-signatures, metadata and AI document workflows.",
    wtOffer: "Content governance review, Box AI use-case design, metadata extraction pilot, agent workflow and compliance controls.",
    wtPrice: "£2,000-£7,500",
    notes: "Best for document-heavy workflows where governance, retention and access control matter as much as productivity."
  },
  {
    category: "Custom internal assistant",
    name: "Custom GPT / knowledge assistant",
    vendor: "OpenAI, Claude, Microsoft, Google or no-code platforms",
    cost: "Depends on platform, seats, storage and usage.",
    bestFor: "Company-specific policy assistant, proposal helper, onboarding bot or support knowledge tool.",
    wtOffer: "Use-case design, knowledge pack, assistant instructions, testing, review workflow and launch.",
    wtPrice: "£750-£2,500",
    notes: "Start narrow: one audience, one knowledge domain, clear review rules."
  }
];

function fnv1a64(value) {
  let hash = 0xcbf29ce484222325n;
  for (const char of value) {
    hash ^= BigInt(char.codePointAt(0));
    hash = BigInt.asUintN(64, hash * 0x100000001b3n);
  }
  return hash.toString(16).padStart(16, "0");
}

function showAdmin() {
  document.getElementById("loginPanel").hidden = true;
  document.getElementById("adminApp").hidden = false;
}

function showLogin() {
  document.getElementById("loginPanel").hidden = false;
  document.getElementById("adminApp").hidden = true;
}

function renderTools() {
  document.getElementById("toolingGrid").innerHTML = tools.map((tool) => `
    <article class="tool-card">
      <span>${tool.category}</span>
      <h3>${tool.name}</h3>
      <p class="tool-vendor">${tool.vendor}</p>
      <dl>
        <dt>Vendor cost</dt>
        <dd>${tool.cost}</dd>
        <dt>Best for</dt>
        <dd>${tool.bestFor}</dd>
        <dt>Well Tough offer</dt>
        <dd>${tool.wtOffer}</dd>
        <dt>Well Tough setup price</dt>
        <dd><strong>${tool.wtPrice}</strong></dd>
      </dl>
      <p>${tool.notes}</p>
    </article>
  `).join("");
}

function formatDate(value) {
  if (!value) return "Not checked yet";
  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date(value));
}

function statusLabel(status) {
  if (status === "changed") return "Review";
  if (status === "error") return "Error";
  if (status === "baseline") return "Baseline";
  if (status === "ok") return "OK";
  return "Pending";
}

function renderPricingMonitor(monitor) {
  const changed = monitor.sources.filter((source) => source.status === "changed").length;
  const errors = monitor.sources.filter((source) => source.status === "error").length;
  const pending = monitor.sources.filter((source) => source.status === "pending").length;
  const summary = changed
    ? `${changed} source${changed === 1 ? "" : "s"} need review`
    : errors
      ? `${errors} source${errors === 1 ? "" : "s"} could not be checked`
      : pending
        ? "Awaiting first automated check"
        : "No pricing-page changes detected";

  document.getElementById("pricingMonitor").innerHTML = `
    <div class="monitor-summary">
      <strong>${summary}</strong>
      <span>Last run: ${formatDate(monitor.updatedAt)}</span>
    </div>
    <div class="service-table monitor-table">
      <table>
        <thead>
          <tr>
            <th>Source</th>
            <th>Status</th>
            <th>Last checked</th>
            <th>Signal</th>
          </tr>
        </thead>
        <tbody>
          ${monitor.sources.map((source) => `
            <tr>
              <td><a href="${source.url}" target="_blank" rel="noreferrer">${source.name}</a></td>
              <td><span class="monitor-status ${source.status}">${statusLabel(source.status)}</span></td>
              <td>${formatDate(source.lastChecked)}</td>
              <td>${source.error || source.summary}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

async function loadPricingMonitor() {
  const panel = document.getElementById("pricingMonitor");
  try {
    const response = await fetch("pricing-monitor.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    renderPricingMonitor(await response.json());
  } catch (error) {
    panel.innerHTML = `<p>Pricing monitor unavailable: ${error.message}. Check vendor links manually.</p>`;
  }
}

document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const password = document.getElementById("adminPassword").value;
  const error = document.getElementById("loginError");

  if (fnv1a64(password) === PASSWORD_HASH) {
    sessionStorage.setItem(SESSION_KEY, "true");
    error.textContent = "";
    showAdmin();
  } else {
    error.textContent = "Incorrect password.";
  }
});

document.getElementById("logoutButton").addEventListener("click", () => {
  sessionStorage.removeItem(SESSION_KEY);
  showLogin();
});

document.getElementById("printButton").addEventListener("click", () => window.print());

renderTools();
loadPricingMonitor();

if (sessionStorage.getItem(SESSION_KEY) === "true") {
  showAdmin();
} else {
  showLogin();
}
