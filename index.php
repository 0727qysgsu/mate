<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game Matematika</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1><i class="fas fa-calculator"></i> Game Matematika</h1>
        <div id="question-box">
            <p id="question">Soal akan muncul di sini...</p>
            <div class="input-wrapper">
                <input type="number" id="answer" placeholder="Masukkan jawaban">
                <button id="submit-answer"><i class="fas fa-paper-plane"></i> Kirim Jawaban</button>
            </div>
        </div>
        <div id="result"></div>
        <div id="score-box">
            <p><i class="fas fa-star"></i> Level Anda: <span id="level">1</span></p>
            <p><i class="fas fa-trophy"></i> Skor Anda: <span id="score">0</span></p>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
