const questions = [
    {
        question: "1 - Quem é considerado o pai da inteligência artificial?",
        options: ["Alan Turing", " Elon Musk", "Steve Jobs", "Bill Gates"],
        correctAnswer: 0
    },
    {
        question: "2 - Qual destas não é uma técnica de inteligência artificial?",
        options: ["Reconhecimento facial", " Jogos de tabuleiro", "Chatbots", "Carros autônomos"],
        correctAnswer: 3
    },
    {
        question: "3 - O que significa IA?",
        options: ["Inteligência Articulada", "Inteligência Artificial", "Interpretação Avançada", " Invenção Automática"],
        correctAnswer: 1
    },
     {
        question: "4 - O que os chatbots fazem?",
        options: ["Controlam o tráfego", "Fazem reservas em restaurantes ", "Tiram fotos ", "Cozinham comida"],
        correctAnswer: 1
    },
    {
        question: "5 - Qual destes não é um exemplo de IA em jogos de videogame?",
        options: ["NPCs (Personagens Não-jogáveis)", "Inteligência de computador em xadrez", "Gráficos em alta resolução", "Inteligência para ajustar a dificuldade conforme o jogador"],
        correctAnswer: 2
    },
    {
        question: "6 - Como os assistentes de voz, como a Siri ou a Alexa, funcionam?",
        options: [" Reconhecendo padrões de linguagem humana", "Lendo pensamentos", " Escaneando rostos", "Criando músicas"],
        correctAnswer: 0
    },
    {
        question: "7 - O que é aprendizado de máquina?",
        options: ["Um computador que aprende a ler", "Um robô que ensina programação", "Um programa que aprende com exemplos", "Uma máquina de lavar que aprende a cozinhar"],
        correctAnswer: 2
    },
    {
        question: "8 - Qual é o principal objetivo da IA em carros autônomos?",
        options: ["Aumentar o consumo de combustível", "Reduzir o tráfego nas estradas", "Melhorar a segurança e evitar acidentes", " Aprender a tocar música"],
        correctAnswer: 2
    },
    {
        question: "9 - O que é reconhecimento facial?",
        options: ["Um método para reconhecer diferentes tipos de comida", "Uma técnica para identificar pessoas por suas características faciais", "Um jogo de tabuleiro", "Uma maneira de reconhecer músicas pelo som"],
        correctAnswer: 1
    },
    {
        question: "10 - Qual é a principal preocupação ética sobre a IA?",
        options: ["Aumentar a diversão", " Privacidade e segurança dos dados", "Reduzir o tempo de sono", "Aumentar o consumo de energia"],
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
