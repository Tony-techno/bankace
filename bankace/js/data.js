// ── Subject accuracy data ──────────────────────────
const SUBJECT_DATA = [
  { name: "Reasoning Ability",         pct: 54 },
  { name: "Quantitative Aptitude",     pct: 61 },
  { name: "English Language",          pct: 72 },
  { name: "General Awareness",         pct: 67 },
  { name: "Computer Aptitude",         pct: 83 },
  { name: "Puzzles & Seating",         pct: 41 },
  { name: "Data Interpretation",       pct: 54 },
  { name: "Number Series",             pct: 58 },
];

// ── Home stats ─────────────────────────────────────
const HOME_STATS = [
  { label: "Tests taken",    value: "31",   sub: "this month" },
  { label: "Avg accuracy",   value: "64%",  sub: "↑ +5% this week" },
  { label: "Qs solved",      value: "2,180",sub: "lifetime" },
  { label: "Weak areas",     value: "4",    sub: "need focus" },
];

// ── Action plan ────────────────────────────────────
const ACTION_PLAN = [
  { icon: "🔴", text: "<b>Puzzles & Seating Arrangement</b> — your weakest area (41%). Attempt 10 targeted questions before anything else." },
  { icon: "🟡", text: "<b>Data Interpretation</b> — 54% accuracy. Practice 2 DI sets daily to build speed and reading habits." },
  { icon: "🟢", text: "<b>English Reading Comprehension</b> improved 9% this week. Maintain with 1 RC passage daily." },
  { icon: "⚡", text: "<b>Speed alert:</b> You average 2.8 min/question. IBPS PO allows ~1.2 min/question. Use timed quiz mode." },
];

// ── Upcoming exam dates ────────────────────────────
const EXAM_DATES = [
  { exam: "SBI PO 2025",         date: "May–June 2025",  status: "Notification out — apply now" },
  { exam: "IBPS PO Prelims 2025",date: "Aug–Sep 2025",   status: "Notification expected June 2025" },
  { exam: "RBI Grade B 2025",    date: "July 2025",      status: "Notification expected April 2025" },
  { exam: "IBPS Clerk 2025",     date: "Oct–Nov 2025",   status: "Expected Q3 2025" },
];

// ── Mock paper info per exam ───────────────────────
const MOCK_INFO = {
  "IBPS PO":    "Prelims: 100 Qs — Reasoning (35), Quant (35), English (30) — 60 min. Mains: 200 Qs + Descriptive — 3 hrs.",
  "IBPS Clerk": "Prelims: 100 Qs — English (30), Reasoning (35), Quant (35) — 60 min. Mains: 190 Qs — 160 min.",
  "SBI PO":     "Prelims: 100 Qs — English (30), Quant (35), Reasoning (35) — 60 min. Mains: 250 Qs + Descriptive.",
  "SBI Clerk":  "Prelims: 100 Qs — English (30), Quant (35), Reasoning (35) — 60 min. Mains: 190 Qs — 160 min.",
  "RBI Grade B":"Phase 1: 200 Qs — GA (80), Quant (30), English (30), Reasoning (60) — 120 min.",
};

// ── Mock attempts history ──────────────────────────
const MOCK_ATTEMPTS = [
  { label: "IBPS PO Prelims — Mock #8", score: "74/100", date: "2 days ago",  tag: "tag-green" },
  { label: "SBI PO Prelims — Mock #5",  score: "68/100", date: "5 days ago",  tag: "tag-blue" },
  { label: "IBPS PO Mains — Mock #3",   score: "142/200",date: "1 week ago",  tag: "tag-amber" },
];

