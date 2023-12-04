import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";
import BoardGame from "./src/objects/BoardGame";
import PlayerName from "./src/components/PlayeName";

const $app = document.querySelector("#app");

$app.insertAdjacentHTML(
  "beforeend",
  `
    ${PlayerName("Player 1")}
    ${PlayerName("Player 2")}
    ${BoardGame(6)}
`
);
