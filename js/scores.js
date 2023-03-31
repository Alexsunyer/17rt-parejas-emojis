"use strict";

let highScore = JSON.parse(localStorage.getItem("bestScore")) || {};
const classHighScore = document.querySelector(".highScore");
const displayHighScore = () => {
  if (localStorage.getItem("bestScore")) {
    const record = document.querySelector("#highScore");
    record.innerHTML = `<span class="score">${
      highScore.attempts
    }</span><span>&nbsp&nbsp</span><span id="bestMinutes">${highScore.mins
      .toString()
      .padStart(2, "0")}</span><span id="bestSeconds">:${highScore.secs
      .toString()
      .padStart(2, "0")}</span>`;
  }
  changeScoreColor();
};
const changeScoreColor = () => {
  const displayedScores = document.querySelectorAll(".score");
  for (const score of displayedScores) {
    if (score.textContent <= 12) {
      score.style.color = "green";
    } else if (score.textContent <= 20) {
      score.style.color = "orange";
    } else {
      score.style.color = "red";
    }
  }
};
const computeScores = (scores) => {
  const sortedScores = [...scores, highScore].sort((a, b) => {
    if (a.attempts > b.attempts) {
      return 1;
    }
    if (a.attempts < b.attempts) {
      return -1;
    }
    if (a.totalTime > b.totalTime) {
      return 1;
    }
    if (a.totalTime < b.totalTime) {
      return -1;
    }
  });
  highScore = sortedScores[0];
  localStorage.setItem("bestScore", JSON.stringify(highScore));
  displayHighScore();
};
export { computeScores, displayHighScore, changeScoreColor };
