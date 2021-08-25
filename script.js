"use strict";

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "Not a valid number! 🚫";
  }
});
