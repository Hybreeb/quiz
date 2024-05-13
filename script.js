// Hier kannst du JavaScript verwenden, um Daten aus der Datenbank abzurufen und in die Tabelle einzufügen
document.addEventListener('DOMContentLoaded', function() {
    // Hier Code einfügen, um Daten aus der Datenbank abzurufen und in die Tabelle einzufügen
    fetchQuizData();
});

function fetchQuizData() {
    fetch('get_quiz_data.php') // Hier den Pfad zum Skript angeben, das die Daten aus der Datenbank abruft
    .then(response => response.json())
    .then(data => {
        const quizDataElement = document.getElementById('quizData');
        data.forEach(entry => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${entry.Frage}</td>
                <td>${entry.Richtige_Antwort}</td>
                <td>${entry.Falsche_Antwort_1}</td>
                <td>${entry.Falsche_Antwort_2}</td>
                <td>${entry.Falsche_Antwort_3}</td>
                <td>${entry.Kategorie}</td>
                <td>${entry.Schwierigkeitsstufe}</td>
            `;
            quizDataElement.appendChild(row);
        });
    })
    .catch(error => console.error('Error fetching quiz data:', error));
}
