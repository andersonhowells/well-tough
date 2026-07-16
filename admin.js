const PASSWORD_HASH = "423ed5a97a34c30e";
const SESSION_KEY = "wellToughAdmin";

const dimensions = [
  {
    id: "leadership",
    name: "Leadership & Readiness",
    prompt: "Is AI adoption real, funded, owned and connected to business outcomes?",
    questions: [
      {
        id: "leadership-strategy",
        title: "AI strategy and business intent",
        ask: "How clearly has leadership defined why AI matters to the business?",
        levels: [
          "No defined AI intent; activity is informal or tool-led.",
          "Leadership is interested, but AI is discussed as experimentation rather than business change.",
          "A basic AI ambition exists with a few target areas, but it is not yet operationalised.",
          "AI priorities are linked to business objectives, owners and near-term outcomes.",
          "AI is embedded in business planning with measurable value targets and review cadence."
        ],
        next: [
          "Run a leadership workshop to translate AI curiosity into 3-5 business outcomes such as hours saved, faster turnaround or risk reduction.",
          "Use AI to draft a one-page AI ambition statement and map it to current business pain points.",
          "Turn the ambition into a 90-day roadmap with named owners, target processes and success measures.",
          "Create an executive AI scorecard that reviews benefits, risks and adoption every month.",
          "Maintain momentum by benchmarking progress across departments and refreshing the roadmap quarterly."
        ]
      },
      {
        id: "leadership-ownership",
        title: "Ownership and accountability",
        ask: "Who owns AI adoption and has authority to make decisions?",
        levels: [
          "Nobody owns AI adoption.",
          "An interested individual is informally leading activity without authority.",
          "A sponsor exists, but decision rights and delivery support are unclear.",
          "A senior sponsor and working group own delivery, budget and decisions.",
          "AI ownership is built into management routines, governance forums and performance measures."
        ],
        next: [
          "Nominate an executive sponsor and a practical AI lead for the diagnostic period.",
          "Define decision rights: who approves tools, data usage, pilots, spend and policy exceptions.",
          "Create a lightweight AI steering group with business, technology, risk and operations representation.",
          "Use AI-generated status reporting to track actions, blockers and value against the roadmap.",
          "Review accountability quarterly and expand ownership into departments as adoption matures."
        ]
      },
      {
        id: "leadership-budget",
        title: "Budget and capacity",
        ask: "Has the business committed realistic funding and staff time?",
        levels: [
          "No budget or staff time is allocated.",
          "Small ad hoc spend is allowed for tools, but time is not protected.",
          "A pilot budget exists, but implementation and training capacity are uncertain.",
          "Budget and staff time are allocated for priority use cases and adoption support.",
          "AI investment is planned as a managed portfolio with value tracking and reinvestment."
        ],
        next: [
          "Estimate the cost of inaction by using AI to model current manual effort in priority processes.",
          "Create a small protected pilot budget and ring-fence staff time for interviews, training and testing.",
          "Build a simple ROI calculator showing expected hours saved, payback and risk-control cost.",
          "Review spend monthly against value delivered and reallocate budget to the strongest use cases.",
          "Use portfolio reporting to compare AI initiatives and scale the ones with measured returns."
        ]
      },
      {
        id: "leadership-kpis",
        title: "Success measures",
        ask: "Does leadership know what success will look like?",
        levels: [
          "No success measures are defined.",
          "Success is described generally, such as productivity or innovation.",
          "Some measures exist, but baselines are missing.",
          "Clear KPIs are defined with current baselines and target improvements.",
          "AI KPIs are reviewed regularly and linked to operational performance."
        ],
        next: [
          "Use AI to help define candidate KPIs: hours saved, cycle time, quality, customer response speed and risk events.",
          "Capture baseline data for the top 3 processes before any pilot starts.",
          "Create a simple KPI dashboard for each pilot with before/after measures.",
          "Automate monthly reporting from available systems and staff surveys.",
          "Benchmark performance across teams and use the findings to prioritise the next wave of adoption."
        ]
      },
      {
        id: "leadership-change",
        title: "Change leadership",
        ask: "Is leadership actively preparing the business for behavioural change?",
        levels: [
          "AI is treated as a technology installation, not a change programme.",
          "Leaders communicate interest but have not addressed staff concerns.",
          "Basic communication exists, but change impacts are not mapped.",
          "Leaders actively manage communications, training, resistance and adoption risks.",
          "AI adoption is managed as a repeatable change capability across the business."
        ],
        next: [
          "Use AI to draft a plain-English change narrative: what changes, what does not, and why it matters.",
          "Survey staff concerns and use AI to cluster themes by department and risk.",
          "Map stakeholder groups and create targeted communications for each team.",
          "Track adoption sentiment, training completion and usage as part of the executive scorecard.",
          "Create internal champions who can reuse the adoption playbook on future AI initiatives."
        ]
      }
    ]
  },
  {
    id: "data",
    name: "Data & Tooling",
    prompt: "Can AI safely and usefully work with the organisation's systems, documents and data?",
    questions: [
      {
        id: "data-inventory",
        title: "System and data inventory",
        ask: "Does the business know where its important data lives?",
        levels: [
          "Key data sources are unknown or scattered.",
          "Major systems are known, but ownership and quality are unclear.",
          "A basic inventory exists for core systems and document stores.",
          "Systems, owners, data types and access rules are documented.",
          "The inventory is maintained and used to prioritise AI opportunities and risks."
        ],
        next: [
          "Use AI-assisted interviews to create a first-pass map of core systems, documents and data flows.",
          "Ask each department to validate the inventory and identify business-critical data.",
          "Tag systems by value, sensitivity, quality and accessibility.",
          "Connect the inventory to opportunity scoring so AI work starts where data is usable and valuable.",
          "Keep the inventory live and use it in governance reviews and vendor decisions."
        ]
      },
      {
        id: "data-quality",
        title: "Data quality and consistency",
        ask: "Is the data reliable enough to support AI-assisted work?",
        levels: [
          "Data is inconsistent, duplicated or unreliable.",
          "Quality issues are known anecdotally but not measured.",
          "Basic quality checks exist for some key datasets.",
          "Important datasets have owners, quality rules and remediation plans.",
          "Data quality is monitored and improved as part of normal operations."
        ],
        next: [
          "Use AI to identify duplicate fields, inconsistent naming and obvious gaps in exported datasets.",
          "Create a short data-quality scorecard for the datasets linked to top AI use cases.",
          "Assign data owners and define minimum quality rules for priority processes.",
          "Use automated checks to flag missing fields, outliers and stale records.",
          "Link quality metrics to AI performance so teams see why good data matters."
        ]
      },
      {
        id: "data-tooling",
        title: "AI-ready tooling",
        ask: "Are existing tools suitable for secure, practical AI adoption?",
        levels: [
          "Staff use unmanaged consumer tools or no AI tools at all.",
          "Approved tools exist in isolated pockets with limited guidance.",
          "Core productivity tools have AI features, but rollout is inconsistent.",
          "Approved AI tools are configured for priority teams with training and controls.",
          "AI tooling is integrated into workflows, systems and governance routines."
        ],
        next: [
          "Identify shadow AI usage and select a small approved toolset for immediate safe use.",
          "Configure Microsoft 365, Google Workspace or sector tools to support controlled pilots.",
          "Create usage guidance showing which tool to use for which task.",
          "Integrate approved tools into priority workflows rather than leaving them as standalone apps.",
          "Review tool performance, cost and risk quarterly; retire tools that do not deliver value."
        ]
      },
      {
        id: "data-integration",
        title: "Integration and workflow access",
        ask: "Can AI connect to the systems where work actually happens?",
        levels: [
          "Systems are siloed with manual copying between tools.",
          "Some exports and imports are possible, but workflows remain manual.",
          "Basic integrations exist for core platforms.",
          "Priority workflows can connect data, documents and approvals reliably.",
          "Integrated workflows support automation, monitoring and continuous improvement."
        ],
        next: [
          "Map where staff copy, paste, rekey or search for information manually.",
          "Use low-code tools or built-in automation to connect one high-friction workflow.",
          "Prioritise integrations that reduce repeated admin rather than impressive but low-value demos.",
          "Add AI summarisation, extraction or routing into workflows with human approval points.",
          "Measure throughput and exception rates to guide further automation."
        ]
      },
      {
        id: "data-security",
        title: "Access and security controls",
        ask: "Are permissions and data protections suitable for AI use?",
        levels: [
          "Access controls are unclear or overly broad.",
          "Basic permissions exist, but AI-specific data exposure has not been considered.",
          "Sensitive data rules exist but are inconsistently applied to AI tools.",
          "AI tools respect role-based access, data classification and approval rules.",
          "Security controls are monitored, tested and adapted as AI usage grows."
        ],
        next: [
          "Use AI policy prompts to classify data types by sensitivity and permitted usage.",
          "Review permissions for document stores before connecting AI assistants.",
          "Create rules for client, employee, financial and confidential data in AI tools.",
          "Test AI outputs for inappropriate access or leakage before wider rollout.",
          "Schedule periodic access reviews and include AI tools in cyber-risk monitoring."
        ]
      }
    ]
  },
  {
    id: "process",
    name: "Process Fit",
    prompt: "Where does AI map to real workflows, bottlenecks and measurable value?",
    questions: [
      {
        id: "process-map",
        title: "Process visibility",
        ask: "How well are core workflows understood and documented?",
        levels: [
          "Processes are mostly tribal knowledge.",
          "Some steps are known, but handoffs and exceptions are unclear.",
          "Core processes are mapped at a high level.",
          "Priority processes are mapped with volumes, pain points, systems and owners.",
          "Processes are continuously measured and improved."
        ],
        next: [
          "Use AI-assisted interview notes to create first-pass process maps from staff conversations.",
          "Validate maps with teams and highlight manual steps, delays and duplicated effort.",
          "Add volumes, frequency, cycle time and error points to the priority process maps.",
          "Use the maps to choose AI interventions with measurable business outcomes.",
          "Keep maps live and connect them to process KPIs and improvement backlogs."
        ]
      },
      {
        id: "process-opportunities",
        title: "Opportunity identification",
        ask: "How systematically are AI opportunities identified?",
        levels: [
          "Ideas are ad hoc and tool-led.",
          "Staff have suggested use cases, but they are not assessed consistently.",
          "A basic opportunity list exists.",
          "Opportunities are scored by value, feasibility, risk and adoption effort.",
          "A managed opportunity portfolio drives prioritisation and investment."
        ],
        next: [
          "Run department workshops and use AI to cluster ideas into themes.",
          "Create an opportunity register with expected benefit, data needs and risk.",
          "Score each opportunity using a consistent value/feasibility/risk model.",
          "Select quick wins and strategic bets separately so the portfolio is balanced.",
          "Review the portfolio monthly and close opportunities that do not prove value."
        ]
      },
      {
        id: "process-roi",
        title: "Benefit and ROI modelling",
        ask: "Can the business quantify the value of AI opportunities?",
        levels: [
          "Benefits are not quantified.",
          "Benefits are estimated loosely without baselines.",
          "Some opportunities have time or cost estimates.",
          "Priority opportunities have baseline measures, savings estimates and payback view.",
          "Benefits are tracked after implementation and used to guide future investment."
        ],
        next: [
          "Use AI to convert process observations into rough time-saving hypotheses.",
          "Gather baseline volumes, hourly cost assumptions and current cycle times.",
          "Build a simple ROI calculator for each shortlisted opportunity.",
          "Track actual adoption and savings after rollout, not just theoretical value.",
          "Use measured ROI to build case studies and support retainer decisions."
        ]
      },
      {
        id: "process-redesign",
        title: "Workflow redesign",
        ask: "Does the business redesign work around AI or just add tools on top?",
        levels: [
          "AI is bolted onto old processes without redesign.",
          "Small improvements are made by individual users.",
          "Some workflows have been adjusted for AI assistance.",
          "Priority workflows are redesigned with clear human review and escalation points.",
          "The organisation has a repeatable method for redesigning workflows around AI."
        ],
        next: [
          "Identify where AI is currently being used as a faster typing tool rather than changing workflow.",
          "Use AI to propose future-state workflows and compare them with current-state maps.",
          "Define human-in-the-loop review points for quality, compliance and judgement.",
          "Pilot redesigned workflows with a small team and measure cycle-time improvement.",
          "Codify the redesign method so each department can reuse it."
        ]
      },
      {
        id: "process-delivery",
        title: "Implementation discipline",
        ask: "Can the business move from idea to adopted workflow?",
        levels: [
          "Ideas rarely progress beyond discussion.",
          "Pilots happen, but ownership and follow-through are weak.",
          "Basic delivery plans exist for some AI initiatives.",
          "Initiatives have owners, milestones, training, adoption measures and risk controls.",
          "AI delivery uses a repeatable playbook with lessons learned and scaling criteria."
        ],
        next: [
          "Create a one-page pilot canvas for each AI initiative.",
          "Assign a business owner, success measure, user group and go/no-go date.",
          "Use AI-generated project updates to keep delivery visible without admin burden.",
          "Include adoption metrics and risk checks in every pilot review.",
          "Turn successful pilots into standard operating procedures and training assets."
        ]
      }
    ]
  },
  {
    id: "people",
    name: "People & Skills",
    prompt: "Can staff use AI confidently, responsibly and consistently?",
    questions: [
      {
        id: "people-literacy",
        title: "AI literacy",
        ask: "How well do staff understand AI's practical uses and limits?",
        levels: [
          "Most staff have little understanding of AI.",
          "Some staff experiment personally, but knowledge is uneven.",
          "Basic awareness exists, but confidence varies by team.",
          "Staff understand approved use cases, risks and validation expectations.",
          "AI literacy is embedded into onboarding, role training and continuous learning."
        ],
        next: [
          "Run a practical AI awareness session focused on everyday tasks, not theory.",
          "Survey confidence and identify teams needing support.",
          "Create role-specific examples: finance, sales, operations, HR and leadership.",
          "Train staff on validation, data handling and when not to use AI.",
          "Refresh training as tools and policies evolve."
        ]
      },
      {
        id: "people-skills",
        title: "Prompting and review skills",
        ask: "Can staff get useful outputs and check them properly?",
        levels: [
          "Staff do not know how to prompt or validate outputs.",
          "Some users can write prompts, but outputs are inconsistent.",
          "Basic prompt templates exist for common tasks.",
          "Teams use tested prompts, review checklists and quality standards.",
          "Prompt libraries and review methods are maintained and improved over time."
        ],
        next: [
          "Create starter prompts for the top 10 repetitive tasks.",
          "Teach staff to provide context, constraints, examples and output format.",
          "Build review checklists for accuracy, tone, compliance and missing assumptions.",
          "Create a shared prompt library with owners and usage notes.",
          "Measure which prompts save time and refine or retire weak ones."
        ]
      },
      {
        id: "people-adoption",
        title: "Adoption behaviour",
        ask: "Are staff actually changing how they work?",
        levels: [
          "AI usage is minimal or hidden.",
          "Usage depends on enthusiastic individuals.",
          "Some teams use AI for selected tasks.",
          "Priority workflows show regular, visible and measured AI usage.",
          "AI-assisted working is normalised and continuously improved."
        ],
        next: [
          "Identify current informal AI usage and remove fear by setting clear boundaries.",
          "Pick a few high-frequency tasks where AI can save visible time quickly.",
          "Track usage and ask teams what blocks adoption.",
          "Build AI steps into standard workflows rather than relying on memory.",
          "Create champions who share examples and coach colleagues."
        ]
      },
      {
        id: "people-resistance",
        title: "Resistance and trust",
        ask: "Are concerns about quality, job impact and control being managed?",
        levels: [
          "Resistance is ignored or misunderstood.",
          "Concerns are heard informally but not acted on.",
          "Common concerns are known, but mitigation is limited.",
          "Leaders actively manage trust, role impact, quality and escalation routes.",
          "Trust is maintained through transparent governance, evidence and staff involvement."
        ],
        next: [
          "Use an anonymous survey to gather concerns and themes.",
          "Use AI to cluster concerns into job security, quality, ethics, workload and data risk.",
          "Address concerns directly in communications and training.",
          "Show measured benefits and examples where AI supports rather than replaces staff.",
          "Involve staff in selecting and improving AI-enabled workflows."
        ]
      },
      {
        id: "people-capacity",
        title: "Learning capacity",
        ask: "Does the business make time for staff to learn and adapt?",
        levels: [
          "No time is allocated for learning.",
          "Learning happens only when individuals make time.",
          "Some training is offered, but follow-up is weak.",
          "Teams have protected time, practice tasks and manager support.",
          "Continuous learning is built into role expectations and team routines."
        ],
        next: [
          "Set aside short weekly practice slots during the diagnostic or pilot period.",
          "Give staff real tasks to improve with AI, not generic demos.",
          "Ask managers to review examples and remove blockers.",
          "Use AI to create micro-learning guides for each role.",
          "Build AI improvement into team retrospectives and development plans."
        ]
      }
    ]
  },
  {
    id: "governance",
    name: "Governance & Risk",
    prompt: "Is AI use safe, compliant, controlled and auditable?",
    questions: [
      {
        id: "governance-policy",
        title: "AI usage policy",
        ask: "Does the business have clear rules for AI use?",
        levels: [
          "No AI policy exists.",
          "Informal guidance exists but is not documented.",
          "A basic policy exists but is not widely understood.",
          "Policy is practical, role-specific and used in training.",
          "Policy is reviewed regularly and embedded into governance routines."
        ],
        next: [
          "Draft a simple policy covering permitted tools, prohibited data and review expectations.",
          "Use AI to convert policy into role-specific do/don't examples.",
          "Train staff on policy using realistic scenarios.",
          "Add policy checks into tool approval, onboarding and pilot reviews.",
          "Review policy quarterly as tools, regulations and client expectations change."
        ]
      },
      {
        id: "governance-shadow",
        title: "Shadow AI visibility",
        ask: "Does the organisation know how staff already use AI?",
        levels: [
          "Shadow AI usage is unknown.",
          "Leaders suspect usage but have no visibility.",
          "Some usage has been disclosed or surveyed.",
          "Shadow AI risks are documented and managed through approved alternatives.",
          "Usage is continuously monitored through policy, training and tool governance."
        ],
        next: [
          "Run a no-blame survey to understand which AI tools staff use and why.",
          "Identify risky usage patterns and unmet needs driving shadow AI.",
          "Provide approved alternatives for common tasks.",
          "Create reporting routes for new use cases and concerns.",
          "Review shadow AI trends alongside training and tool adoption data."
        ]
      },
      {
        id: "governance-data",
        title: "Confidentiality and data protection",
        ask: "Are client, employee and sensitive data protected in AI workflows?",
        levels: [
          "Sensitive data may be entered into unapproved tools.",
          "Staff know some data is sensitive, but rules are vague.",
          "Data protection guidance exists but is not AI-specific.",
          "AI workflows include data classification, redaction and approval rules.",
          "Controls are tested and evidenced for GDPR, contractual and sector obligations."
        ],
        next: [
          "Classify common data types and define what cannot be entered into public AI tools.",
          "Create redaction examples for client, financial, employee and commercially sensitive data.",
          "Build safe templates for tasks that use sensitive context.",
          "Audit priority workflows for data exposure before scaling.",
          "Record evidence of controls for client assurance and regulatory review."
        ]
      },
      {
        id: "governance-quality",
        title: "Output quality and human review",
        ask: "Are AI outputs checked before they affect clients, staff or decisions?",
        levels: [
          "No formal review expectations exist.",
          "Users are told to check outputs, but standards are unclear.",
          "Some review checklists exist for high-risk tasks.",
          "Review rules are built into workflows with clear accountability.",
          "Quality monitoring identifies recurring issues and improves prompts, tools and training."
        ],
        next: [
          "Define which outputs require human review, second review or cannot use AI.",
          "Create task-specific review checklists for accuracy, bias, tone and completeness.",
          "Add approval points to high-risk workflows.",
          "Track rework, errors and exceptions from AI-assisted work.",
          "Use error patterns to improve prompts, training and workflow design."
        ]
      },
      {
        id: "governance-vendors",
        title: "Vendor and model governance",
        ask: "Are AI vendors, models and integrations assessed before use?",
        levels: [
          "Tools are adopted without formal assessment.",
          "Basic commercial checks happen, but AI risks are missed.",
          "Some vendor assessment questions include security and data use.",
          "AI vendors are assessed for data handling, model behaviour, security and exit risk.",
          "Vendor governance is repeatable, documented and reviewed through the tool lifecycle."
        ],
        next: [
          "Create a short AI vendor checklist covering data use, retention, security and terms.",
          "Use AI to compare vendor responses and flag missing assurances.",
          "Require approval before connecting vendors to sensitive data or core systems.",
          "Track vendor risks, renewal dates and tool owners.",
          "Review vendor performance against value, risk and adoption before renewal."
        ]
      }
    ]
  }
];

