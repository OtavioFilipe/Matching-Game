import CardGame from "./src/components/CardGame";

const $app = document.querySelector('#app');
const $htmlCardGame = CardGame();

$app.insertAdjacentHTML("beforeend", $htmlCardGame)
