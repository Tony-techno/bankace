// ── Mock Paper Module ──────────────────────────────

let currentMockExam = "IBPS PO";

function initMock() {
  // Exam tab switching
  document.querySelectorAll("#mock-exam-tabs .etb").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#mock-exam-tabs .etb").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentMockExam = btn.dataset.exam;
      document.getElementById("mock-exam-label").textContent = currentMockExam;
      document.getElementById("mock-info").textContent = MOCK_INFO[currentMockExam] || "";
    });
  });

  // Set default info
  document.getElementById("mock-info").textContent = MOCK_INFO["IBPS PO"];

  // Generate mock button
  document.getElementById("gen-mock-btn").addEventListener("click", () => {
    const type = document.getElementById("mock-type").value;
    const src  = document.getElementById("mock-src").value;
    showMockMessage(currentMockExam, type, src);
  });

  // Sectional test button
  document.getElementById("gen-sectional-btn").addEventListener("click", () => {
    showSectionalMessage(currentMockExam);
  });

  renderMockAttempts();
}

function showMockMessage(exam, type, src) {
  const msg = `🧾 Mock Paper Request\n\nExam: ${exam}\nType: ${type}\nPattern: ${src}\n\nIn the full AI-powered version, this generates a complete paper with:\n• All sections & questions\n• Timer built-in\n• Auto-evaluated answer key\n• Section-wise score breakdown\n• Detailed solution for each question\n\nTo enable AI generation, add your Anthropic API key in js/app.js`;
  alert(msg);
}

function showSectionalMessage(exam) {
  alert(`📄 Sectional Test\n\nExam: ${exam} — Reasoning Ability\n35 questions | 20 minutes\n\nThis will generate a timed sectional test with auto-evaluation.\nEnable in full version with API key.`);
}

function renderMockAttempts() {
  document.getElementById("mock-attempts").innerHTML = MOCK_ATTEMPTS.map(a => `
    <div class="py-row">
      <div style="flex:1;">
        <div style="font-size:13px;font-weight:500;color:var(--text);">${a.label}</div>
        <div style="font-size:12px;color:var(--text-muted);">${a.date}</div>
      </div>
      <span class="tag ${a.tag}">${a.score}</span>
    </div>
  `).join("");
}
