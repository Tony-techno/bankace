// ── BankAce — Main App Controller ─────────────────

// ── Navigation ─────────────────────────────────────
const TAB_ORDER = ["home", "quiz", "mock", "pyq", "analysis", "resources"];

function goTo(tabId) {
  // Hide all sections
  document.querySelectorAll(".sec").forEach(s => s.classList.remove("on"));
  // Deactivate all nav buttons
  document.querySelectorAll(".nb").forEach(b => b.classList.remove("active"));

  // Show target section
  const target = document.getElementById("s-" + tabId);
  if (target) target.classList.add("on");

  // Activate correct nav button
  const navBtn = document.querySelector(`.nb[data-tab="${tabId}"]`);
  if (navBtn) navBtn.classList.add("active");

  // Scroll to top on mobile
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ── Dashboard rendering ────────────────────────────
function renderDashboard() {
  // Stats
  document.getElementById("home-stats").innerHTML = HOME_STATS.map(s => `
    <div class="stat-card">
      <div class="stat-label">${s.label}</div>
      <div class="stat-value">${s.value}</div>
      <div class="stat-sub">${s.sub}</div>
    </div>
  `).join("");

  // Subject bars
  document.getElementById("home-bars").innerHTML = SUBJECT_DATA.map(t => {
    const color = t.pct < 50 ? "#E24B4A" : t.pct < 65 ? "#BA7517" : "#0F6E56";
    return `
      <div class="bar-row">
        <div class="bar-name">${t.name}</div>
        <div class="bar-bg"><div class="bar-fill" style="width:${t.pct}%;background:${color};"></div></div>
        <div class="bar-pct">${t.pct}%</div>
      </div>`;
  }).join("");

  // Action plan
  document.getElementById("action-plan").innerHTML = ACTION_PLAN.map(a => `
    <div class="i-row">
      <div class="i-icon">${a.icon}</div>
      <div class="i-text">${a.text}</div>
    </div>
  `).join("");

  // Exam dates
  document.getElementById("exam-dates").innerHTML = EXAM_DATES.map(e => `
    <div class="py-row">
      <div style="flex:1;">
        <div style="font-size:13px;font-weight:500;color:var(--text);">${e.exam}</div>
        <div style="font-size:12px;color:var(--text-muted);">${e.status}</div>
      </div>
      <span class="tag tag-blue">${e.date}</span>
    </div>
  `).join("");
}

// ── Wire up all navigation clicks ─────────────────
function bindNavigation() {
  // Nav bar buttons
  document.querySelectorAll(".nb[data-tab]").forEach(btn => {
    btn.addEventListener("click", () => goTo(btn.dataset.tab));
  });

  // Inline "go-to" buttons anywhere in the page
  document.querySelectorAll("[data-goto]").forEach(btn => {
    btn.addEventListener("click", () => goTo(btn.dataset.goto));
  });
}

// ── Initialise everything ──────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  renderDashboard();
  bindNavigation();
  initQuiz();
  initMock();
  initPYQ();
  initAnalysis();
  initResources();

  // Start on dashboard
  goTo("home");
});
