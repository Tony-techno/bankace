// ── Quiz Module ────────────────────────────────────

let quizState = {
  current: 0,
  selectedOpt: -1,
  answered: false,
  score: 0,
  skipped: 0,
  questions: [],
};

function initQuiz() {
  updateTopics();

  document.getElementById("start-quiz-btn").addEventListener("click", startQuiz);
  document.getElementById("btn-check").addEventListener("click", checkAnswer);
  document.getElementById("btn-next").addEventListener("click", nextQuestion);
  document.getElementById("btn-skip").addEventListener("click", skipQuestion);
  document.getElementById("btn-new-quiz").addEventListener("click", resetQuiz);
  document.getElementById("btn-more-practice").addEventListener("click", () => {
    const topic = document.getElementById("q-topic").value;
    const exam  = document.getElementById("q-exam").value;
    alert(`In the full version with an API key, this will generate 10 more hard-level "${topic}" questions for ${exam} with detailed explanations.`);
  });
}

function updateTopics() {
  const sec = document.getElementById("q-sec").value;
  const topics = TOPICS_MAP[sec] || [];
  const sel = document.getElementById("q-topic");
  sel.innerHTML = topics.map(t => `<option>${t}</option>`).join("");
}

function startQuiz() {
  quizState = { current: 0, selectedOpt: -1, answered: false, score: 0, skipped: 0, questions: [...QUESTIONS] };

  document.getElementById("quiz-config").classList.add("hidden");
  document.getElementById("quiz-area").classList.remove("hidden");
  document.getElementById("quiz-result").classList.add("hidden");
  document.getElementById("qt").textContent = quizState.questions.length;

  loadQuestion();
}

function loadQuestion() {
  const { current, questions } = quizState;
  if (current >= questions.length) { showResult(); return; }

  const q = questions[current];
  quizState.selectedOpt = -1;
  quizState.answered = false;

  document.getElementById("qn").textContent = current + 1;
  document.getElementById("qtext").textContent = q.q;
  document.getElementById("qtag-sec").textContent = q.sec;
  document.getElementById("qtag-diff").textContent = q.diff;

  const fb = document.getElementById("qfb");
  fb.classList.remove("show", "correct-fb", "wrong-fb");
  fb.textContent = "";

  document.getElementById("btn-check").classList.remove("hidden");
  document.getElementById("btn-next").classList.add("hidden");
  document.getElementById("btn-skip").classList.remove("hidden");
  document.getElementById("quiz-result").classList.add("hidden");

  const letters = ["A", "B", "C", "D"];
  document.getElementById("qopts").innerHTML = q.opts.map((opt, i) => `
    <div class="opt" data-index="${i}" tabindex="0">
      <span class="opt-letter">${letters[i]}</span>
      ${escapeHTML(opt)}
    </div>
  `).join("");

  document.querySelectorAll(".opt").forEach(el => {
    el.addEventListener("click", () => pickOption(parseInt(el.dataset.index)));
    el.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") pickOption(parseInt(el.dataset.index)); });
  });
}

function escapeHTML(str) {
  return str.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

function pickOption(i) {
  if (quizState.answered) return;
  document.querySelectorAll(".opt").forEach(o => o.classList.remove("sel"));
  document.querySelector(`.opt[data-index="${i}"]`).classList.add("sel");
  quizState.selectedOpt = i;
}

function checkAnswer() {
  if (quizState.selectedOpt === -1) { alert("Please select an option first."); return; }
  quizState.answered = true;

  const q = quizState.questions[quizState.current];
  const correct = quizState.selectedOpt === q.ans;
  if (correct) quizState.score++;

  document.querySelectorAll(".opt").forEach((el, i) => {
    if (i === q.ans) el.classList.add("correct");
    else if (i === quizState.selectedOpt) el.classList.add("wrong");
  });

  const fb = document.getElementById("qfb");
  fb.textContent = (correct ? "✓ Correct! " : "✗ Incorrect. ") + q.exp;
  fb.classList.add("show", correct ? "correct-fb" : "wrong-fb");

  document.getElementById("btn-check").classList.add("hidden");
  document.getElementById("btn-next").classList.remove("hidden");
  document.getElementById("btn-skip").classList.add("hidden");
}

function nextQuestion() {
  quizState.current++;
  loadQuestion();
}

function skipQuestion() {
  quizState.skipped++;
  quizState.current++;
  loadQuestion();
}

function showResult() {
  const { score, questions, skipped } = quizState;
  const total = questions.length;
  const pct = Math.round((score / total) * 100);
  const color = pct >= 70 ? "var(--green)" : pct >= 50 ? "var(--amber)" : "var(--red)";
  const msg = pct >= 70 ? "Excellent! Try the hard-level set next." : pct >= 50 ? "Good effort. Review explanations and retry." : "Keep going — these patterns get easier with practice.";

  document.getElementById("qopts").innerHTML = "";
  document.getElementById("qtext").textContent = "";
  const fb = document.getElementById("qfb");
  fb.classList.remove("show");

  document.getElementById("btn-check").classList.add("hidden");
  document.getElementById("btn-next").classList.add("hidden");
  document.getElementById("btn-skip").classList.add("hidden");

  document.getElementById("quiz-result-summary").innerHTML = `
    <div class="result-score" style="color:${color};">${pct}%</div>
    <div class="result-msg">You got ${score} of ${total} correct. ${skipped > 0 ? `(${skipped} skipped)` : ""}</div>
    <div class="result-sub">${msg}</div>
  `;
  document.getElementById("quiz-result").classList.remove("hidden");
}

function resetQuiz() {
  document.getElementById("quiz-config").classList.remove("hidden");
  document.getElementById("quiz-area").classList.add("hidden");
  document.getElementById("quiz-result").classList.add("hidden");
  document.getElementById("qopts").innerHTML = "";
  document.getElementById("qtext").textContent = "";
  const fb = document.getElementById("qfb");
  fb.classList.remove("show", "correct-fb", "wrong-fb");
}
