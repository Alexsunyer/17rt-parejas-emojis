<<<<<<< HEAD
=======
import { generateDeck, ul as cards } from "./generateDeck.js";
generateDeck();
const dealBtn = document.querySelector("#deal");
dealBtn.addEventListener("click", (e) => {
  console.dir(e);
  cards.innerHTML = "";

  generateDeck();
});
>>>>>>> defa43a (quitada la peticion a la api porque no puedo esconder el key)
