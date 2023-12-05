import "./style.css";

function CardGame(icon = "alura-pixel", alt = "Alura Logo") {
  return `
        <article class="card-game">
            <img src="images/${icon}.png" alt="${alt}">
        </article>
    `;
}

export default CardGame;
