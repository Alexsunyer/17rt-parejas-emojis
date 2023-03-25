// La funcion flip se encarga de dar la vuelta
const flip = (e) => {
  const currentCard = e.currentTarget;
  const stopBug = document.querySelectorAll(".flipped:not(.solved)");
  if (stopBug.length < 2) {
    currentCard.classList.add("flipped", "selected");
    console.log(currentCard.textContent);
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

// La funcion selectFlippedCards sirve para hacer que las cartas correctas ya no puedan ser seleccionadas
let attepmts = 0;
const selectFlippedCards = () => {
  const selectedList = document.querySelectorAll(".selected");
  if (selectedList.length === 2) {
    attepmts++;
    let card1 = selectedList[0];
    let card2 = selectedList[1];
    console.log(card1, card2);
    if (card1.textContent === card2.textContent) {
      card1.classList.remove("selected");
      card2.classList.remove("selected");
      card1.classList.add("solved");
      card2.classList.add("solved");
      card1.removeEventListener("click", flip);
      card2.removeEventListener("click", flip);
    } else {
      console.log("no son iguales");
      card1.classList.remove("selected");
      card2.classList.remove("selected");
      setTimeout(() => {
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
      }, 1000);
    }
  }
  const score = document.querySelector(".score");
  score.textContent = `${attepmts}`;
  const allSolved = document.querySelectorAll(".solved");
  console.log(allSolved.length);
  if (allSolved.length === 16) {
    attepmts = 0;
    // alert("HAS GANADO!!!");
  }
};

export { selectCards };
