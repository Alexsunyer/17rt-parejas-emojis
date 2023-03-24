import { selectCards } from "./flipCards.js";
const ul = document.querySelector(".cards");
const generateDeck = () => {
  const emojis = ["🤯", "💣", "❤️", "👩", "🫑", "🥔", "🏠", "👻"];
  const deck = [...emojis, ...emojis];

  for (let i = 0; deck.length > 0; i++) {
    const cardIndex = Math.floor(Math.random() * deck.length);
    const card = deck[cardIndex];
    const li = document.createElement("li");
    li.innerHTML = ` <div class="content">
    <div class="front">
      
    </div>
    <div class="back">
      ${card}
    </div>
  </div>`;
    li.classList.add("card");
    ul.append(li);
    deck.splice(cardIndex, 1);
  }
  selectCards();
};
export { generateDeck, ul };
