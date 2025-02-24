document.addEventListener("DOMContentLoaded", function () {
    const lines = [
        "Cześć!",
        "Mam na imię Bartosz",
        "i staram się wyżyć z IT",
        "(wychodzi różnie)"
    ]; // Każda linia tekstu

    const typingElement = document.getElementById("typing");
    let lineIndex = 0; // Która linia jest aktualnie pisana
    let charIndex = 0; // Która literka jest aktualnie pisana

    function typeLine() {
        if (lineIndex < lines.length) {
            if (charIndex < lines[lineIndex].length) {
                typingElement.innerHTML =
                    lines
                        .slice(0, lineIndex)
                        .map(line => `<p>${line}</p>`) // Wstawienie ukończonych linii
                        .join("") +
                    `<p>${lines[lineIndex].substring(0, charIndex + 1)}<span class='cursor'>|</span></p>`; // Aktualna linia + kursor

                charIndex++;
                setTimeout(typeLine, 50); // Prędkość pisania (50ms)
            } else {
                charIndex = 0;
                lineIndex++;
                setTimeout(typeLine, 500); // Opóźnienie przed kolejną linią
            }
        } else {
            document.querySelector(".cursor").style.animation = "blink 0.7s step-end infinite"; // Po zakończeniu miganie kursora
        }
    }

    typeLine(); // Start animacji
});