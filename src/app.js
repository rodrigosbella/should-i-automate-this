const $ = (id) => document.getElementById(id);

const translations = {
  en: {
    brand: "Automation Worth It",
    eyebrow: "Decision helper",
    title: "Should I automate this?",
    subtitle: "Estimate effort, payback, risk, and process maturity before turning a recurring task into automation.",
    loadExample: "Load example",
    copySummary: "Copy summary",
    scoreLabel: "Automation score",
    taskProfile: "Task profile",
    taskProfileHint: "Describe the recurring work as it happens today.",
    taskName: "Task name",
    minutesPerRun: "Minutes per run",
    runsPerWeek: "Runs per week",
    peopleInvolved: "People involved",
    buildHours: "Build effort (hours)",
    errorFrequency: "Error frequency",
    errorImpact: "Error impact",
    processStability: "Process stability",
    maintenanceEffort: "Maintenance effort",
    ready: "Ready",
    recommendation: "Recommendation",
    hoursMonth: "Hours/month",
    hoursYear: "Hours/year",
    payback: "Payback",
    risk: "Risk",
    decisionMap: "Decision map",
    decisionMapHint: "A quick view of value, effort, maturity, and operational risk.",
    summaryTitle: "Markdown summary",
    summaryHint: "Copy this into a ticket, proposal, or documentation page.",
    volume: "Volume",
    impact: "Impact",
    maturity: "Maturity",
    paybackAxis: "Payback",
    effort: "Effort",
    copied: "Markdown summary copied.",
    score: "Score",
    monthsShort: "mo",
    hoursUnit: "hours",
    riskLow: "Low",
    riskMedium: "Medium",
    riskHigh: "High",
    riskCritical: "Critical",
    select: {
      errorFrequency: ["Rare", "Sometimes", "Often", "Very often"],
      errorImpact: ["Low", "Medium", "High", "Critical"],
      processStability: ["Unclear or chaotic", "Changes often", "Mostly stable", "Stable and documented"],
      maintenanceEffort: ["Low", "Medium", "High", "Very high"],
    },
    recs: {
      automate: ["Automate now", "This task has strong volume, clear payback, and enough stability to justify automation."],
      document: ["Document first", "The task has automation potential, but the process is still unstable. Document and standardize it before automating."],
      careful: ["Automate carefully", "There is a good case for automation, but scope it small and keep maintenance effort visible."],
      simplify: ["Simplify first", "The task may not be ready for automation. Reduce steps, clarify ownership, or remove manual variation first."],
      skip: ["Do not automate yet", "The current volume or payback does not justify automation. Revisit if frequency or impact increases."],
    },
    summary: {
      title: "Automation Assessment",
      recommendation: "Recommendation",
      estimate: "Estimate",
      notes: "Notes",
      minutes: "Minutes per run",
      runs: "Runs per week",
      people: "People involved",
      monthly: "Monthly time spent",
      yearly: "Yearly time spent",
      build: "Automation build effort",
      payback: "Estimated payback",
      score: "Automation score",
      note: "Review process stability, maintenance effort, and permission/security implications before implementation.",
    },
  },
  pt: {
    brand: "Vale Automatizar?",
    eyebrow: "Ajuda para decis\u00e3o",
    title: "Devo automatizar isso?",
    subtitle: "Estime esfor\u00e7o, retorno, risco e maturidade do processo antes de transformar uma tarefa recorrente em automa\u00e7\u00e3o.",
    loadExample: "Carregar exemplo",
    copySummary: "Copiar resumo",
    scoreLabel: "Score de automa\u00e7\u00e3o",
    taskProfile: "Perfil da tarefa",
    taskProfileHint: "Descreva como o trabalho recorrente acontece hoje.",
    taskName: "Nome da tarefa",
    minutesPerRun: "Minutos por execu\u00e7\u00e3o",
    runsPerWeek: "Execu\u00e7\u00f5es por semana",
    peopleInvolved: "Pessoas envolvidas",
    buildHours: "Esfor\u00e7o para automatizar (horas)",
    errorFrequency: "Frequ\u00eancia de erro",
    errorImpact: "Impacto do erro",
    processStability: "Estabilidade do processo",
    maintenanceEffort: "Esfor\u00e7o de manuten\u00e7\u00e3o",
    ready: "Pronto",
    recommendation: "Recomenda\u00e7\u00e3o",
    hoursMonth: "Horas/m\u00eas",
    hoursYear: "Horas/ano",
    payback: "Retorno",
    risk: "Risco",
    decisionMap: "Mapa de decis\u00e3o",
    decisionMapHint: "Uma vis\u00e3o r\u00e1pida de valor, esfor\u00e7o, maturidade e risco operacional.",
    summaryTitle: "Resumo em Markdown",
    summaryHint: "Copie para um chamado, proposta ou documenta\u00e7\u00e3o.",
    volume: "Volume",
    impact: "Impacto",
    maturity: "Maturidade",
    paybackAxis: "Retorno",
    effort: "Esfor\u00e7o",
    copied: "Resumo em Markdown copiado.",
    score: "Score",
    monthsShort: "meses",
    hoursUnit: "horas",
    riskLow: "Baixo",
    riskMedium: "M\u00e9dio",
    riskHigh: "Alto",
    riskCritical: "Cr\u00edtico",
    select: {
      errorFrequency: ["Raro", "\u00c0s vezes", "Frequente", "Muito frequente"],
      errorImpact: ["Baixo", "M\u00e9dio", "Alto", "Cr\u00edtico"],
      processStability: ["Confuso ou ca\u00f3tico", "Muda com frequ\u00eancia", "Quase est\u00e1vel", "Est\u00e1vel e documentado"],
      maintenanceEffort: ["Baixo", "M\u00e9dio", "Alto", "Muito alto"],
    },
    recs: {
      automate: ["Automatize agora", "A tarefa tem bom volume, retorno claro e estabilidade suficiente para justificar a automa\u00e7\u00e3o."],
      document: ["Documente primeiro", "A tarefa tem potencial de automa\u00e7\u00e3o, mas o processo ainda est\u00e1 inst\u00e1vel. Documente e padronize antes de automatizar."],
      careful: ["Automatize com cuidado", "Existe um bom caso para automa\u00e7\u00e3o, mas comece pequeno e mantenha o esfor\u00e7o de manuten\u00e7\u00e3o vis\u00edvel."],
      simplify: ["Simplifique primeiro", "A tarefa talvez ainda n\u00e3o esteja pronta para automa\u00e7\u00e3o. Reduza etapas, clareie respons\u00e1veis ou remova varia\u00e7\u00f5es manuais."],
      skip: ["N\u00e3o automatize ainda", "O volume ou retorno atual ainda n\u00e3o justifica automa\u00e7\u00e3o. Reavalie se a frequ\u00eancia ou impacto aumentar."],
    },
    summary: {
      title: "Avalia\u00e7\u00e3o de Automa\u00e7\u00e3o",
      recommendation: "Recomenda\u00e7\u00e3o",
      estimate: "Estimativa",
      notes: "Notas",
      minutes: "Minutos por execu\u00e7\u00e3o",
      runs: "Execu\u00e7\u00f5es por semana",
      people: "Pessoas envolvidas",
      monthly: "Tempo mensal gasto",
      yearly: "Tempo anual gasto",
      build: "Esfor\u00e7o para automatizar",
      payback: "Retorno estimado",
      score: "Score de automa\u00e7\u00e3o",
      note: "Revise estabilidade do processo, esfor\u00e7o de manuten\u00e7\u00e3o e impactos de permiss\u00e3o/seguran\u00e7a antes da implementa\u00e7\u00e3o.",
    },
  },
};

