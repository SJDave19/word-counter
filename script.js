const textarea = document.getElementById("text-input");
const wordCount = document.getElementById("word-count");
const charCount = document.getElementById("char-count");
const word = document.getElementById("words");
const characters = document.getElementById("characters");

textarea.addEventListener("input", (e) => {
    const fieldValue = e.target.value;
    const words = fieldValue.trim().split(' ');

    wordCount.textContent = words.length;
    charCount.textContent = fieldValue.length;
    
    fieldValue.length < 1 ? wordCount.textContent = 0 : null;
    
    if (fieldValue.length > 1) {
        word.textContent = "words";
        characters.textContent = "characteres";
    } else {
        word.textContent = "word";
        characters.textContent = "charactere";
    }
});