const loginPanel = document.getElementById("loginPanel");
const adminApp = document.getElementById("adminApp");
const questionnaire = document.getElementById("questionnaire");
const dimensionScores = document.getElementById("dimensionScores");
const priorityActions = document.getElementById("priorityActions");
const totalScore = document.getElementById("totalScore");
const scoreBand = document.getElementById("scoreBand");

function fnv1a64(value) {
  let hash = 0xcbf29ce484222325n;
  for (const char of value) {
    hash ^= BigInt(char.codePointAt(0));
    hash = BigInt.asUintN(64, hash * 0x100000001b3n);
  }
  return hash.toString(16).padStart(16, "0");
}

function isLoggedIn() {
  return sessionStorage.getItem(SESSION_KEY) === "true";
}

function showAdmin() {
  loginPanel.hidden = true;
  adminApp.hidden = false;
}

function showLogin() {
  loginPanel.hidden = false;
  adminApp.hidden = true;
}

function maturityBand(score) {
  if (score >= 80) return "Resilient: scale and optimise";
  if (score >= 60) return "Managed: strengthen adoption and measurement";
  if (score >= 40) return "Emerging: focus on priority foundations";
  if (score >= 20) return "Fragmented: establish control and quick wins";
  return "Unassessed or high risk";
}

function selectedValue(questionId) {
  const selected = document.querySelector(`input[name="${questionId}"]:checked`);
  return selected ? Number(selected.value) : null;
}