const state = { lang: "en" };

const fields = [
  "taskName",
  "minutesPerRun",
  "runsPerWeek",
  "peopleInvolved",
  "buildHours",
  "errorFrequency",
  "errorImpact",
  "processStability",
  "maintenanceEffort",
];

const examples = {
  en: {
    taskName: "Reconcile access requests",
    minutesPerRun: 18,
    runsPerWeek: 12,
    peopleInvolved: 2,
    buildHours: 10,
    errorFrequency: 2,
    errorImpact: 2,
    processStability: 2,
    maintenanceEffort: 1,
  },
  pt: {
    taskName: "Conciliar solicita\u00e7\u00f5es de acesso",
    minutesPerRun: 18,
    runsPerWeek: 12,
    peopleInvolved: 2,
    buildHours: 10,
    errorFrequency: 2,
    errorImpact: 2,
    processStability: 2,
    maintenanceEffort: 1,
  },
};

function t(path) {
  return path.split(".").reduce((obj, key) => obj?.[key], translations[state.lang]);
}

function num(id) {
  return Number($(id).value || 0);
}

function round(value, digits = 1) {
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}

function formatNumber(value, digits = 1) {
  return new Intl.NumberFormat(state.lang === "pt" ? "pt-BR" : "en-US", {
    maximumFractionDigits: digits,
    minimumFractionDigits: value % 1 === 0 ? 0 : digits,
  }).format(value);
}

