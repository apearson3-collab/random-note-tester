const noteButton = document.getElementById("noteButton");
const intervalButton = document.getElementById("intervalButton");
const inputText = document.getElementById("inputText");
const resetButton = document.getElementById("resetButton");
const noteText = document.getElementById("noteText");
const intervalText = document.getElementById("intervalText");
const submitButton = document.getElementById("submitButton");
const correctionText = document.getElementById("isCorrect");

let note = "";
let number = -1;
let guess = "";
let noteNumber = -1;
let answer = "";

const notes = ["C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B"];
const semitones = [0, 2, 4, 5, 7, 9, 10];

noteButton.addEventListener("click", genrateNote);
intervalButton.addEventListener("click", genrateInterval);
submitButton.addEventListener("click", checkAnswer);
resetButton.addEventListener("click", reset);

function genrateNote() {
    noteNumber = Math.floor(Math.random() * 12);

    noteText.textContent = "the current note is: " + notes[noteNumber];
}

function genrateInterval() {
    number = (Math.floor(Math.random() * 12) + 1);
    if (number == 12) {
        number = 13;
    }

    intervalText.textContent = "the current interval is: " + number;
    if (number > 7) {
        number -= 7;
    }
}

function checkAnswer() {
    if (noteNumber == -1) {
        return;
    }
    if (number == -1) {
        return;
    }

    guess = inputText.value;

    answer = notes[(noteNumber + semitones[number-1]) % 12];

    if (answer.length > 1) {
        if (answer.substring(0, 2).toLowerCase() == guess.toLowerCase()) {
            correctionText.textContent = "that is correct";
        } else if (answer.substring(3, 5).toLowerCase() == guess.toLowerCase()) {
            correctionText.textContent = "that is correct";
        } else {
            correctionText.textContent = "sorry, that is incorrect";
        }
    } else if (answer.toLowerCase() == guess.toLowerCase()) {
        correctionText.textContent = "that is correct";
    } else {
        correctionText.textContent = "sorry, that is incorrect";
    }
}

function reset() {
    let note = "";
    let number = -1;
    let guess = "";
    let noteNumber = -1;
    let answer = "";

    noteText.textContent = "the current note is: ";
    intervalText.textContent = "the current interval is: ";
    inputText.value = "";
    correctionText.textContent = "that is __";
}