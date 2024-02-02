const questions = [
    {
        question: "Em Legalmente Loira, qual é o nome do chihuahua de Elle?",
        options: ["Pugilista", "cookie", "surtida", "Sally"],
        correctAnswer: 0
    },
    {
        question: "Julia Roberts interpreta uma prostituta chamada o que na comédia romântica clássica de 1990 “Uma Linda Mulher”?",
        options: ["violeta", "Victoria", "jenny", "julia"],
        correctAnswer: 0
    },
    {
        question: "Quem cantou “My Heart Will Go On” no Titanic?",
        options: ["Mariah Carey", "Celine Dion", "Whitney Houston?", "Sally"],
        correctAnswer: 0
    },
    {
        question: "Em Legalmente Loira, qual é o nome do chihuahua de Elle?",
        options: ["Pugilista", "cookie", "surtida", "Sally"],
        correctAnswer: 0
    },
    {
        question: "Em Legalmente Loira, qual é o nome do chihuahua de Elle?",
        options: ["Pugilista", "cookie", "surtida", "Sally"],
        correctAnswer: 0
    },
    {
        question: "Em Legalmente Loira, qual é o nome do chihuahua de Elle?",
        options: ["Pugilista", "cookie", "surtida", "Sally"],
        correctAnswer: 0
    },
    {
        question: "Em Legalmente Loira, qual é o nome do chihuahua de Elle?",
        options: ["Pugilista", "cookie", "surtida", "Sally"],
        correctAnswer: 0
    },
    // Adicione mais perguntas aqui...
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');

    questionElement.textContent = questions[currentQuestion].question;

    for (let i = 0; i < optionsElement.children.length; i++) {
        optionsElement.children[i].querySelector('button').textContent = questions[currentQuestion].options[i];
    }
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === questions[currentQuestion].correctAnswer) {
        score++;
    }
    document.getElementById('score').textContent = `Score: ${score}`;
    disableOptions();
}

function disableOptions() {
    const optionsElement = document.getElementById('options');
    for (let i = 0; i < optionsElement.children.length; i++) {
        optionsElement.children[i].querySelector('button').disabled = true;
    }
}

function enableOptions() {
    const optionsElement = document.getElementById('options');
    for (let i = 0; i < optionsElement.children.length; i++) {
        optionsElement.children[i].querySelector('button').disabled = false;
    }
}

function nextQuestion() {
    enableOptions();

    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const quizContainer = document.querySelector('.quiz-container');
    quizContainer.innerHTML = `<h1>Quiz Concluído!</h1><p>Sua pontuação final é: ${score} de ${questions.length}</p>`;
}

displayQuestion();
