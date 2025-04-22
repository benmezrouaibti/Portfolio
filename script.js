// script.js
const text = document.querySelector(".text");
const words = ["Computer Science Student", "Cybersecurity Enthusiast", "Creative Developer"];
let wordIndex = 0;
let letterIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
    if (wordIndex >= words.length) wordIndex = 0;
    currentText = words[wordIndex];

    let displayedText = isDeleting
        ? currentText.substring(0, letterIndex--)
        : currentText.substring(0, letterIndex++);

    text.textContent = displayedText;

    if (!isDeleting && letterIndex === currentText.length + 1) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
    } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        wordIndex++;
        setTimeout(typeEffect, 200);
    } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
}

typeEffect();
