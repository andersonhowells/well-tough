const questions = [
  {
    dimension: "Leadership",
    text: "How clearly has leadership defined why AI matters to the business?",
    options: [
      "No clear leadership intent yet.",
      "Interested, but mostly exploratory.",
      "Some agreed priorities, but limited ownership.",
      "Clear sponsor, objectives and decision rhythm."
    ]
  },
  {
    dimension: "Data",
    text: "How ready are your systems, data and documents for AI-assisted work?",
    options: [
      "Scattered and inconsistent.",
      "Core systems exist, but data quality is uneven.",
      "Most important data is organised enough for pilots.",
      "Data, access and ownership are well controlled."
    ]
  },
  {
    dimension: "Process",
    text: "How well do you know which workflows AI should improve first?",
    options: [
      "We have not mapped opportunities.",
      "We have ideas, but no prioritisation.",
      "We know several high-friction workflows.",
      "We have ranked opportunities by value, risk and feasibility."
    ]
  },
  {
    dimension: "People",
    text: "How confident are staff using AI safely and effectively?",
    options: [
      "Most staff are unsure or not using it.",
      "A few confident users, but inconsistent practice.",
      "Some training and examples exist.",
      "Role-based training, prompts and review habits are in place."
    ]
  },
  {
    dimension: "Governance",
    text: "How controlled is AI usage today?",
    options: [
      "No clear policy; possible shadow AI.",
      "Basic rules exist, but not widely understood.",
      "Approved tools and guidance exist for common use cases.",
      "Policy, data rules, approvals and review checks are embedded."
    ]
  },
  {
    dimension: "Measurement",
    text: "How well do you measure productivity gains or risk reduction from AI?",
    options: [
      "We do not measure it.",
      "We use rough estimates only.",
      "Some pilots have baseline and target measures.",
      "Benefits, adoption and risk are tracked regularly."
    ]
  },
  {
    dimension: "Tooling",
    text: "What best describes your current AI tooling?",
    options: [
      "Mostly unmanaged personal tools or none.",
      "A few approved tools, but no standard approach.",
      "Approved tools for some teams and use cases.",
      "Tools are selected, configured and governed around workflows."
    ]
  },
  {
    dimension: "Adoption",
    text: "How much AI-assisted work is already part of normal operations?",
    options: [
      "Very little.",
      "Individual experimentation.",
      "Some repeatable team-level use cases.",
      "Multiple workflows use AI with clear human review."
    ]
  }
];

const sectorMultipliers = {
  professional: 1.0,
  accountancy: 1.08,
  legal: 1.05,
  recruitment: 1.12,
  manufacturing: 0.86,
  education: 0.82,
  property: 1.04,
  other: 1.0
};

function money(value) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0
  }).format(Math.max(0, value));
}

function band(score) {
  if (score >= 76) return "Managed: ready to scale with control";
  if (score >= 56) return "Emerging: good foundations, uneven adoption";
  if (score >= 36) return "Fragmented: clear value, but foundations needed";
  return "Early stage: start with controlled quick wins";
}

function opportunityLine(score) {
  const gap = 100 - score;
  if (gap >= 65) return "Improvement opportunity: high. Foundations need building before value can scale.";
  if (gap >= 45) return "Improvement opportunity: strong. There is likely value trapped in workflows and inconsistent adoption.";
  if (gap >= 25) return "Improvement opportunity: moderate. The focus is scaling, governance and measurement.";
  return "Improvement opportunity: targeted. The focus is optimisation and repeatability.";
}

function narrative(score, annualValue, netBenefit) {
  if (score >= 76) {
    return `You appear to have relatively strong foundations. The Well Tough opportunity is likely to come from scaling what already works, improving measurement, strengthening governance and converting good local practice into repeatable operating capability. Indicative year-one net benefit after intervention: ${money(netBenefit)}.`;
  }
  if (score >= 56) {
    return `You likely have promising foundations, but value may be inconsistent across teams. A Well Tough diagnostic should identify the highest-value workflows, formalise governance, prioritise training and turn scattered usage into measurable adoption. Indicative year-one net benefit after intervention: ${money(netBenefit)}.`;
  }
  if (score >= 36) {
    return `There is likely significant untapped value, but unmanaged adoption could create risk or wasted effort. Well Tough would start by baselining maturity, selecting high-friction workflows, introducing governance and training users around measured use cases. Potential annual value after intervention: ${money(annualValue)}.`;
  }
  return `You are probably early in AI adoption, which means current savings may be low but the improvement opportunity may be material. The best starting point is not a large tool rollout: it is a controlled Well Tough baseline, clear rules, staff confidence and two or three practical quick wins. Potential annual value after intervention: ${money(annualValue)}.`;
}

