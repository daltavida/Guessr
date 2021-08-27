"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "#222222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
  score = 20;
  document.querySelector(".score").textContent = score;
});

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "Not a valid number! 🚫";
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent = "Correct guess! 🥳";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
    }
    document.querySelector(".highscore").textContent = highScore;
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high 📈";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game 🎇";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low 📉";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game 🎇";
      document.querySelector(".score").textContent = 0;
    }
  }
});
