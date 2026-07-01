const noteButton = document.getElementById("noteButton");
const intervalButton = document.getElementById("intervalButton");
const inputText = document.getElementById("inputText");
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

    if (answer.toLowerCase() == guess.toLowerCase()) {
        correctionText.textContent = "you are correct";
    } else {
        correctionText.textContent = "sorry you are incorrect";
    }
}