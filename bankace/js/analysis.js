// ── Analysis Module ────────────────────────────────

function barColor(pct) {
  if (pct < 50) return "#E24B4A";
  if (pct < 65) return "#BA7517";
  return "#0F6E56";
}

function initAnalysis() {
  renderWeakAreas();
  renderRoadmap();
  renderTimeAnalysis();

  document.getElementById("gen-plan-btn").addEventListener("click", () => {
    alert("📅 60-Day Study Plan\n\nThis will generate a day-by-day personalized plan based on your weak areas:\n• Puzzles & Seating Arrangement\n• Data Interpretation\n• Number Series\n• Sentence Correction\n\nIncluding daily hour breakdown, topic sequence, and mock test schedule.\n\nEnable in full version with Anthropic API key.");
  });

  document.getElementById("speed-btn").addEventListener("click", () => {
    alert("⚡ Speed Improvement Tips\n\n1. Attempt English first (fastest section)\n2. Skip puzzles that take >3 min — return later\n3. Use Simplification tricks: approximation, Vedic maths\n4. Practice timed drills: 45 sec/question daily\n5. Aim: 30 Qs in 20 min for Reasoning in Prelims\n\nTrack speed weekly using timed mock tests.");
  });
}

function renderWeakAreas() {
  document.getElementById("weak-list").innerHTML = WEAK_AREAS.map(w => `
    <div class="i-row">
      <div class="i-icon">${w.priority === "High" ? "🔴" : "🟡"}</div>
      <div class="i-text" style="flex:1;">
        <b>${w.name}</b> — ${w.pct}% accuracy
        <span class="tag ${w.priority === "High" ? "tag-red" : "tag-amber"}" style="margin-left:8px;">${w.priority}</span>
        <div class="prog-bar">
          <div class="prog-fill" style="width:${w.pct}%;background:${barColor(w.pct)};"></div>
        </div>
        <div style="margin-top:6px;color:var(--text-muted);font-size:12px;">${w.tip}</div>
      </div>
    </div>
  `).join("");
}

function renderRoadmap() {
  document.getElementById("roadmap-list").innerHTML = ROADMAP.map((r, i) => `
    <div class="rm-step">
      <div class="rm-num">${i + 1}</div>
      <div>
        <div class="rm-title">${r.week} — ${r.focus}</div>
        <div class="rm-hrs">${r.hrs} recommended</div>
      </div>
    </div>
  `).join("");
}

function renderTimeAnalysis() {
  const rows = [
    { name: "Your avg time/question", pct: 100, label: "2.8 min", color: "#E24B4A" },
    { name: "IBPS PO target",         pct: 43,  label: "1.2 min", color: "#0F6E56" },
    { name: "Time on Reasoning",      pct: 80,  label: "38m/35q", color: "#BA7517" },
    { name: "Time on Quant",          pct: 70,  label: "33m/35q", color: "#BA7517" },
    { name: "Time on English",        pct: 35,  label: "17m/30q", color: "#0F6E56" },
  ];
  document.getElementById("time-analysis").innerHTML = rows.map(r => `
    <div class="bar-row">
      <div class="bar-name">${r.name}</div>
      <div class="bar-bg"><div class="bar-fill" style="width:${r.pct}%;background:${r.color};"></div></div>
      <div class="bar-pct">${r.label}</div>
    </div>
  `).join("");
}
