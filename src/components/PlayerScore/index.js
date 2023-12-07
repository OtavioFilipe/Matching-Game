import "./style.css";

function PlayerScore(points = 0) {
  return `
        <ol data-points=${points}>
            <li>one</li>
            <li>two</li>
            <li>three</li>
        </ol>
    `;
}

export default PlayerScore;
