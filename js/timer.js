"use strict";
const minutes = document.querySelector("#scoreMins");
const seconds = document.querySelector("#scoreSecs");
let secs = 0;
let mins = 0;

let chrono;
const startCounting = () =>
  (chrono = setInterval(() => {
    if (secs < 59) {
      secs++;
      seconds.textContent = secs.toString().padStart(2, "0");
    } else {
      secs = 0;
      mins++;

      minutes.textContent = mins.toString().padStart(2, "0");
      seconds.textContent = secs.toString().padStart(2, "0");
    }
  }, 500));
const resetTimer = () => {
  clearInterval(chrono);
  mins = 0;
  secs = 0;
  minutes.textContent = mins.toString().padStart(2, "0");
  seconds.textContent = secs.toString().padStart(2, "0");
};
export { startCounting, chrono, resetTimer, mins, secs };
