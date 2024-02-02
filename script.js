const questions = [
    {
        question: "1 - Em Legalmente Loira, qual é o nome do chihuahua de Elle?",
        options: ["Pugilista", "cookie", "surtida", "Sally"],
        correctAnswer: 0
    },
    {
        question: "2 - Julia Roberts interpreta uma prostituta chamada o que na comédia romântica clássica de 1990 “Uma Linda Mulher”?",
        options: ["violeta", "Victoria", "jenny", "julia"],
        correctAnswer: 0
    },
    {
        question: "3 - Quem cantou “My Heart Will Go On” no Titanic?",
        options: ["Mariah Carey", "Celine Dion", "Whitney Houston?", "Sally"],
        correctAnswer: 0
    },
     {
        question: "4 - Qual foi o primeiro filme de terror em cores?",
        options: ["A maldição de frankenstein", "Casa do demônio ", "O Mistério do Museu de Cera ", "batman"],
        correctAnswer: 0
    },
    {
        question: "5 - Qual filme de terror foi a estreia de Johnny Depp? ",
        options: ["Dark Shadows", "From Hell", "A Nightmare on Elm Street", "Eduard maos de tesoura"],
        correctAnswer: 2
    },
    {
        question: "6 - Que cor está presente em quase todas as cenas de O Iluminado?",
        options: ["vermelho", "preto", "verde", "amarelo"],
        correctAnswer: 0
    },
    {
        question: "7 - Qual é a famosa citação de O Sexto Sentido?",
        options: ["Eu vejo pessoas mortas", "Andar por aí como pessoas normais. Eles não se vêem", "Eles só veem o que querem ver", "Eles não sabem que estão mortos."],
        correctAnswer: 0
    },
    {
        question: "8 - Que filme de terror apresentou o primeiro banheiro funcionando na tela?",
        options: ["Psicose (1960)", "Carniçais II (1988) ", "Le Manoir du Diable", "Saw"],
        correctAnswer: 0
    },
    {
        question: "9 - Este filme de terror é baseado em um agente do FBI (Jodie Foster) tentando usar um serial killer canibal (Anthony Hopkins) com doutorado para ajudar a pegar outro serial killer.",
        options: ["Hannibal", "O Silêncio dos Inocentes", "Red Dragon", "Hanibal"],
        correctAnswer: 1
    },
    {
        question: "10 - Para que ano Marty e Doc viajam em “De Volta para o Futuro Parte II”?",
        options: ["2016", "2015", "2012", "2014"],
        correctAnswer: 1
    },
    {
        question: "11 - Julia Roberts interpreta uma prostituta chamada o que na comédia romântica clássica de 1990 “Uma Linda Mulher”?",
        options: ["Violeta", "Victoria", "Jenny", "julia"],
        correctAnswer: 1
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