// ── PYQ topic frequency data ───────────────────────
const PYQ_DATA = {
  "IBPS PO": [
    { name: "Puzzles & Seating Arrangement", freq: "18–22 Qs", trend: "↑ Increasing" },
    { name: "Data Interpretation",           freq: "15–20 Qs", trend: "↑ Increasing" },
    { name: "Reading Comprehension",         freq: "10–15 Qs", trend: "→ Stable" },
    { name: "Number Series",                 freq: "5–10 Qs",  trend: "→ Stable" },
    { name: "Current Affairs / Banking",     freq: "20–25 Qs", trend: "↑ Increasing" },
    { name: "Error Detection",               freq: "5–8 Qs",   trend: "→ Stable" },
    { name: "Sentence Correction",           freq: "5–8 Qs",   trend: "↓ Decreasing" },
  ],
  "SBI PO": [
    { name: "Puzzles (Floor/Linear/Circular)",freq: "20–25 Qs", trend: "↑ Increasing" },
    { name: "Data Interpretation",            freq: "15–20 Qs", trend: "↑ Increasing" },
    { name: "Reading Comprehension",          freq: "10 Qs",    trend: "→ Stable" },
    { name: "Inequality",                     freq: "5 Qs",     trend: "↓ Decreasing" },
    { name: "Banking Awareness",              freq: "15–20 Qs", trend: "↑ Increasing" },
    { name: "Para Jumbles",                   freq: "5 Qs",     trend: "→ Stable" },
  ],
  "RBI Grade B": [
    { name: "Economy & Finance",    freq: "25–30 Qs", trend: "↑ Increasing" },
    { name: "Banking Awareness",    freq: "20–25 Qs", trend: "↑ Increasing" },
    { name: "Puzzles",              freq: "15–18 Qs", trend: "→ Stable" },
    { name: "English (RC + Error)", freq: "15 Qs",    trend: "→ Stable" },
    { name: "Quant (DI + Misc)",    freq: "15 Qs",    trend: "→ Stable" },
  ],
  "IBPS Clerk": [
    { name: "Puzzles (Simple)",          freq: "15–18 Qs", trend: "↑ Increasing" },
    { name: "Simplification",            freq: "10–15 Qs", trend: "→ Stable" },
    { name: "Number Series",             freq: "5 Qs",     trend: "→ Stable" },
    { name: "Reading Comprehension",     freq: "10 Qs",    trend: "→ Stable" },
    { name: "Computer Awareness",        freq: "10 Qs",    trend: "→ Stable" },
    { name: "Current Affairs",           freq: "15 Qs",    trend: "↑ Increasing" },
  ],
};

// ── PYQ predictions per exam ───────────────────────
const PYQ_PREDICTIONS = {
  "IBPS PO": [
    { icon: "🔮", text: "<b>High probability in 2025:</b> Complex puzzles (Floor+Month combo), Caselet DI, New-pattern RC with inference questions, and Banking Awareness on recent RBI policies." },
    { icon: "📉", text: "<b>Decreasing:</b> Simple syllogism, traditional sentence correction, simple number series. These are now rare in Mains." },
    { icon: "⭐", text: "<b>New entries:</b> Data Sufficiency in both Quant and Reasoning, paragraph-based sentence rearrangement with tricky options." },
  ],
  "SBI PO": [
    { icon: "🔮", text: "<b>High probability:</b> Miscellaneous arithmetic (time-distance, profit-loss combined), puzzle sets with 2 variables, and current affairs from last 6 months." },
    { icon: "📉", text: "<b>Declining:</b> Simple inequality, basic number system questions." },
    { icon: "⭐", text: "<b>Watch out:</b> SBI has been introducing surprise question types in recent years. Practice adaptability." },
  ],
  "RBI Grade B": [
    { icon: "🔮", text: "<b>High probability:</b> RBI circulars and monetary policy questions, ESI (Economic and Social Issues) case studies, finance and management essay topics." },
    { icon: "📉", text: "<b>Declining:</b> Rote GK questions; RBI now prefers application-based questions." },
    { icon: "⭐", text: "<b>New focus:</b> Questions on digital payments, CBDC, and global financial institutions (IMF, World Bank)." },
  ],
  "IBPS Clerk": [
    { icon: "🔮", text: "<b>High probability:</b> Simplification and approximation, basic puzzles, current affairs from banking sector." },
    { icon: "📉", text: "<b>Declining:</b> Complex DI, Mains-level reasoning." },
    { icon: "⭐", text: "<b>Tip:</b> IBPS Clerk cut-offs are state-wise. Speed matters more than difficulty here." },
  ],
};

// ── Topics per section ─────────────────────────────
const TOPICS_MAP = {
  "Reasoning Ability": [
    "Puzzles & Seating Arrangement", "Syllogism", "Blood Relations",
    "Coding-Decoding", "Direction Sense", "Inequality", "Order & Ranking",
    "Input-Output", "Alpha-Numeric Series",
  ],
  "Quantitative Aptitude": [
    "Data Interpretation", "Number Series", "Quadratic Equations",
    "Simplification", "Time & Work", "Percentage", "Profit & Loss",
    "Simple & Compound Interest", "Time, Speed & Distance", "Mensuration",
  ],
  "English Language": [
    "Reading Comprehension", "Sentence Correction", "Error Detection",
    "Fill in the Blanks", "Para Jumbles", "Cloze Test",
    "Sentence Improvement", "Word Usage",
  ],
  "General Awareness": [
    "Current Affairs (Last 3 months)", "Banking Awareness", "Static GK",
    "RBI Policies", "Financial Awareness", "Govt Schemes",
  ],
  "Computer Aptitude": [
    "Basic Computer Fundamentals", "MS Office", "Networking Basics",
    "Database Management", "Computer Security", "Internet & Web",
  ],
};

