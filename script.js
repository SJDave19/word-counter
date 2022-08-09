const textarea = document.getElementById("text-input");
const wordCount = document.getElementById("word-count");
const charCount = document.getElementById("char-count");
const words = document.getElementById("words");
const characters = document.getElementById("characters");

textarea.addEventListener("input", (e) => {
    const fieldValue = e.target.value;
    const arrayWords = fieldValue.trim().split(' ');

    wordCount.textContent = arrayWords.length;
    charCount.textContent = fieldValue.length;
    
    fieldValue.length < 1 ? wordCount.textContent = 0 : null;

    if (fieldValue.length > 1) {
        words.textContent = "words";
        characters.textContent = "characteres";
    } else {
        words.textContent = "word";
        characters.textContent = "charactere";
    }
});