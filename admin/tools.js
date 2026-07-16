const PASSWORD_HASH = "423ed5a97a34c30e";
const SESSION_KEY = "wellToughAdmin";

const toolMap = [
  {
    tool: "Microsoft Teams",
    category: "Collaboration",
    stack: "Microsoft 365",
    agent: "Microsoft 365 Copilot in Teams",
    fit: "Microsoft-first organisations, leadership teams, project teams, sales, account management and internal operations.",
    actions: [
      "Summarise meetings, decisions, risks and actions.",
      "Turn meeting discussions into task lists, follow-up emails and project updates.",
      "Search previous conversations before decisions are repeated or lost."
    ]
  },
  {
    tool: "Outlook",
    category: "Productivity",
    stack: "Microsoft 365",
    agent: "Microsoft 365 Copilot in Outlook",
    fit: "Any organisation where managers, sales teams or client-facing staff spend material time in email.",
    actions: [
      "Draft structured replies using the right tone and context.",
      "Summarise long email threads before meetings or decisions.",
      "Prioritise inbox workload and convert email requests into next actions."
    ]
  },
  {
    tool: "Word",
    category: "Documents",
    stack: "Microsoft 365",
    agent: "Microsoft 365 Copilot in Word",
    fit: "Professional services, legal, HR, operations, bid teams and organisations producing regular reports or policies.",
    actions: [
      "Create first drafts of policies, reports, proposals and client documents.",
      "Rewrite documents for clarity, audience and executive readability.",
      "Compare versions and extract unresolved questions before review."
    ]
  },
  {
    tool: "Excel",
    category: "Data and reporting",
    stack: "Microsoft 365",
    agent: "Microsoft 365 Copilot in Excel",
    fit: "Finance, operations, sales reporting, resource planning and owner-managed businesses running key processes in spreadsheets.",
    actions: [
      "Explain trends, outliers and variances in plain English.",
      "Generate formulas, tables and summary views from messy working sheets.",
      "Create repeatable management reporting packs from existing data."
    ]
  },
  {
    tool: "PowerPoint",
    category: "Documents",
    stack: "Microsoft 365",
    agent: "Microsoft 365 Copilot in PowerPoint",
    fit: "Leadership, sales, account management, training and consultancy teams that regularly present information.",
    actions: [
      "Turn reports, notes and proposals into presentation drafts.",
      "Create board-ready summaries from operational material.",
      "Standardise pitch decks and internal updates around approved messaging."
    ]
  },
  {
    tool: "SharePoint / OneDrive",
    category: "Knowledge management",
    stack: "Microsoft 365",
    agent: "Microsoft 365 Copilot and SharePoint agents",
    fit: "Organisations with scattered documents, repeated staff questions and inconsistent access to policies or templates.",
    actions: [
      "Create governed knowledge assistants for policies, procedures and templates.",
      "Help staff find the latest approved document instead of reusing old versions.",
      "Identify permission issues and knowledge gaps before wider AI rollout."
    ]
  },
  {
    tool: "Gmail",
    category: "Productivity",
    stack: "Google Workspace",
    agent: "Gemini for Google Workspace",
    fit: "Google-first businesses, client service teams, recruitment, estate agency, education and operations teams.",
    actions: [
      "Draft replies, follow-ups and customer updates from thread context.",
      "Summarise high-volume conversations into decisions and next actions.",
      "Create reusable response patterns for common client queries."
    ]
  },
  {
    tool: "Google Docs",
    category: "Documents",
    stack: "Google Workspace",
    agent: "Gemini in Docs",
    fit: "Teams creating SOPs, client reports, proposals, marketing content, lesson plans or operational documentation.",
    actions: [
      "Draft structured documents from bullet points or meeting notes.",
      "Rewrite content for client, staff, board or compliance audiences.",
      "Create standard operating procedures from informal process knowledge."
    ]
  },
  {
    tool: "Google Sheets",
    category: "Data and reporting",
    stack: "Google Workspace",
    agent: "Gemini in Sheets",
    fit: "Small businesses managing finance, pipeline, operations, recruitment or project trackers in spreadsheets.",
    actions: [
      "Summarise data patterns and operational exceptions.",
      "Build formulas, categorisations and lightweight dashboards.",
      "Convert ad hoc trackers into repeatable management views."
    ]
  },
  {
    tool: "Google Meet",
    category: "Collaboration",
    stack: "Google Workspace",
    agent: "Gemini in Meet",
    fit: "Google-first organisations with frequent internal, client, candidate or parent meetings.",
    actions: [
      "Capture summaries, decisions and follow-up actions.",
      "Reduce manual note-taking and improve meeting accountability.",
      "Feed actions into CRM, task or project workflows."
    ]
  },
  {
    tool: "Salesforce",
    category: "CRM and sales",
    stack: "Salesforce",
    agent: "Einstein Copilot / Agentforce",
    fit: "Sales, service and account-management teams with structured CRM discipline and enough data quality to support automation.",
    actions: [
      "Summarise accounts, opportunities and recent customer activity.",
      "Draft sales emails, call notes and next-best-action prompts.",
      "Support service agents with case summaries, knowledge suggestions and escalation cues."
    ]
  },
  {
    tool: "HubSpot",
    category: "CRM and sales",
    stack: "HubSpot",
    agent: "HubSpot Breeze / AI assistants",
    fit: "SMBs using HubSpot for sales, marketing, customer service or CRM-led growth.",
    actions: [
      "Create prospecting emails, follow-up sequences and campaign content.",
      "Summarise contacts, deals and support conversations.",
      "Identify stalled pipeline, missing CRM data and high-priority follow-ups."
    ]
  },
  {
    tool: "Slack",
    category: "Collaboration",
    stack: "Slack",
    agent: "Slack AI",
    fit: "Technology, creative, distributed and project-based teams where important work happens in channels.",
    actions: [
      "Summarise channels and threads before joining a project or making a decision.",
      "Extract action items from discussions and reduce repeated questions.",
      "Create searchable institutional memory from fast-moving team communication."
    ]
  },
  {
    tool: "Notion",
    category: "Knowledge management",
    stack: "Notion",
    agent: "Notion AI",
    fit: "Small teams needing a lightweight operating system for projects, knowledge, meeting notes and internal documentation.",
    actions: [
      "Turn meeting notes and project pages into actions, updates and summaries.",
      "Create a searchable knowledge base from scattered internal content.",
      "Standardise project, onboarding and operating templates."
    ]
  },
  {
    tool: "Jira",
    category: "Project management",
    stack: "Atlassian",
    agent: "Atlassian Rovo / Atlassian Intelligence",
    fit: "Software teams, product teams, service teams, operations, PMOs and any organisation managing structured work through tickets.",
    actions: [
      "Summarise epics, issues, blockers and sprint progress for standups or leadership updates.",
      "Create or refine tickets from meeting notes, support themes, product ideas or customer feedback.",
      "Identify stale work, duplicate issues, missing acceptance criteria and risks to delivery."
    ]
  },
  {
    tool: "Confluence",
    category: "Knowledge management",
    stack: "Atlassian",
    agent: "Atlassian Rovo / Atlassian Intelligence",
    fit: "Organisations using Confluence for policies, project documentation, technical knowledge, onboarding or operating procedures.",
    actions: [
      "Find and summarise relevant knowledge across spaces, projects and connected tools.",
      "Turn rough notes into decision records, SOPs, project briefs and stakeholder updates.",
      "Keep pages current by surfacing outdated content, missing owners and related Jira work."
    ]
  },
  {
    tool: "Jira Service Management",
    category: "Customer service",
    stack: "Atlassian",
    agent: "Atlassian Rovo / virtual service agents",
    fit: "IT, operations, internal service desks, customer support and managed-service teams handling repeatable requests.",
    actions: [
      "Triage requests, summarise incidents and suggest knowledge-base answers.",
      "Create incident updates and escalation notes from ticket history.",
      "Analyse recurring service themes and convert them into knowledge articles or automation candidates."
    ]
  },
  {
    tool: "Trello",
    category: "Project management",
    stack: "Atlassian",
    agent: "Atlassian Intelligence / Rovo-connected workflows",
    fit: "Small teams, marketing, operations, founders and lightweight project groups that need simple visual task control.",
    actions: [
      "Turn brainstorms, emails or meeting notes into cards, checklists and owners.",
      "Summarise board status and highlight overdue or blocked work.",
      "Create repeatable board templates for campaigns, onboarding and delivery processes."
    ]
  },
  {
    tool: "Loom",
    category: "Training and knowledge",
    stack: "Atlassian",
    agent: "Loom AI / Rovo-connected video knowledge",
    fit: "Teams that rely on walkthroughs, product demos, training videos, handovers or asynchronous updates.",
    actions: [
      "Generate titles, summaries, chapters and action points from recorded videos.",
      "Convert process walkthroughs into SOPs, onboarding material or support articles.",
      "Make video knowledge discoverable alongside Jira, Confluence and project context."
    ]
  },
  {
    tool: "GitHub",
    category: "Software delivery",
    stack: "Developer tools",
    agent: "GitHub Copilot / Rovo connector",
    fit: "Software teams, data teams and technical operations groups managing code, issues and pull requests.",
    actions: [
      "Support code drafting, test generation, documentation and pull-request summaries.",
      "Connect commits and pull requests back to Jira tickets or product requirements.",
      "Use governed AI assistance for repetitive development tasks while keeping review gates in place."
    ]
  },
  {
    tool: "GitLab",
    category: "Software delivery",
    stack: "Developer tools",
    agent: "GitLab Duo / Rovo connector",
    fit: "Engineering teams running source control, CI/CD, security checks and delivery workflows in GitLab.",
    actions: [
      "Explain code, summarise merge requests and support test or pipeline troubleshooting.",
      "Draft issue updates and release notes from delivery activity.",
      "Identify where engineering bottlenecks are caused by unclear requirements, review delays or broken pipelines."
    ]
  },
  {
    tool: "Azure DevOps",
    category: "Software delivery",
    stack: "Microsoft developer tools",
    agent: "GitHub Copilot / Microsoft Copilot plus Rovo connector",
    fit: "Microsoft-heavy development teams using boards, repos, pipelines and release management.",
    actions: [
      "Summarise work items, sprint progress, build failures and release risks.",
      "Connect backlog items to code changes, test outcomes and deployment notes.",
      "Create delivery updates for product owners and leadership without manual status chasing."
    ]
  },
  {
    tool: "Figma",
    category: "Design and product",
    stack: "Design tools",
    agent: "Figma AI / Rovo connector",
    fit: "Product, UX, marketing and digital teams moving from design ideas to buildable work.",
    actions: [
      "Summarise design intent, variants and stakeholder feedback.",
      "Turn approved designs into Jira tasks, acceptance criteria and implementation notes.",
      "Keep product, design and engineering aligned around the latest version and decisions."
    ]
  },
  {
    tool: "Miro / Lucid",
    category: "Workshops and process mapping",
    stack: "Whiteboarding tools",
    agent: "Miro AI / Lucid AI / Rovo connectors",
    fit: "Consulting, operations, product, transformation and leadership teams running workshops or process mapping.",
    actions: [
      "Cluster workshop notes into themes, risks, opportunities and decisions.",
      "Convert process maps into action plans, Jira tickets or improvement backlogs.",
      "Create clearer workshop outputs without losing the human discussion behind them."
    ]
  },
  {
    tool: "Smartsheet",
    category: "Project management",
    stack: "Work management",
    agent: "Smartsheet AI / Rovo connector",
    fit: "PMOs, operations, construction, implementation and multi-site teams managing structured plans and dependencies.",
    actions: [
      "Summarise project health, overdue work, dependency risk and resource pressure.",
      "Generate executive project updates from live sheets and reports.",
      "Identify repeatable planning templates and automation opportunities."
    ]
  },
  {
    tool: "DocuSign",
    category: "Documents",
    stack: "Agreement management",
    agent: "DocuSign AI / Rovo connector",
    fit: "Sales, legal, procurement, property, HR and professional services teams handling repeated contracts or approvals.",
    actions: [
      "Summarise agreement status, bottlenecks and missing approvals.",
      "Extract obligations, renewal dates and handover actions from signed documents.",
      "Standardise contract preparation, review routing and post-signature follow-up."
    ]
  },
  {
    tool: "Dropbox / Box",
    category: "Knowledge management",
    stack: "File storage",
    agent: "Native AI search plus Rovo connectors",
    fit: "Organisations with large shared drives, legacy document stores, client folders or mixed Microsoft/Google/Atlassian estates.",
    actions: [
      "Find relevant documents across file stores without relying on folder memory.",
      "Summarise client folders, project histories and document packs before meetings.",
      "Identify duplicates, outdated documents and sensitive-content governance risks."
    ]
  },
  {
    tool: "Zoom",
    category: "Collaboration",
    stack: "Zoom",
    agent: "Zoom AI Companion",
    fit: "Sales, account management, recruitment, training, education and leadership teams using Zoom heavily.",
    actions: [
      "Summarise meetings and capture decisions without manual notes.",
      "Create follow-up emails and action lists from calls.",
      "Support coaching by reviewing themes across recurring customer or candidate conversations."
    ]
  },
  {
    tool: "Fireflies.ai / Otter.ai",
    category: "Meeting intelligence",
    stack: "Meeting tools",
    agent: "AI meeting assistant",
    fit: "Organisations without strong native meeting AI, especially recruitment, consulting, sales and client success teams.",
    actions: [
      "Transcribe calls, extract actions and push notes into CRM or task tools.",
      "Create consistent meeting records for handover and accountability.",
      "Analyse recurring themes across client, candidate or project meetings."
    ]
  },
  {
    tool: "Xero / QuickBooks",
    category: "Finance",
    stack: "Finance systems",
    agent: "Built-in AI plus ChatGPT/Claude for analysis",
    fit: "Accountancy practices, bookkeepers, finance teams and owner-managed businesses with recurring finance admin.",
    actions: [
      "Explain variances, cash-flow movements and debtor patterns.",
      "Draft client finance commentary and management account narratives.",
      "Identify repetitive bookkeeping, invoice and reconciliation workflows suitable for automation."
    ]
  },
  {
    tool: "Sage / NetSuite / ERP",
    category: "Operations",
    stack: "ERP",
    agent: "Vendor AI plus reporting assistant",
    fit: "Manufacturing, distribution, engineering and operational businesses with inventory, production or resource planning data.",
    actions: [
      "Summarise production, stock, purchasing and fulfilment exceptions.",
      "Support demand planning, maintenance reporting and operational review packs.",
      "Highlight process bottlenecks before automation or system change."
    ]
  },
  {
    tool: "Trello / Asana / Monday.com",
    category: "Project management",
    stack: "Project tools",
    agent: "Native AI assistant plus automation rules",
    fit: "Project, operations, marketing, implementation and client delivery teams.",
    actions: [
      "Convert meetings and briefs into task plans with owners and deadlines.",
      "Summarise project status, risks and overdue work.",
      "Create repeatable delivery templates for common client or internal projects."
    ]
  },
  {
    tool: "Canva",
    category: "Marketing",
    stack: "Creative tools",
    agent: "Canva Magic Studio",
    fit: "Marketing, recruitment, estate agency, education, small business owners and teams without dedicated design resource.",
    actions: [
      "Generate first-draft campaign assets, social posts and presentation visuals.",
      "Repurpose long-form content into channel-specific creative.",
      "Create controlled brand templates so AI speeds output without damaging consistency."
    ]
  },
  {
    tool: "Adobe Creative Cloud",
    category: "Marketing",
    stack: "Creative tools",
    agent: "Adobe Firefly",
    fit: "Marketing, design, product, ecommerce and creative teams with stronger brand or production requirements.",
    actions: [
      "Create, edit and extend image assets within approved brand workflows.",
      "Speed up campaign variant creation and product visualisation.",
      "Apply review controls around copyright, brand safety and client approval."
    ]
  },
  {
    tool: "Zendesk / Intercom",
    category: "Customer service",
    stack: "Support tools",
    agent: "Zendesk AI / Fin AI Agent",
    fit: "Customer support, SaaS, ecommerce, membership, service desk and after-sales teams.",
    actions: [
      "Suggest replies, summarise tickets and route issues to the right owner.",
      "Automate first-line responses for known support questions.",
      "Identify knowledge-base gaps from repeated customer issues."
    ]
  },
  {
    tool: "Zapier / Make",
    category: "Automation",
    stack: "Automation platforms",
    agent: "Zapier AI / Make AI features",
    fit: "SMBs with repeated handoffs between forms, email, CRM, spreadsheets, project tools and finance systems.",
    actions: [
      "Automate low-risk administrative workflows across existing tools.",
      "Route enquiries, create tasks, update records and trigger follow-up messages.",
      "Add monitoring and exception handling so automations remain controlled."
    ]
  },
  {
    tool: "ChatGPT / Claude",
    category: "General AI assistant",
    stack: "Standalone AI",
    agent: "Team workspace assistants and custom GPTs/projects",
    fit: "Cross-functional teams that need broad reasoning, drafting, analysis and workflow support beyond one software suite.",
    actions: [
      "Create role-specific assistants for sales, operations, HR, finance and leadership.",
      "Analyse documents, policies, transcripts and process notes.",
      "Build prompt libraries and review workflows for repeatable, governed AI use."
    ]
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

function categories() {
  return [...new Set(toolMap.map((item) => item.category))].sort();
}

function matchesSearch(item, term) {
  if (!term) return true;
  const haystack = [
    item.tool,
    item.category,
    item.stack,
    item.agent,
    item.fit,
    ...item.actions
  ].join(" ").toLowerCase();
  return haystack.includes(term.toLowerCase());
}

function renderFilters() {
  const filter = document.getElementById("functionFilter");
  filter.innerHTML = [
    '<option value="all">All functions</option>',
    ...categories().map((category) => `<option value="${category}">${category}</option>`)
  ].join("");
}

function renderToolMap() {
  const term = document.getElementById("toolSearch").value.trim();
  const category = document.getElementById("functionFilter").value;
  const rows = toolMap.filter((item) => {
    const categoryMatch = category === "all" || item.category === category;
    return categoryMatch && matchesSearch(item, term);
  });

  document.getElementById("toolMapBody").innerHTML = rows.map((item) => `
    <tr>
      <td>
        <strong>${item.tool}</strong>
        <span>${item.stack}</span>
      </td>
      <td>
        <span class="agent-pill">${item.agent}</span>
        <span class="muted">${item.category}</span>
      </td>
      <td>${item.fit}</td>
      <td>
        <ul>
          ${item.actions.map((action) => `<li>${action}</li>`).join("")}
        </ul>
      </td>
    </tr>
  `).join("") || `
    <tr>
      <td colspan="4">No matching tools found.</td>
    </tr>
  `;
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
document.getElementById("toolSearch").addEventListener("input", renderToolMap);
document.getElementById("functionFilter").addEventListener("change", renderToolMap);

renderFilters();
renderToolMap();

if (sessionStorage.getItem(SESSION_KEY) === "true") {
  showAdmin();
} else {
  showLogin();
}