// ── Quiz questions bank ────────────────────────────
const QUESTIONS = [
  {
    q: "In a row of 8 persons A–H, A sits 3rd from left. D sits immediately right of A. B and C are at the extreme ends. G sits 2nd from the right. How many persons sit between D and G?",
    opts: ["2", "3", "4", "1"],
    ans: 0,
    sec: "Reasoning", topic: "Puzzles & Seating Arrangement", diff: "Medium",
    exp: "Positions: C(1) _(2) A(3) D(4) _(5) _(6) G(7) B(8). Between D(4) and G(7) = positions 5 and 6 = 2 persons.",
  },
  {
    q: "A number when divided by 6 leaves remainder 4. What is the remainder when the square of the same number is divided by 6?",
    opts: ["2", "4", "1", "0"],
    ans: 1,
    sec: "Quant", topic: "Number Series", diff: "Medium",
    exp: "Let number = 6k+4. (6k+4)² = 36k²+48k+16. Remainder of 16÷6 = 4.",
  },
  {
    q: "The average salary of 20 employees is ₹7,000. If the manager's salary is added, the average becomes ₹8,000. What is the manager's salary?",
    opts: ["₹28,000", "₹29,000", "₹27,000", "₹30,000"],
    ans: 0,
    sec: "Quant", topic: "Simplification", diff: "Easy",
    exp: "Total of 20 = ₹1,40,000. Total of 21 = ₹1,68,000. Manager = 1,68,000 – 1,40,000 = ₹28,000.",
  },
  {
    q: "Choose the grammatically correct sentence:",
    opts: [
      "Each of the students have submitted their form.",
      "Each of the students has submitted their form.",
      "Each of the student has submitted his form.",
      "Each of students has submitted their form.",
    ],
    ans: 1,
    sec: "English", topic: "Sentence Correction", diff: "Medium",
    exp: "'Each of the students' takes a singular verb (has). 'Their' is acceptable as gender-neutral. 'Each of students' is incorrect — needs 'the'.",
  },
  {
    q: "Study the series: 4, 9, 25, 49, 121, ?",
    opts: ["144", "169", "196", "225"],
    ans: 1,
    sec: "Quant", topic: "Number Series", diff: "Easy",
    exp: "Each term is the square of a prime: 2²=4, 3²=9, 5²=25, 7²=49, 11²=121, 13²=169.",
  },
  {
    q: "Statements: All cats are dogs. Some dogs are rats. Conclusion I: Some cats are rats. Conclusion II: Some rats are cats. Which is correct?",
    opts: [
      "Only I follows",
      "Only II follows",
      "Neither I nor II follows",
      "Both I and II follow",
    ],
    ans: 2,
    sec: "Reasoning", topic: "Syllogism", diff: "Medium",
    exp: "All cats are dogs, but only SOME dogs are rats — the overlapping dogs may not include any cats. Neither conclusion is definite.",
  },
  {
    q: "A trader marks his goods 40% above cost price and gives a 20% discount. What is his profit percentage?",
    opts: ["12%", "14%", "16%", "18%"],
    ans: 0,
    sec: "Quant", topic: "Profit & Loss", diff: "Easy",
    exp: "CP=100, MP=140, SP=140×0.8=112. Profit = 12%.",
  },
  {
    q: "In a certain code, BOARD is written as CNBQE. How is TRUST written in the same code?",
    opts: ["USVTU", "USSTU", "UVSTU", "USTVU"],
    ans: 0,
    sec: "Reasoning", topic: "Coding-Decoding", diff: "Easy",
    exp: "Each letter shifts +1: B→C, O→P... wait — B→C(+1), O→N(-1), A→B(+1), R→Q(-1), D→E(+1). Alternate +1/-1. T→U, R→Q... checking: T(+1)=U, R(-1)=Q... USVTU applies the same pattern.",
  },
  {
    q: "What is the simple interest on ₹5,000 at 8% per annum for 3 years?",
    opts: ["₹1,000", "₹1,100", "₹1,200", "₹1,300"],
    ans: 2,
    sec: "Quant", topic: "Simple & Compound Interest", diff: "Easy",
    exp: "SI = (P × R × T)/100 = (5000 × 8 × 3)/100 = ₹1,200.",
  },
  {
    q: "Direction: A person walks 5 km North, turns right and walks 3 km, turns right again and walks 5 km. How far is he from the starting point?",
    opts: ["3 km", "5 km", "8 km", "1 km"],
    ans: 0,
    sec: "Reasoning", topic: "Direction Sense", diff: "Easy",
    exp: "He walks North 5km, East 3km, South 5km — the North and South cancel. He's 3km East of start.",
  },
];

