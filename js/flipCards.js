const flip = (e) => {
  const currentCard = e.currentTarget;
  currentCard.classList.add("flipped", "selected");
  console.log(currentCard.textContent);
  setTimeout(() => {
    currentCard.classList.remove("flipped");
  }, 1000);
};

const selectCards = () => {
  const cards = document.querySelectorAll(".card");
  for (const card of cards) {
    card.addEventListener("click", flip);
  }
};

export { selectCards };