function renderQuestionnaire() {
  questionnaire.innerHTML = dimensions.map((dimension) => `
    <section class="dimension-section" id="${dimension.id}">
      <div class="dimension-header">
        <div>
          <p class="section-kicker">${dimension.name}</p>
          <h2>${dimension.name}</h2>
          <p>${dimension.prompt}</p>
        </div>
        <span class="dimension-pill" id="${dimension.id}-score">0/20</span>
      </div>
      ${dimension.questions.map((question, questionIndex) => `
        <article class="question-card">
          <div>
            <h3>${questionIndex + 1}. ${question.title}</h3>
            <p>${question.ask}</p>
            <div class="next-step" id="${question.id}-next" hidden></div>
            <label class="question-notes">
              Notes / evidence
              <textarea id="${question.id}-notes" placeholder="Capture examples, systems, risks, evidence and follow-up questions."></textarea>
            </label>
          </div>
          <div class="level-options">
            ${question.levels.map((level, levelIndex) => `
              <label class="level-option">
                <input type="radio" name="${question.id}" value="${levelIndex}">
                <span>
                  <strong>Grade ${levelIndex}: ${levelLabel(levelIndex)}</strong>
                  <span>${level}</span>
                </span>
              </label>
            `).join("")}
          </div>
        </article>
      `).join("")}
    </section>
  `).join("");

  questionnaire.addEventListener("change", updateScores);
  questionnaire.addEventListener("input", updateScores);
}

