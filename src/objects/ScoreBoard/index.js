import "./style.css";
import PlayerName from "../../components/PlayeName";

function ScoreBoard() {
  return `
        <header class="score-board">
        ${PlayerName("Player 1")}
        ${PlayerName("Player 2")}
        </header>
    `;
}

export default ScoreBoard;
