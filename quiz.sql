CREATE DATABASE quiz_db;

CREATE TABLE Fragen (
    FrageID INT AUTO_INCREMENT PRIMARY KEY,
    Frage VARCHAR(255),
    Richtige_Antwort VARCHAR(255),
    Falsche_Antwort_1 VARCHAR(255),
    Falsche_Antwort_2 VARCHAR(255),
    Falsche_Antwort_3 VARCHAR(255),
    Kategorie VARCHAR(100),
    Schwierigkeitsstufe VARCHAR(50)
);