function levelLabel(level) {
  return ["Absent", "Ad hoc", "Developing", "Managed", "Optimised"][level];
}

function updateScores() {
  let total = 0;
  const allActions = [];

  dimensionScores.innerHTML = dimensions.map((dimension) => {
    let dimensionTotal = 0;

    dimension.questions.forEach((question) => {
      const value = selectedValue(question.id);
      const nextBox = document.getElementById(`${question.id}-next`);

      if (value !== null) {
        dimensionTotal += value;
        nextBox.hidden = false;
        nextBox.innerHTML = `
          <strong>To reach the next grade</strong>
          ${question.next[value]}
        `;

        if (value < 3) {
          allActions.push({
            dimension: dimension.name,
            question: question.title,
            score: value,
            action: question.next[value]
          });
        }
      } else if (nextBox) {
        nextBox.hidden = true;
        nextBox.innerHTML = "";
      }
    });

    total += dimensionTotal;
    document.getElementById(`${dimension.id}-score`).textContent = `${dimensionTotal}/20`;

    return `
      <div>
        <span>${dimension.name}</span>
        <meter min="0" max="20" value="${dimensionTotal}"></meter>
        <b>${dimensionTotal}/20</b>
      </div>
    `;
  }).join("");

  totalScore.textContent = total;
  scoreBand.textContent = maturityBand(total);

  allActions.sort((a, b) => a.score - b.score);
  priorityActions.innerHTML = allActions.slice(0, 8).map((item) => `
    <article class="priority-item">
      <h3>${item.dimension}: ${item.question}</h3>
      <p><strong>Current grade ${item.score}.</strong> ${item.action}</p>
    </article>
  `).join("") || `<article class="priority-item"><h3>No priority actions yet</h3><p>Score the questionnaire to generate recommendations.</p></article>`;
}