function populateSelect(id, selectedValue) {
  const select = $(id);
  const options = t(`select.${id}`);
  select.innerHTML = "";
  options.forEach((label, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = label;
    select.appendChild(option);
  });
  select.value = String(selectedValue);
  renderCustomSelect(id);
}

function renderCustomSelect(id) {
  const select = $(id);
  let wrapper = document.querySelector(`[data-select-wrapper="${id}"]`);

  if (!wrapper) {
    wrapper = document.createElement("div");
    wrapper.className = "custom-select";
    wrapper.dataset.selectWrapper = id;
    select.insertAdjacentElement("afterend", wrapper);
  }

  const selected = select.options[select.selectedIndex]?.textContent || "";
  wrapper.innerHTML = `
    <button type="button" class="select-button" aria-haspopup="listbox" aria-expanded="false">${selected}</button>
    <div class="select-menu" role="listbox">
      ${Array.from(select.options).map((option) => `
        <button type="button" class="select-option ${option.selected ? "active" : ""}" data-value="${option.value}" role="option" aria-selected="${option.selected}">
          ${option.textContent}
        </button>
      `).join("")}
    </div>
  `;

  const button = wrapper.querySelector(".select-button");
  button.addEventListener("click", () => {
    document.querySelectorAll(".custom-select.open").forEach((openSelect) => {
      if (openSelect !== wrapper) openSelect.classList.remove("open");
    });
    wrapper.classList.toggle("open");
    button.setAttribute("aria-expanded", wrapper.classList.contains("open") ? "true" : "false");
  });

  wrapper.querySelectorAll(".select-option").forEach((optionButton) => {
    optionButton.addEventListener("click", () => {
      select.value = optionButton.dataset.value;
      select.dispatchEvent(new Event("change", { bubbles: true }));
      wrapper.classList.remove("open");
      renderCustomSelect(id);
    });
  });
}

function applyLanguage(lang) {
  state.lang = lang;
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-svg]").forEach((node) => {
    node.textContent = t(node.dataset.i18nSvg);
  });

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });

  const currentValues = {
    errorFrequency: $("errorFrequency").value || 2,
    errorImpact: $("errorImpact").value || 1,
    processStability: $("processStability").value || 3,
    maintenanceEffort: $("maintenanceEffort").value || 1,
  };

  populateSelect("errorFrequency", currentValues.errorFrequency);
  populateSelect("errorImpact", currentValues.errorImpact);
  populateSelect("processStability", currentValues.processStability);
  populateSelect("maintenanceEffort", currentValues.maintenanceEffort);

  render();
}

function getInputs() {
  return {
    taskName: $("taskName").value.trim() || (state.lang === "pt" ? "Tarefa sem nome" : "Untitled task"),
    minutesPerRun: num("minutesPerRun"),
    runsPerWeek: num("runsPerWeek"),
    peopleInvolved: num("peopleInvolved"),
    buildHours: num("buildHours"),
    errorFrequency: num("errorFrequency"),
    errorImpact: num("errorImpact"),
    processStability: num("processStability"),
    maintenanceEffort: num("maintenanceEffort"),
  };
}

function calculate(input) {
  const weeklyMinutes = input.minutesPerRun * input.runsPerWeek * input.peopleInvolved;
  const monthlyHours = weeklyMinutes * 4.333 / 60;
  const yearlyHours = monthlyHours * 12;
  const paybackMonths = monthlyHours > 0 ? input.buildHours / monthlyHours : Infinity;

  const volume = Math.min(monthlyHours / 30, 1);
  const impact = Math.min((input.errorFrequency + input.errorImpact) / 6, 1);
  const maturity = input.processStability / 3;
  const payback = Number.isFinite(paybackMonths) ? Math.max(0, Math.min(1, 1 - paybackMonths / 8)) : 0;
  const effort = Math.max(0, Math.min(1, 1 - (input.buildHours / 40 + input.maintenanceEffort / 6) / 2));
  const risk = Math.min((input.errorFrequency * input.errorImpact + input.maintenanceEffort) / 10, 1);

  let score = 0;
  score += volume * 30;
  score += impact * 22;
  score += maturity * 18;
  score += payback * 22;
  score += effort * 14;
  score -= input.maintenanceEffort * 5;
  score = Math.max(0, Math.min(100, Math.round(score)));

  return { monthlyHours, yearlyHours, paybackMonths, score, factors: { volume, impact, maturity, payback, effort, risk } };
}

