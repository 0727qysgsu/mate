let score = 0;
let level = 1;
let currentQuestion = {};

function updateLevel() {
    level = Math.floor(score / 5) + 1; // Update level setiap 5 skor
    document.getElementById('level').innerText = level;
}

function generateQuestion() {
    const maxNumber = level * 10; // Semakin tinggi level, angka lebih besar
    const num1 = Math.floor(Math.random() * maxNumber) + 1;
    const num2 = Math.floor(Math.random() * maxNumber) + 1;
    const operators = ['+', '-', '*', '/'];
    const operator = operators[Math.floor(Math.random() * operators.length)];

    let question, answer;
    switch (operator) {
        case '+':
            question = `${num1} + ${num2}`;
            answer = num1 + num2;
            break;
        case '-':
            question = `${num1} - ${num2}`;
            answer = num1 - num2;
            break;
        case '*':
            question = `${num1} × ${num2}`;
            answer = num1 * num2;
            break;
        case '/':
            question = `${num1 * num2} ÷ ${num2}`; // Buat hasil pembagian bulat
            answer = num1;
            break;
    }

    currentQuestion = { question, answer };
    document.getElementById('question').innerText = question;
}

document.getElementById('submit-answer').addEventListener('click', () => {
    const userAnswer = parseInt(document.getElementById('answer').value);

    if (userAnswer === currentQuestion.answer) {
        score++;
        document.getElementById('result').innerText = 'Benar! 🎉';
    } else {
        // Reset jika salah
        score = 0;
        level = 1;
        document.getElementById('result').innerText = `Salah! Jawaban yang benar adalah ${currentQuestion.answer}. Skor dan level di-reset ke 1. 😔`;
    }

    // Update skor dan level
    document.getElementById('score').innerText = score;
    updateLevel();

    // Bersihkan input dan generate soal baru
    document.getElementById('answer').value = '';
    generateQuestion();
});

// Mulai game
generateQuestion();
