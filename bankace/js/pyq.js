// ── PYQ Analysis Module ────────────────────────────

let currentPyqExam = "IBPS PO";

function initPYQ() {
  document.querySelectorAll("#pyq-exam-tabs .etb").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#pyq-exam-tabs .etb").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentPyqExam = btn.dataset.exam;
      renderPYQ();
    });
  });

  document.getElementById("gen-predicted-btn").addEventListener("click", () => {
    alert(`🔮 Predicted Paper — ${currentPyqExam} 2025\n\nBased on 5-year pattern analysis, this generates a full predicted paper aligned with expected question types.\n\nEnable in full version with Anthropic API key.`);
  });

  renderPYQ();
}

function renderPYQ() {
  const data = PYQ_DATA[currentPyqExam] || PYQ_DATA["IBPS PO"];
  document.getElementById("pyq-bars").innerHTML = data.map(p => `
    <div class="py-row">
      <div class="py-name">${p.name}</div>
      <span class="tag tag-blue">${p.freq}</span>
      <div class="py-trend">${p.trend}</div>
    </div>
  `).join("");

  const preds = PYQ_PREDICTIONS[currentPyqExam] || PYQ_PREDICTIONS["IBPS PO"];
  document.getElementById("pyq-predict").innerHTML = preds.map(p => `
    <div class="i-row">
      <div class="i-icon">${p.icon}</div>
      <div class="i-text">${p.text}</div>
    </div>
  `).join("");
}