function recommendation(input, result) {
  if (input.processStability <= 1 && result.score >= 55) return ["document", "Medium"];
  if (result.score >= 75 && result.paybackMonths <= 3) return ["automate", "High"];
  if (result.score >= 55) return ["careful", "Medium"];
  if (result.score >= 35) return ["simplify", "Low"];
  return ["skip", "Low"];
}

function riskLabel(risk) {
  if (risk >= 0.75) return t("riskCritical");
  if (risk >= 0.5) return t("riskHigh");
  if (risk >= 0.25) return t("riskMedium");
  return t("riskLow");
}

function buildSummary(input, result, recKey) {
  const rec = t(`recs.${recKey}`);
  const summary = t("summary");
  const payback = Number.isFinite(result.paybackMonths) ? `${round(result.paybackMonths)} ${t("monthsShort")}` : "N/A";
  return `# ${summary.title}: ${input.taskName}

## ${summary.recommendation}

${rec[0]}

${rec[1]}

## ${summary.estimate}

- ${summary.minutes}: ${input.minutesPerRun}
- ${summary.runs}: ${input.runsPerWeek}
- ${summary.people}: ${input.peopleInvolved}
- ${summary.monthly}: ${round(result.monthlyHours)} ${t("hoursUnit")}
- ${summary.yearly}: ${round(result.yearlyHours)} ${t("hoursUnit")}
- ${summary.build}: ${input.buildHours} ${t("hoursUnit")}
- ${summary.payback}: ${payback}
- ${summary.score}: ${result.score}/100

## ${summary.notes}

${summary.note}
`;
}

function radarPoint(cx, cy, radius, angleDeg, value) {
  const angle = (Math.PI / 180) * angleDeg;
  const distance = radius * value;
  return `${round(cx + Math.cos(angle) * distance, 2)},${round(cy + Math.sin(angle) * distance, 2)}`;
}

function renderRadar(factors) {
  const points = [
    radarPoint(120, 120, 85, -90, factors.volume),
    radarPoint(120, 120, 85, -22, factors.impact),
    radarPoint(120, 120, 85, 54, factors.maturity),
    radarPoint(120, 120, 85, 126, factors.payback),
    radarPoint(120, 120, 85, 202, factors.effort),
  ];
  $("radarShape").setAttribute("points", points.join(" "));
}

function renderFactors(factors) {
  const items = [
    ["volume", factors.volume],
    ["impact", factors.impact],
    ["maturity", factors.maturity],
    ["paybackAxis", factors.payback],
    ["effort", factors.effort],
  ];

  $("factorList").innerHTML = items.map(([label, value]) => `
    <div class="factor">
      <div class="factor-row">
        <span>${t(label)}</span>
        <span>${Math.round(value * 100)}%</span>
      </div>
      <div class="bar"><span style="width:${Math.round(value * 100)}%"></span></div>
    </div>
  `).join("");
}

function render() {
  const input = getInputs();
  const result = calculate(input);
  const [recKey] = recommendation(input, result);
  const rec = t(`recs.${recKey}`);

  $("scoreRing").style.setProperty("--score", result.score);
  $("scoreValue").textContent = result.score;
  $("heroRecommendation").textContent = rec[0];
  $("decisionText").textContent = rec[0];
  $("decisionDetail").textContent = rec[1];
  $("scoreBadge").textContent = `${t("score")} ${result.score}`;
  $("hoursMonth").textContent = formatNumber(round(result.monthlyHours), 1);
  $("hoursYear").textContent = formatNumber(Math.round(result.yearlyHours), 0);
  $("payback").textContent = Number.isFinite(result.paybackMonths) ? `${formatNumber(round(result.paybackMonths), 1)} ${t("monthsShort")}` : "N/A";
  $("riskLevel").textContent = riskLabel(result.factors.risk);
  $("summary").value = buildSummary(input, result, recKey);
  renderRadar(result.factors);
  renderFactors(result.factors);
}

async function copySummary() {
  await navigator.clipboard.writeText($("summary").value);
  const result = $("inlineResult");
  result.textContent = t("copied");
  result.className = "inline-result ok";
}

function loadExample() {
  Object.entries(examples[state.lang]).forEach(([key, value]) => {
    $(key).value = value;
  });
  render();
}

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".custom-select")) {
    document.querySelectorAll(".custom-select.open").forEach((wrapper) => wrapper.classList.remove("open"));
  }
});

fields.forEach((field) => {
  $(field).addEventListener("input", render);
  $(field).addEventListener("change", render);
});

$("copySummary").addEventListener("click", copySummary);
$("loadExample").addEventListener("click", loadExample);
$("automationForm").addEventListener("reset", () => setTimeout(render, 0));

applyLanguage("pt");
