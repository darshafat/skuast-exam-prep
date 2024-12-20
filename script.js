let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;

// Question Sets
const quizzes = {
    "General Awareness": [
        { question: "Who is known as the Father of the Indian Constitution?", options: ["Mahatma Gandhi", "B. R. Ambedkar", "Jawaharlal Nehru", "Sardar Patel"], correctAnswer: "B. R. Ambedkar" },
        { question: "Which river is known as the 'Sorrow of Bihar'?", options: ["Ganga", "Kosi", "Brahmaputra", "Godavari"], correctAnswer: "Kosi" },
        // Add 8 more questions here
    ],
    "English Language": [
        { question: "Choose the correct synonym of 'benevolent':", options: ["Cruel", "Kind", "Hostile", "Selfish"], correctAnswer: "Kind" },
        { question: "What is the plural form of 'Child'?", options: ["Childs", "Children", "Childrens", "Childes"], correctAnswer: "Children" },
        // Add 8 more questions here
    ],
    "Reasoning": [
        { question: "What comes next in the series: 5, 10, 20, 40, ___?", options: ["60", "80", "100", "120"], correctAnswer: "80" },
        { question: "If B = 2, C = 3, then what is Z?", options: ["24", "26", "27", "25"], correctAnswer: "26" },
        // Add 8 more questions here
    ],
    "Computer Applications": [
        { question: "What does 'RAM' stand for?", options: ["Random Access Memory", "Read Access Memory", "Random Allocate Memory", "Read Allocate Memory"], correctAnswer: "Random Access Memory" },
        { question: "Which key is used to refresh a web page?", options: ["F1", "F2", "F5", "F12"], correctAnswer: "F5" },
        // Add 8 more questions here
    ]
};

// Functions
function startQuiz(section) {
    currentQuiz = quizzes[section];
    currentQuestionIndex = 0;
    score = 0;

    document.getElementById("home").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
    document.getElementById("quiz-title").textContent = section;
    showQuestion();
}

function showQuestion() {
    const questionObj = currentQuiz[currentQuestionIndex];
    document.getElementById("question").textContent = questionObj.question;
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    questionObj.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsDiv.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const questionObj = currentQuiz[currentQuestionIndex];
    if (selectedOption === questionObj.correctAnswer) {
        score++;
    }
    currentQuestionIndex++;

    if (currentQuestionIndex < currentQuiz.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("score").textContent = `Your score: ${score}/${currentQuiz.length}`;
}

function returnHome() {
    document.getElementById("result").classList.add("hidden");
    document.getElementById("home").classList.remove("hidden");
}