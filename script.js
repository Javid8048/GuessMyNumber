"use strict";

const againBtn = document.querySelector(".againBtn");
const submitBtn = document.querySelector(".submitBtn");
const questionMark = document.querySelector(".questionMark");
const score = document.querySelector(".score");
const highScore = document.querySelector(".highScore");
let guessNumber = Math.trunc(Math.random()*20)+1;
const messageDisplay = document.querySelector(".messageDisplay");
const inputBox = document.querySelector(".inputBox");

let successBeat = new Audio("./assets/success.mp3");
let loseBeat = new Audio("./assets/you-lose.mp3");

let highScoreVal = 0;
let scoreVal = 20;

function restartGame() {
    inputBox.value = 0;
    questionMark.textContent = "?";
    messageDisplay.textContent = "Start Guessing ...";
    document.documentElement.style.setProperty('--background', 'black');
    guessNumber = Math.trunc(Math.random()*20)+1;
    score.textContent = 20;
    scoreVal = 20;
};

againBtn.addEventListener('click', restartGame);

submitBtn.addEventListener('keydown', function(event) {
    if (event.keyCode === 13 || event.key === 'Enter') {
      
    }
});

submitBtn.addEventListener('click', () => {
    let inputBoxValue = Number(inputBox.value);
    if(!inputBoxValue) {
        alert("Check number cannot be zero, click the input box");
    } else {
        if(inputBoxValue === guessNumber) {
            questionMark.textContent = guessNumber;
            questionMark.style.width = "15rem";
            messageDisplay.textContent = "🎉 Correct Guess";
            document.documentElement.style.setProperty('--background', 'green');
            highScoreVal = scoreVal;
            highScore.textContent = highScoreVal < guessNumber ? scoreVal : highScoreVal;
            successBeat.play();
        }
        else if(inputBoxValue !== guessNumber) {
            messageDisplay.textContent = inputBoxValue < guessNumber ? "👇 Number is too less" : "👆 Number is too high";
            scoreVal--;
            loseBeat.play();
            if(scoreVal < 1) {
                alert("Game Over"); 
                restartGame();
            };
        }
        score.textContent = scoreVal;
    }
});

