const noteButton = document.getElementById("noteButton");
const intervalButton = document.getElementById("intervalButton");
const inputText = document.getElementById("inputText");
const resetButton = document.getElementById("resetButton");
const noteText = document.getElementById("noteText");
const intervalText = document.getElementById("intervalText");
const submitButton = document.getElementById("submitButton");
const correctionText = document.getElementById("isCorrect");

const showAnswer = document.getElementById("showAnswer");
const answerText = document.getElementById("seeAnswer")

let note = "";
let number = -1;
let guess = "";
let noteNumber = -1;
let answer = "";
let intervalNumber = -1;

const notes = ["C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B"];
const intervals = ["1", "2", "3", "b3", "4", "5", "b5", "#5", "6", "b6", "7", "b7", "8", "9", "b9", "10", "11", "#11", "13", "b13", "#13"]
const semitones = [0, 2, 4, 3, 5, 7, 6, 8, 9, 8, 11, 10, 0, 2, 1, 4, 5, 6, 9, 8, 10];

noteButton.addEventListener("click", genrateNote);
intervalButton.addEventListener("click", genrateInterval);
submitButton.addEventListener("click", checkAnswer);
resetButton.addEventListener("click", reset);
showAnswer.addEventListener("click", revealAnswer);

function genrateNote() {
    answerText.textContent = "";
    correctionText.textContent = "that is __";
    noteNumber = Math.floor(Math.random() * 12);

    noteText.textContent = "the current note is: " + notes[noteNumber];
}

function genrateInterval() {
    answerText.textContent = "";
    correctionText.textContent = "that is __";
    intervalNumber = (Math.floor(Math.random() * 21) + 1);
    
    intervalText.textContent = "the current interval is: " + intervals[intervalNumber];
}

function checkAnswer() {
    if (noteNumber == -1) {
        return;
    }
    if (intervalNumber == -1) {
        return;
    }

    guess = inputText.value;

    answer = notes[(noteNumber + semitones[intervalNumber]) % 12];

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
    let intervalNumber = -1;
    let guess = "";
    let noteNumber = -1;
    let answer = "";

    noteText.textContent = "the current note is: ";
    intervalText.textContent = "the current interval is: ";
    inputText.value = "";
    correctionText.textContent = "that is __";
    answerText.textContent = "";
}

function revealAnswer() {
    answer = notes[(noteNumber + semitones[number-1]) % 12];

    answerText.textContent = "the answer is " + answer;
}