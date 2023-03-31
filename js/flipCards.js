"use strict";
// La funcion flip se encarga de dar la vuelta

import { ul } from "./generateDeck.js";
import { chrono, mins, secs } from "./timer.js";
import { computeScores, changeScoreColor } from "./scores.js";
import { resetAfterWin } from "./main.js";
let attempts = 0;
const sessionScores = [];
const score = document.querySelector("#score");

const muted = document.querySelector("#muted");
const mutedIcon = document.querySelector("#mutedIcon");
const mute = () => {
  console.dir(mutedIcon);
  if (muted.checked) {
    mutedIcon.textContent = "🔇";
  } else {
    mutedIcon.textContent = "🔊";
  }
};

muted.addEventListener("click", mute);

//nuevo
const flipSound = () => {
  let audio = new Audio("/audio/card3.mp3");
  if (!muted.checked) {
    audio.play();
  }
};

const ErrorSound = () => {
  let audio = new Audio("/audio/error1.mp3");
  if (!muted.checked) {
    audio.play();
  }
};
//nuevo

const emojis = ["🤯", "💣", "❤️", "👩", "🫑", "🥔", "🏠", "👻"];

const flip = (e) => {
  const currentCard = e.currentTarget;
  const stopBug = document.querySelectorAll(".flipped:not(.solved)");
  if (stopBug.length < 2) {
    if (currentCard.classList.value !== "card") {
      ErrorSound();
    } else {
      flipSound();
    }
    currentCard.classList.add("flipped", "selected");

    selectFlippedCards();
  } else {
    ErrorSound();
  }
};

// La funcion selectCards sirve para ejecutar un event listener en cada carta
const selectCards = (resetScore) => {
  attempts = resetScore;
  score.textContent = attempts;
  const cards = document.querySelectorAll(".card");
  for (const card of cards) {
    card.addEventListener("click", flip);
  }
};

const selectFlippedCards = () => {
  const selectedList = document.querySelectorAll(".selected");
  if (selectedList.length === 2) {
    attempts++;
    const cards = document.querySelectorAll(".selected.flipped .back");
    const [card1, card2] = cards;

    // console.log(card1, card2);
    if (card1.textContent === card2.textContent) {
      for (const card of selectedList) {
        card.classList.remove("selected");
        card.classList.add("solved");
        card.removeEventListener("click", flip);
        card.addEventListener("click", ErrorSound); //nuevo
      }
    } else {
      for (const card of selectedList) {
        card.classList.remove("selected");
      }
      setTimeout(() => {
        for (const card of selectedList) {
          flipSound();
          card.classList.remove("flipped");
        }
      }, 1000);
    }
  }

  score.textContent = `${attempts}`;
  changeScoreColor();

  const allSolved = document.querySelectorAll(".solved");
  if (allSolved.length === 16) {
    clearInterval(chrono); // detener  el cronometro
    // funcionamiento de los best scores
    const drawScore = {
      attempts,
      mins,
      secs,
      totalTime: mins * 60 + secs,
    };
    sessionScores.push(drawScore);
    computeScores(sessionScores);

    const ulLluvia = document.createElement("ul");
    ulLluvia.classList.add("lluvia");
    document.body.append(ulLluvia);
    let lluvia = setInterval(() => {
      for (let i = 0; i < 8; i++) {
        const styleEmoji = emojis[i];

        const li = document.createElement("li");

        li.textContent = `${styleEmoji}`;
        li.style.left = ` ${
          Math.floor(Math.random() * (document.body.offsetWidth * 1.1)) - 20
        }px `;
        ulLluvia.append(li);
      }
    }, 20000);

    const winP = document.querySelector("#winP");
    const winDiv = document.querySelector("#win");
    const winButton = document.querySelector("#restart");
    winDiv.classList.remove("behind");
    winDiv.classList.add("infront");
    if (attempts === 8) {
      winP.textContent = `¡Lo has hecho perfecto! Te ha tomado ${attempts} intentos ¡Enhorabuena!`;
    } else if (attempts < 12) {
      winP.textContent = `¡Lo has hecho muy bien! Te ha tomado ${attempts} intentos ¡Enhorabuena!`;
    } else if (attempts < 16) {
      winP.textContent = `¡Eres una máquina! Te ha tomado ${attempts} intentos ¡Enhorabuenaa!`;
    } else if (attempts < 20) {
      winP.textContent = `¡Muy bien! Te ha tomado ${attempts} intentos ¡Enhorabuena!`;
    } else if (attempts < 30) {
      winP.textContent = `¡Inténtalo otra vez para mejorar los registros! Te ha tomado ${attempts} intentos ¡Tú puedes!`;
    } else if (attempts < 50) {
      winP.textContent = `No se te da muy bien... Te ha tomado ${attempts} intentos ¡Practica un poquito más y mejora esta marca!`;
    } else {
      winP.textContent = `Yo creo que mi sobrino es mejor... Te ha tomado ${attempts} intentos...`;
    }

    winButton.addEventListener("click", () => {
      ul.innerHTML = "";
      ulLluvia.innerHTML = "";
      winDiv.classList.remove("infront");
      winDiv.classList.add("behind");
      resetAfterWin();
    });

    attempts = 0;
  }
};

export { selectCards, attempts, sessionScores };