function renderQuestions() {
  const container = document.getElementById("assessmentQuestions");
  container.innerHTML = questions.map((question, index) => `
    <fieldset class="self-question">
      <legend>
        <span>${question.dimension}</span>
        ${question.text}
      </legend>
      <div class="self-options">
        ${question.options.map((option, optionIndex) => `
          <label>
            <input type="radio" name="question-${index}" value="${optionIndex}" ${optionIndex === 0 ? "checked" : ""}>
            <span>${option}</span>
          </label>
        `).join("")}
      </div>
    </fieldset>
  `).join("");
}

function calculate() {
  const values = questions.map((_, index) => {
    const selected = document.querySelector(`input[name="question-${index}"]:checked`);
    return selected ? Number(selected.value) : 0;
  });

  const rawScore = values.reduce((sum, value) => sum + value, 0);
  const score = Math.round((rawScore / (questions.length * 3)) * 100);
  const employees = Math.max(1, Number(document.getElementById("employees").value) || 1);
  const phaseUsers = Math.min(employees, Math.max(1, Number(document.getElementById("phaseUsers").value) || 1));
  const salary = Number(document.getElementById("salary").value);
  const adminHours = Number(document.getElementById("adminHours").value);
  const sector = document.getElementById("sector").value;

  const hourlyCost = salary / (46 * 37.5);
  const maturityGap = Math.max(0.15, (100 - score) / 100);
  const readinessToCapture = 0.55 + (score / 100) * 0.35;
  const wellToughFrameworkFactor = 1.22;
  const realisticAutomationShare = 0.22 + maturityGap * 0.18;
  const annualValue = phaseUsers * adminHours * 46 * hourlyCost * realisticAutomationShare * readinessToCapture * wellToughFrameworkFactor * sectorMultipliers[sector];
  const diagnosticCost = 2495;
  const trainingAndTooling = phaseUsers * 420;
  const governanceSetup = 1250;
  const yearOneCost = diagnosticCost + trainingAndTooling + governanceSetup;
  const netBenefit = annualValue - yearOneCost;
  const monthlyBenefit = annualValue / 12;
  const paybackMonths = monthlyBenefit > 0 ? yearOneCost / monthlyBenefit : 0;

  document.getElementById("assessmentScore").textContent = score;
  document.getElementById("assessmentBand").textContent = band(score);
  document.getElementById("opportunityLine").textContent = opportunityLine(score);
  document.getElementById("annualValue").textContent = money(annualValue);
  document.getElementById("yearOneCost").textContent = money(yearOneCost);
  document.getElementById("netBenefit").textContent = `${netBenefit >= 0 ? "" : "-"}${money(Math.abs(netBenefit))}`;
  document.getElementById("payback").textContent = paybackMonths > 24 ? "24+ months" : `${Math.max(1, Math.round(paybackMonths))} months`;
  document.getElementById("assessmentNarrative").textContent = narrative(score, annualValue, netBenefit);
}

function syncPhaseUsers() {
  const employeesInput = document.getElementById("employees");
  const phaseUsersInput = document.getElementById("phaseUsers");
  const employees = Math.max(1, Number(employeesInput.value) || 1);
  const phaseUsers = Math.max(1, Number(phaseUsersInput.value) || 1);

  phaseUsersInput.max = String(employees);

  if (phaseUsers > employees) {
    phaseUsersInput.value = employees;
  }
}

renderQuestions();
syncPhaseUsers();

document.getElementById("employees").addEventListener("input", syncPhaseUsers);
document.getElementById("phaseUsers").addEventListener("input", syncPhaseUsers);

document.getElementById("assessmentForm").addEventListener("submit", (event) => {
  event.preventDefault();
  syncPhaseUsers();
  calculate();
  document.getElementById("assessmentResults").hidden = false;
  document.getElementById("assessmentResults").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});
