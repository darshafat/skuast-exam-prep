// General Awareness Questions
const generalAwarenessQuestions = [
    { question: "Who is known as the Father of the Indian Constitution?", options: ["Mahatma Gandhi", "B. R. Ambedkar", "Jawaharlal Nehru", "Sardar Patel"], correctAnswer: "B. R. Ambedkar" },
    { question: "Which river is known as the 'Sorrow of Bihar'?", options: ["Ganga", "Kosi", "Brahmaputra", "Godavari"], correctAnswer: "Kosi" },
    { question: "Who was the first Prime Minister of India?", options: ["Jawaharlal Nehru", "Mahatma Gandhi", "B. R. Ambedkar", "Sardar Patel"], correctAnswer: "Jawaharlal Nehru" },
    { question: "What is the capital of Ladakh?", options: ["Leh", "Kargil", "Srinagar", "Jammu"], correctAnswer: "Leh" },
    { question: "When was the Indian Constitution adopted?", options: ["26th January 1950", "15th August 1947", "26th November 1949", "2nd October 1948"], correctAnswer: "26th November 1949" },
    { question: "Which is the largest state in India by area?", options: ["Rajasthan", "Madhya Pradesh", "Uttar Pradesh", "Maharashtra"], correctAnswer: "Rajasthan" },
    { question: "What does GST stand for?", options: ["General Service Tax", "Goods and Service Tax", "Government Sales Tax", "Gross Sales Tax"], correctAnswer: "Goods and Service Tax" },
    { question: "Which planet is known as the 'Red Planet'?", options: ["Mars", "Venus", "Jupiter", "Saturn"], correctAnswer: "Mars" },
    { question: "Where is the headquarters of the United Nations located?", options: ["Geneva", "New York", "Paris", "Vienna"], correctAnswer: "New York" },
    { question: "Who is the current Chief Minister of Jammu and Kashmir (as of 2024)?", options: ["Omar Abdullah", "Mehbooba Mufti", "No Chief Minister", "Farooq Abdullah"], correctAnswer: "No Chief Minister" }
];

// English Language Questions
const englishLanguageQuestions = [
    { question: "Choose the correct synonym of 'benevolent':", options: ["Cruel", "Kind", "Hostile", "Selfish"], correctAnswer: "Kind" },
    { question: "What is the plural form of 'Child'?", options: ["Childs", "Children", "Childrens", "Childes"], correctAnswer: "Children" },
    { question: "Find the correctly spelt word:", options: ["Recieve", "Receive", "Reciev", "Recive"], correctAnswer: "Receive" },
    { question: "Identify the adjective: 'The old man walked slowly.'", options: ["Old", "Man", "Walked", "Slowly"], correctAnswer: "Old" },
    { question: "What is the opposite of 'honest'?", options: ["Dishonest", "Happy", "Sad", "Good"], correctAnswer: "Dishonest" },
    { question: "Fill in the blank: He is good ___ mathematics.", options: ["in", "at", "on", "with"], correctAnswer: "at" },
    { question: "Select the correct preposition: She is fond ___ music.", options: ["in", "of", "on", "at"], correctAnswer: "of" },
    { question: "What does 'E.g.' stand for?", options: ["For example", "In general", "And so on", "Therefore"], correctAnswer: "For example" },
    { question: "Which of these is a verb?", options: ["Run", "Beautiful", "Quickly", "Red"], correctAnswer: "Run" },
    { question: "Choose the correct sentence:", options: ["He go to school.", "He goes to school.", "He gone to school.", "He going to school."], correctAnswer: "He goes to school." }
];

// Reasoning Questions
const reasoningQuestions = [
    { question: "What comes next in the series: 5, 10, 20, 40, ___?", options: ["60", "80", "100", "120"], correctAnswer: "80" },
    { question: "If B = 2, C = 3, then what is Z?", options: ["24", "26", "27", "25"], correctAnswer: "26" },
    { question: "What is the odd one out: Apple, Orange, Potato, Banana?", options: ["Apple", "Orange", "Potato", "Banana"], correctAnswer: "Potato" },
    { question: "Which number does not belong: 3, 5, 7, 8, 11?", options: ["3", "8", "5", "11"], correctAnswer: "8" },
    { question: "What comes next: 2, 6, 12, 20, ___?", options: ["28", "30", "32", "36"], correctAnswer: "30" },
    { question: "If 2 = 4, 3 = 9, 4 = 16, then 5 = ?", options: ["20", "15", "25", "30"], correctAnswer: "25" },
    { question: "Which shape does not belong: Circle, Triangle, Square, Sphere?", options: ["Circle", "Triangle", "Square", "Sphere"], correctAnswer: "Sphere" },
    { question: "Find the missing number: 1, 4, 9, 16, ___?", options: ["20", "25", "30", "36"], correctAnswer: "25" },
    { question: "Which direction is opposite to 'East'?", options: ["North", "South", "West", "South-West"], correctAnswer: "West" },
    { question: "Find the odd one out: 2, 4, 6, 7, 8?", options: ["4", "6", "7", "8"], correctAnswer: "7" }
];

// Computer Applications Questions
const computerApplicationsQuestions = [
    { question: "What does 'RAM' stand for?", options: ["Random Access Memory", "Read Access Memory", "Random Allocate Memory", "Read Allocate Memory"], correctAnswer: "Random Access Memory" },
    { question: "Which key is used to refresh a web page?", options: ["F1", "F2", "F5", "F12"], correctAnswer: "F5" },
    { question: "What does 'CPU' stand for?", options: ["Central Processing Unit", "Central Programming Unit", "Central Progressive Unit", "Central Printing Unit"], correctAnswer: "Central Processing Unit" },
    { question: "Which is not an output device?", options: ["Monitor", "Printer", "Keyboard", "Speaker"], correctAnswer: "Keyboard" },
    { question: "What does 'URL' stand for?", options: ["Uniform Resource Locator", "Universal Resource Link", "Uniform Relation Locator", "Unique Resource Locator"], correctAnswer: "Uniform Resource Locator" },
    { question: "Which is the fastest type of memory?", options: ["RAM", "Cache", "Hard Drive", "DVD"], correctAnswer: "Cache" },
    { question: "Which of these is an operating system?", options: ["Microsoft Word", "Linux", "Google Chrome", "Excel"], correctAnswer: "Linux" },
    { question: "What does 'IP' stand for in 'IP Address'?", options: ["Internet Protocol", "Internal Program", "Internet Proxy", "Integrated Protocol"], correctAnswer: "Internet Protocol" },
    { question: "What does 'HTTP' stand for?", options: ["HyperText Transfer Protocol", "High Transfer Text Protocol", "Hyper Transfer Text Process", "Hyper Text Transmission Protocol"], correctAnswer: "HyperText Transfer Protocol" },
    { question: "Which of these is used for storage?", options: ["RAM", "ROM", "CPU", "GPU"], correctAnswer: "ROM" }
];

// Quizzes Object
const quizzes = {
    "General Awareness": generalAwarenessQuestions,
    "English Language": englishLanguageQuestions,
    "Reasoning": reasoningQuestions,
    "Computer Applications": computerApplicationsQuestions
};

// Add logic for quiz functionality as per earlier script.