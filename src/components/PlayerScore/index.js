import "./style.css";

function PlayerScore(points = 0) {
  return `
        <ol class="player-score" data-points=${points}>
            <li class="pointer">one</li>
            <li class="pointer">two</li>
            <li class="pointer">three</li>
        </ol>
    `;
}

export default PlayerScore;
