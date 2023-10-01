"use strict";

const againBtn = document.querySelector(".againBtn");
const submitBtn = document.querySelector(".submitBtn");
const questionMark = document.querySelector(".questionMark");
const score = document.querySelector(".score");
const highScore = document.querySelector(".highScore");
let guessNumber = Math.trunc(Math.random()*20)+1;
const messageDisplay = document.querySelector(".messageDisplay");

let successBeat = new Audio("./assets/success.mp3");
let loseBeat = new Audio("./assets/you-lose.mp3");

let highScoreVal = 0;
let scoreVal = 20;

function restartGame() {
    successBeat.pause();
    loseBeat.pause();
    inputBox.value = "";
    questionMark.textContent = "?";
    messageDisplay.textContent = "Start Guessing ...";
    document.documentElement.style.setProperty('--background', 'black');
    guessNumber = Math.trunc(Math.random()*20)+1;
    score.textContent = 20;
    scoreVal = 20;
};

againBtn.addEventListener('click', restartGame);

submitBtn.addEventListener('click', () => {
    let inputBox = Number(document.querySelector(".inputBox").value);
    console.log(guessNumber);
    if(inputBox === guessNumber) {
        questionMark.textContent = guessNumber;
        questionMark.style.width = "15rem";
        messageDisplay.textContent = "🎉 Correct Guess";
        document.documentElement.style.setProperty('--background', 'green');
        highScoreVal = scoreVal;
        highScore.textContent = highScoreVal < guessNumber ? scoreVal : highScoreVal;
        successBeat.play();
    }
    else if(inputBox !== guessNumber) {
        messageDisplay.textContent = inputBox < guessNumber ? "👇 Number is too less" : "👆 Number is too high";
        inputBox.value = "";
        scoreVal--;
        loseBeat.play();
        if(scoreVal < 1) {
            restartGame()
            alert("Game Over"); 
        };
    }
    score.textContent = scoreVal;
});

