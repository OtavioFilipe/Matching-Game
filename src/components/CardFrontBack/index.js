import CardGame from "../CardGame";

function CardFrontBack() {
  return `
        <article class="card-front-back">
            ${CardGame()}
            ${CardGame("javaScript-pixel", "Logo do JavaSript")}
        </article>
    `;
}

export default CardFrontBack;
