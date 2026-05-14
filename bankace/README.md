# BankAce 🏦
### AI-powered Banking Exam Preparation Platform
> IBPS PO · IBPS Clerk · SBI PO · SBI Clerk · RBI Grade B

---

## ✨ Features

| Feature | Description |
|---|---|
| 📊 Dashboard | Live accuracy tracker, today's action plan, upcoming exam dates |
| 🧠 Topic Quiz | Section/topic/difficulty wise quiz with instant explanations |
| 📄 Mock Paper | Full-length & sectional papers for all 5 banking exams |
| 📅 PYQ Analysis | 5-year topic frequency + AI pattern prediction for 2025 |
| 📈 My Analysis | Weak area diagnosis + 8-week personalized roadmap |
| 📚 Free Resources | Curated YouTube channels + websites filtered by subject |

---

## 🚀 How to Run Locally

1. Download or clone this repository
2. Open the `bankace/` folder
3. Double-click `index.html` — it opens directly in your browser
4. No installation, no server, no npm needed!

---

## 📁 Project Structure

```
bankace/
├── index.html          ← Main app (open this)
├── README.md           ← This file
├── css/
│   └── style.css       ← All styling (light + dark mode)
└── js/
    ├── data.js         ← All questions, topics, resources data
    ├── quiz.js         ← Quiz engine logic
    ├── mock.js         ← Mock paper generator
    ├── pyq.js          ← PYQ analysis & predictions
    ├── analysis.js     ← Weak area & roadmap renderer
    ├── resources.js    ← Free resources filter
    └── app.js          ← Navigation & app controller
```

---

## 🌐 Live on GitHub Pages

Once uploaded to GitHub, your app will be live at:
```
https://YOUR-USERNAME.github.io/bankace/
```
Follow the GitHub upload steps in this README below.

---

## 🛠️ How to Add More Questions

Open `js/data.js` and add to the `QUESTIONS` array:

```javascript
{
  q: "Your question text here?",
  opts: ["Option A", "Option B", "Option C", "Option D"],
  ans: 0,           // index of correct option (0 = A, 1 = B ...)
  sec: "Reasoning", // section label shown on quiz card
  topic: "Syllogism",
  diff: "Medium",   // Easy / Medium / Hard
  exp: "Explanation of why the answer is correct.",
},
```

---

## 🤝 Contributing

1. Fork the repo on GitHub
2. Make your changes (add questions, fix bugs, improve UI)
3. Open a Pull Request — all contributions welcome!

---

## 📜 License

MIT License — free to use, modify, and share.
