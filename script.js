// Quiz data for each topic
const quizzes = {
    'general-awareness': [
        {
            question: "What is the capital of India?",
            options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
            correctAnswer: "Delhi"
        },
        {
            question: "Who is the President of India?",
            options: ["Ram Nath Kovind", "Narendra Modi", "Amit Shah", "Arvind Kejriwal"],
            correctAnswer: "Ram Nath Kovind"
        }
    ],
    'english-language': [
        {
            question: "What is the opposite of 'happy'?",
            options: ["Sad", "Angry", "Excited", "Joyful"],
            correctAnswer: "Sad"
        },
        {
            question: "Which of these is a punctuation mark?",
            options: [".", ",", ";", "?"],
            correctAnswer: "."
        }
    ],
    'reasoning': [
        {
            question: "What comes next in the series: 2, 4, 6, 8, ___?",
            options: ["10", "12", "14", "16"],
            correctAnswer: "10"
        },
        {
            question: "If A is taller than B, and B is taller than C, who is the shortest?",
            options: ["A", "B", "C", "None of the above"],
            correctAnswer: "C"
        }
    ],
    'computer-applications': [
        {
            question: "What does 'CPU' stand for?",
            options: ["Central Processing Unit", "Central Process Unit", "Computer Process Unit", "Central Programming Unit"],
            correctAnswer: "Central Processing Unit"
        },
        {
            question: "Which language is primarily used for web development?",
            options: ["Java", "C++", "HTML", "Python"],
            correctAnswer: "HTML"
        }
    ]
};

let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;

// Function to start the quiz based on the selected topic
function startQuiz(topic) {
    document.getElementById('syllabus').style.display = 'none'; // Hide syllabus section
    document.getElementById('quiz-section').style.display = 'block'; // Show quiz section
    document.getElementById('back-to-home').style.display = 'none'; // Hide back to home button initially
    currentQuiz = quizzes[topic];
    currentQuestionIndex = 0;
    score = 0;
    displayQuestion();
    document.getElementById('quiz-title').textContent = `Quiz: ${topic.replace('-', ' ').toUpperCase()}`;
}

// Function to display the current question
function displayQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');

    const currentQuestion = currentQuiz[currentQuestionIndex];
    
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = ''; // Clear previous options

    // Display options as buttons
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsElement.appendChild(button);
    });
}

// Function to check the user's answer
function checkAnswer(answer) {
    const currentQuestion = currentQuiz[currentQuestionIndex];

    if (answer === currentQuestion.correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < currentQuiz.length) {
        displayQuestion(); // Show next question
    } else {
        showResults(); // End the quiz and show score
    }
}

// Function to show the result at the end of the quiz
function showResults() {
    const resultElement = document.getElementById('quiz-result');
    resultElement.textContent = `Quiz Completed! Your score is ${score} out of ${currentQuiz.length}.`;
    resultElement.style.color = 'blue';
    
    // Show the "Back to Home" button
    document.getElementById('back-to-home').style.display = 'inline-block';
}

// Function to go back to the home page
function backToHome() {
    document.getElementById('syllabus').style.display = 'block'; // Show syllabus section
    document.getElementById('quiz-section').style.display = 'none'; // Hide quiz section
    document.getElementById('quiz-result').textContent = ''; // Clear previous result
    document.getElementById('back-to-home').style.display = 'none'; // Hide back to home button
      }
