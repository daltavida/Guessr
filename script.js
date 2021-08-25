"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "Not a valid number! 🚫";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct guess! 🥳";
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
