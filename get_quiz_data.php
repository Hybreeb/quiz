<?php
// Hier Code einfügen, um eine Verbindung zur MySQL-Datenbank herzustellen
// und die Daten aus der Tabelle "Fragen" abzurufen

// Beispielcode, wie die Daten zurückgegeben werden könnten
$quizData = [
    // Hier würdest du die tatsächlichen Daten aus der Datenbank einfügen
    // Beispiel: ['Frage' => '...', 'Richtige_Antwort' => '...', ...]
];

// Die Daten als JSON zurückgeben
header('Content-Type: application/json');
echo json_encode($quizData);
?>
