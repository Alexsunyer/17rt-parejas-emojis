const minutes = document.querySelector("#scoreMins");
const seconds = document.querySelector("#scoreSecs");
let secs = 0;
let mins = 0;

let chrono;
const startCounting = () =>
  (chrono = setInterval(() => {
    secs++;
    if (secs < 60) {
      secs++;

      seconds.textContent = secs.toString().padStart(2, "0");
    } else {
      mins++;
      secs = 0;
      minutes.textContent = mins.toString().padStart(2, "0");
      seconds.textContent = secs.toString().padStart(2, "0");
    }
  }, 1000));
const resetTimer = () => {
  clearInterval(chrono);
  mins = 0;
  secs = 0;
  minutes.textContent = mins.toString().padStart(2, "0");
  seconds.textContent = secs.toString().padStart(2, "0");
};
export { startCounting, chrono, resetTimer, mins, secs };
