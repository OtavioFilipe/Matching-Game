import "./style.css";
import CardGame from "../CardGame";

function CardFrontBack() {
  return `
        <article class="card-front-back">
        <div class="card -front">
            ${CardGame()}
        </div>
        <div class="card -back">
            ${CardGame("javaScript-pixel", "Logo do JavaSript")}
        </div>
        </article>
    `;
}

export default CardFrontBack;
