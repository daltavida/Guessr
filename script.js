"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "Not a valid number! 🚫";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct guess! 🥳";
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "Too high 📈";
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "Too low 📉";
  }
});
