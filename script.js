"use strict";

// selecting an element and then selecting its text content
// console.log(document.querySelector('.message'));

// What is Dom and Dom manipulation
// console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.message').textContent = "Correct Number");

// console.log(document.querySelector('.number').textContent = 13);
// console.log(document.querySelector('.score').textContent = 12);
// console.log(document.querySelector('.guess').value = 23);

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

function displayScore(s){
    document.querySelector(".score").textContent = s; 
}

function displayHighscore(h){
    document.querySelector(".highscore").textContent= h;
}

function displayNumber(n){
    document.querySelector(".number").textContent = n; 
}

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20; // also called state variable
let highscore = 0;
displayScore(score);
displayHighscore(highscore);


function again() {
  // location.reload(); reloading the page (we shouldn't reload the page because it will reset the highscore)
  // manipulating CSS using JS
  // The dashedd property in CSS becomes the camelCase property in JS(inline styling)
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayNumber("?");
  displayMessage("Start guessing...");
  displayScore(score);
  displayHighscore(highscore);
  document.querySelector(".guess").value = "";
}

function highLow(x) {
  if (score > 1) {
    displayMessage(x);
    score--;
    displayScore(score);
  } else {
    displayMessage("You lost the game 💀");
    score--;
    displayScore(score);
  }
}
// handling click events

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  // no number entered
  if (!guess) {
    displayMessage("No Number ❌");
  }

  // correct guess
  else if (guess === number) {
    document.querySelector("body").style.backgroundColor = "#33dd33";
    document.querySelector(".number").style.width = "30rem";
    displayMessage("Correct Number🎉");
    displayNumber(number);
    if (score > highscore) {
      highscore = score;
      displayHighscore(highscore);
    }
  }
  //guess is high
  else if (guess > number) {
    highLow("Too high! 📈");
  }
  // Guess is low
  else if (guess < number) {
    highLow("Too low! 📉");
  }
});

document.querySelector(".again").addEventListener("click", () => {
  again();
});
