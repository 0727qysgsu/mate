<?php
session_start();
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $score = intval($_POST['score']);
    $_SESSION['high_score'] = max($_SESSION['high_score'] ?? 0, $score);
    echo json_encode(['high_score' => $_SESSION['high_score']]);
    exit;
}
?>
