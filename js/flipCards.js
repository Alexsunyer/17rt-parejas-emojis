// La funcion flip se encarga de dar la vuelta

import { generateDeck, ul } from "./generateDeck.js";

const flip = (e) => {
  const currentCard = e.currentTarget;
  const stopBug = document.querySelectorAll(".flipped:not(.solved)");
  if (stopBug.length < 2) {
    currentCard.classList.add("flipped", "selected");
    // console.log(currentCard.textContent);
    selectFlippedCards();
  }
};

// La funcion selectCards sirve para ejecutar un event listener en cada carta
const selectCards = () => {
  const cards = document.querySelectorAll(".card");
  for (const card of cards) {
    card.addEventListener("click", flip);
  }
};

let attempts = 0;
const selectFlippedCards = () => {
  const selectedList = document.querySelectorAll(".selected");
  if (selectedList.length === 2) {
    attempts++;
    const cards = document.querySelectorAll(".selected.flipped .back");
    const card1 = cards[0];
    const card2 = cards[1];

    console.log(card1, card2);
    if (card1.textContent === card2.textContent) {
      for (const card of selectedList) {
        card.classList.remove("selected");
        card.classList.add("solved");
        card.removeEventListener("click", flip);
      }
    } else {
      for (const card of selectedList) {
        card.classList.remove("selected");
      }
      setTimeout(() => {
        for (const card of selectedList) {
          card.classList.remove("flipped");
        }
      }, 1000);
    }
  }
  const score = document.querySelector(".score");
  score.textContent = `${attempts}`;
  const allSolved = document.querySelectorAll(".solved");
  console.log(allSolved.length);
  if (allSolved.length === 2) {
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
      winDiv.classList.remove("infront");
      winDiv.classList.add("behind");
      generateDeck();
    });

    attempts = 0;
  }
};

export { selectCards };
