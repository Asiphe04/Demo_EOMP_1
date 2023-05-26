let words = [
  { text: "DEVELOPER", color: "red" },
  { text: "DREAMER", color: "blue" },
  { text: "CREATOR", color: "green" },
];
let currentWordIndex = 0;
let wordElement = document.getElementById("word");
let currentLetterIndex = 0;
let currentWord = words[currentWordIndex].text;
let currentColor = words[currentWordIndex].color;

function type() {
  if (currentLetterIndex < currentWord.length) {
    let letterSpan = document.createElement("span");
    letterSpan.style.color = currentColor;
    letterSpan.textContent = currentWord.charAt(currentLetterIndex);
    wordElement.appendChild(letterSpan);
    currentLetterIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (currentLetterIndex > 0) {
    wordElement.removeChild(wordElement.lastChild);
    currentLetterIndex--;
    setTimeout(erase, 50);
  } else {
    currentWordIndex = (currentWordIndex + 1) % words.length;
    currentWord = words[currentWordIndex].text;
    currentColor = words[currentWordIndex].color;
    setTimeout(type, 1000);
  }
}

setTimeout(type, 1000);