function collectResults() {
  return {
    client: {
      name: document.getElementById("clientName").value,
      sector: document.getElementById("clientSector").value,
      assessor: document.getElementById("assessorName").value,
      date: new Date().toISOString()
    },
    score: Number(totalScore.textContent),
    band: scoreBand.textContent,
    dimensions: dimensions.map((dimension) => ({
      id: dimension.id,
      name: dimension.name,
      score: dimension.questions.reduce((sum, question) => sum + (selectedValue(question.id) ?? 0), 0),
      questions: dimension.questions.map((question) => {
        const value = selectedValue(question.id);
        return {
          id: question.id,
          title: question.title,
          grade: value,
          gradeLabel: value === null ? null : levelLabel(value),
          answer: value === null ? null : question.levels[value],
          nextGradeAction: value === null ? null : question.next[value],
          notes: document.getElementById(`${question.id}-notes`).value
        };
      })
    }))
  };
}

function exportJson() {
  const payload = JSON.stringify(collectResults(), null, 2);
  const blob = new Blob([payload], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const client = document.getElementById("clientName").value.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-") || "client";
  link.href = url;
  link.download = `${client}-airi-diagnostic.json`;
  link.click();
  URL.revokeObjectURL(url);
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
document.getElementById("exportButton").addEventListener("click", exportJson);

renderQuestionnaire();
updateScores();

if (isLoggedIn()) {
  showAdmin();
} else {
  showLogin();
}
