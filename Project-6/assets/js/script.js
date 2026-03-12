let startBtn = document.getElementById("start-btn");
let welcomeScreen = document.getElementById("welcome-screen");
let countdownScreen = document.getElementById("countdown-screen");
let quizScreen = document.getElementById("quiz-screen");
let countdownEl = document.getElementById("countdown");
let timerEl = document.getElementById("timer");
let questionEl = document.getElementById("question");
let optionsEl = document.getElementById("options");
let nextBtn = document.getElementById("next-btn");
let username = document.getElementById("username");

let currentQuestion = 0;
let timer;
let timeLeft = 10;

const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Trainer Marking Language",
            "Hyper Text Markup Language",
            "Hyper Text Marketing Language",
            "Hyper Tool Multi Language"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which language is used for styling web pages?",
        options: [
            "HTML",
            "CSS",
            "Java",
            "Python"
        ],
        answer: "CSS"
    },
    {
        question: "Which language is used to add interactivity to a website?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],
        answer: "JavaScript"
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: [
            "<link>",
            "<a>",
            "<href>",
            "<url>"
        ],
        answer: "<a>"
    },
    {
        question: "Which CSS property is used to change the text color?",
        options: [
            "font-color",
            "text-color",
            "color",
            "background-color"
        ],
        answer: "color"
    },
    {
        question: "Which HTML tag is used to insert an image?",
        options: [
            "<img>",
            "<image>",
            "<pic>",
            "<src>"
        ],
        answer: "<img>"
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: [
            "<!-- -->",
            "//",
            "##",
            "**"
        ],
        answer: "//"
    },
    {
        question: "Which HTML tag is used to create a list item?",
        options: [
            "<ul>",
            "<ol>",
            "<li>",
            "<list>"
        ],
        answer: "<li>"
    },
    {
        question: "Which CSS property is used to make a responsive layout?",
        options: [
            "float",
            "display",
            "flexbox",
            "margin"
        ],
        answer: "flexbox"
    },
    {
        question: "Which JavaScript method is used to select an element by ID?",
        options: [
            "getElement()",
            "queryElement()",
            "getElementById()",
            "selectById()"
        ],
        answer: "getElementById()"
    }
];

startBtn.addEventListener("click", startQuiz);

let score = 0;

function startQuiz() {
    if (username.value.trim() === "") {
        alert("Please Enter Your Name to start the quiz!");
        return;
    }
    currentQuestion = 0;
    score = 0;

    welcomeScreen.classList.add("hide");
    countdownScreen.classList.remove("hide");

    let count = 3;
    let interval = setInterval(() => {
        countdownEl.innerText = count;
        count--;
        if (count < 0) {
            clearInterval(interval);
            countdownScreen.classList.add("hide");
            quizScreen.classList.remove("hide");
            showQuestion();
        }
    }, 1000);
}

function showQuestion() {
    let q = questions[currentQuestion];
    questionEl.innerText = q.question;
    optionsEl.innerHTML = "";

    q.options.forEach(option => {
        let btn = document.createElement("div");
        btn.classList.add("option");
        btn.innerText = option;

        btn.addEventListener("click", () => {
            const isCorrect = (option === q.answer);

            if (isCorrect) {
                btn.classList.add("correct");
                score++;
            } else {
                btn.classList.add("incorrect");
                highlightCorrectAnswer(q.answer);
            }

            disableOptions();
            clearInterval(timer);
        });
        optionsEl.appendChild(btn);
    });
    startTimer();
}

function startTimer() {
    timeLeft = 10;
    timerEl.innerText = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        timerEl.innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            disableOptions();
            highlightCorrectAnswer(questions[currentQuestion].answer);
        }
    }, 1000);
}

nextBtn.addEventListener("click", nextQuestion);

function nextQuestion() {
    clearInterval(timer);
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        quizScreen.innerHTML = `
            <h1 style="font-size: 2rem">QUIZ FINISHED!</h1>
            <p style="font-size: 1.5rem">Great job, ${username.value}!</p>
            <h2 style="font-size: 2rem"> SCORE: ${score} / ${questions.length} </h2>
            <button onclick="location.reload()" class="neo-btn">RESTART</button>
        `;
    }
}

function highlightCorrectAnswer(correctText) {
    const allOptions = document.querySelectorAll(".option");
    allOptions.forEach(opt => {
        if (opt.innerText === correctText) opt.classList.add("correct");
    });
}

function disableOptions() {
    const allOptions = document.querySelectorAll(".option");
    allOptions.forEach(opt => opt.classList.add("disabled"));
}