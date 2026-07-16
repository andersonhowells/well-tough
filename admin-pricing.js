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

if (sessionStorage.getItem(SESSION_KEY) === "true") {
  showAdmin();
} else {
  showLogin();
}
