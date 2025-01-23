let score = 0;
let level = 1;
let currentQuestion = {};
let timer = 60; // Waktu awal
let timerInterval;
let gameStarted = false;

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

function startTimer() {
    if (!gameStarted) {
        gameStarted = true;
        timerInterval = setInterval(() => {
            timer--;
            document.getElementById('timer').innerText = timer;

            if (timer <= 0) {
                clearInterval(timerInterval);
                document.getElementById('result').innerText = 'Waktu habis! Game berakhir! 😔';
                document.getElementById('restart').classList.remove('d-none');
            }
        }, 1000);
    }
}

function resetGame() {
    clearInterval(timerInterval); // Hentikan timer
    timer = 60; // Reset waktu
    score = 0; // Reset skor
    level = 1; // Reset level
    gameStarted = false;

    document.getElementById('score').innerText = score;
    document.getElementById('level').innerText = level;
    document.getElementById('timer').innerText = timer;
    document.getElementById('result').innerText = 'Jawaban salah! Game dimulai kembali dari awal. 😔';
    document.getElementById('restart').classList.add('d-none'); // Sembunyikan tombol restart
    generateQuestion();
}

document.getElementById('submit-answer').addEventListener('click', () => {
    startTimer(); // Mulai timer saat pemain mengirim jawaban pertama

    const userAnswer = parseInt(document.getElementById('answer').value);

    if (userAnswer === currentQuestion.answer) {
        score++;
        document.getElementById('result').innerText = 'Benar! 🎉';
        timer = 60; // Reset timer ke 60 detik
    } else {
        resetGame(); // Reset permainan jika jawaban salah
        return; // Hentikan eksekusi lebih lanjut
    }

    document.getElementById('score').innerText = score;
    updateLevel();
    document.getElementById('answer').value = '';
    generateQuestion();
});

// Reset game dengan tombol restart
document.getElementById('restart').addEventListener('click', () => {
    resetGame();
});

// Mulai game
generateQuestion();
