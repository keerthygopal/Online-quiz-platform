const questions = [
    {
        question: "What is 2 + 2?",
        choices: ["3", "4", "5"],
        correctAnswer: "4",
        difficulty: "simple"
    },
  

    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Mars", "Jupiter", "Venus"],
        correctAnswer: "Mars",
        difficulty: "medium"
    },
    {
        question: "What is the largest mammal?",
        choices: ["Elephant", "Blue Whale", "Giraffe"],
        correctAnswer: "Blue Whale",
        difficulty: "medium"
    },
    {
        question: "In which year did Columbus discover America?",
        choices: ["1492", "1776", "1865"],
        correctAnswer: "1492",
        difficulty: "hard"
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        choices: ["William Shakespeare", "Leo Tolstoy", "Charles Dickens"],
        correctAnswer: "William Shakespeare",
        difficulty: "hard"
    },
];
let timer;
const timeLimit = 30; // Time limit for each question in seconds

function startTimer() {
    let timeLeft = timeLimit;
    timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
        document.getElementById("timer").textContent = timeLeft;
        timeLeft--;
    }, 1000);
}
function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
// Call this function to shuffle your questions array before starting the quiz.
shuffleQuestions(questions);
function provideHint() {
    const hint = questions[currentQuestion].hint; // Add 'hint' property to your question objects
    // Display the hint to the user in the UI
}
function reviewAnswers() {
    for (let i = 0; i < questions.length; i++) {
        const selectedChoice = document.querySelector(`input[name=choice${i}]:checked`);
        if (selectedChoice) {
            // Check and display whether the selected choice was correct or not.
        }
    }
}




// Rest of the code remains the same...


let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
    const current = questions[currentQuestion];

    questionElement.textContent = current.question;
    choicesElement.innerHTML = "";

    current.choices.forEach((choice) => {
        const li = document.createElement("li");
        const input = document.createElement("input");

        input.type = "radio";
        input.name = "choice";
        input.value = choice;

        li.appendChild(input);
        li.appendChild(document.createTextNode(choice));
        choicesElement.appendChild(li);
    });
}

function nextQuestion() {
    const selectedChoice = document.querySelector("input[name=choice]:checked");

    if (!selectedChoice) {
        return;
    }

    if (selectedChoice.value === questions[currentQuestion].correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        displayResult();
    }
}

function displayResult() {
    const questionContainer = document.getElementById("question-container");
    const resultContainer = document.getElementById("result-container");
    questionContainer.style.display = "none";
    resultContainer.style.display = "block";
    document.getElementById("score").textContent = score;
}

displayQuestion();
const difficultyScores = {
    simple: 10,
    medium: 20,
    hard: 30,
};

function calculateScore(difficulty) {
    return difficultyScores[difficulty];
}

