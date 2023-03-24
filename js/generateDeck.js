const ul = document.querySelector(".cards");
const generateDeck = () => {
  const deck = [
    "🤯",
    "💣",
    "❤️",
    "👩",
    "🫑",
    "🥔",
    "🏠",
    "👻",
    "🤯",
    "💣",
    "❤️",
    "👩",
    "🫑",
    "🥔",
    "🏠",
    "👻",
  ];

  for (let i = 0; deck.length > 0; i++) {
    const cardIndex = Math.floor(Math.random() * deck.length);
    const card = deck[cardIndex];
    const li = document.createElement("li");
    li.textContent = card;
    li.classList.add("card");
    ul.append(li);
    deck.splice(cardIndex, 1);
    console.log(card);
  }
};
export { generateDeck, ul };
