// La funcion flip se encarga de dar la vuelta
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

let attepmts = 0;
const selectFlippedCards = () => {
  const selectedList = document.querySelectorAll(".selected");
  if (selectedList.length === 2) {
    attepmts++;
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
  score.textContent = `${attepmts}`;
  const allSolved = document.querySelectorAll(".solved");
  console.log(allSolved.length);
  if (allSolved.length === 16) {
    attepmts = 0;
    // alert("HAS GANADO!!!");
  }
};

export { selectCards };