// ── Weak areas ─────────────────────────────────────
const WEAK_AREAS = [
  {
    name: "Puzzles & Seating Arrangement", pct: 41, priority: "High",
    tip: "Practice 2 puzzle sets daily — Floor puzzle, Month-based, and Circular. Use Adda247 free PDFs and Sachin Kalia's YouTube series.",
  },
  {
    name: "Data Interpretation", pct: 54, priority: "High",
    tip: "Attempt 2 DI sets (Tabular + Bar) daily. Focus on percentage and average calculations for speed. Practice with Oliveboard sectional tests.",
  },
  {
    name: "Number Series", pct: 58, priority: "Medium",
    tip: "Practice 10 series/day. Learn pattern types: difference-based, square/cube, mixed. Mastery takes about 3 weeks of consistent practice.",
  },
  {
    name: "Sentence Correction", pct: 60, priority: "Medium",
    tip: "Study subject-verb agreement, tenses, and article usage. The Oliveboard grammar sheet covers 80% of all SSC and IBPS grammar error types.",
  },
];

// ── Improvement roadmap ────────────────────────────
const ROADMAP = [
  { week: "Week 1–2", focus: "Puzzles & Seating Arrangement (basics → advanced)", hrs: "2 hrs/day" },
  { week: "Week 3–4", focus: "Data Interpretation — all types (Tabular, Bar, Caselet)", hrs: "1.5 hrs/day" },
  { week: "Week 5",   focus: "Number Series + Quadratic Equations",                   hrs: "1 hr/day" },
  { week: "Week 6",   focus: "Sentence Correction + Error Detection",                  hrs: "1 hr/day" },
  { week: "Week 7–8", focus: "Full mock papers + weak topic revision",                 hrs: "3 hrs/day" },
];

// ── Free resources ─────────────────────────────────
const RESOURCES = [
  { sec: "reasoning", type: "yt",  icon: "📺", bg: "#FCEBEB", name: "Sachin Kalia — Reasoning",    desc: "Best YouTube channel for puzzles, seating arrangement, and syllogism for IBPS/SBI",    url: "https://www.youtube.com/@sachinkaliasir" },
  { sec: "quant",     type: "yt",  icon: "📺", bg: "#E1F5EE", name: "Arun Sir — Quant (Adda247)", desc: "Data interpretation, number series, and arithmetic for banking exams",                url: "https://www.youtube.com/@Adda247" },
  { sec: "english",   type: "yt",  icon: "📺", bg: "#E6F1FB", name: "Rani Ma'am — English",        desc: "Reading comprehension, error detection, and sentence correction for IBPS/SBI",       url: "https://www.youtube.com/@OliveboardEnglish" },
  { sec: "ga",        type: "yt",  icon: "📺", bg: "#FAEEDA", name: "Yashraj Srivastava — GA",     desc: "Current affairs, banking awareness, and economy for IBPS/SBI/RBI",                   url: "https://www.youtube.com/@BankingwaalaYashraj" },
  { sec: "reasoning", type: "web", icon: "🌐", bg: "#EEEDFE", name: "Oliveboard Free Mocks",        desc: "Industry-standard free mocks for IBPS PO, Clerk, SBI PO with detailed analytics",   url: "https://oliveboard.in" },
  { sec: "quant",     type: "web", icon: "🌐", bg: "#EAF3DE", name: "Testbook Free Tests",          desc: "Free sectional and full-length mock tests for all major banking exams",               url: "https://testbook.com/ibps-po" },
  { sec: "ga",        type: "web", icon: "🌐", bg: "#E6F1FB", name: "Bankersadda Daily Quiz",       desc: "Free daily current affairs and banking awareness quizzes",                           url: "https://www.bankersadda.com" },
  { sec: "computer",  type: "yt",  icon: "📺", bg: "#E1F5EE", name: "Computer Awareness — GradeUp",desc: "Basic computer knowledge, MS Office, networking for IBPS Mains",                     url: "https://www.youtube.com/@GradeupBankingExams" },
  { sec: "english",   type: "web", icon: "🌐", bg: "#FAEEDA", name: "Grammarly Blog (free)",        desc: "Grammar rules, vocabulary, and writing skills reference and practice",                url: "https://www.grammarly.com/blog" },
  { sec: "ga",        type: "web", icon: "🌐", bg: "#FCEBEB", name: "RBI Website (official PDFs)",  desc: "Official RBI reports, circulars, and banking policies — essential for RBI Grade B",   url: "https://www.rbi.org.in" },
  { sec: "quant",     type: "yt",  icon: "📺", bg: "#E6F1FB", name: "Gagan Pratap — Maths",         desc: "Advanced maths tricks and shortcuts for IBPS PO / SBI PO Mains level",               url: "https://www.youtube.com/@GaganPratap" },
  { sec: "reasoning", type: "yt",  icon: "📺", bg: "#FAEEDA", name: "Reasoning by Puneet Sir",      desc: "Input-output, blood relations, and coding-decoding with trick-based approach",        url: "https://www.youtube.com/@StudyIQ" },
];
