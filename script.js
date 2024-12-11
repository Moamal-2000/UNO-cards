"use strict";

const playCardsContainer = document.querySelector(".game-cards");

const cardsColors = ["red", "yellow", "green", "blue"];
const numberOfCards = 9;

for (let colorIndex = 0; colorIndex < cardsColors.length; colorIndex++) {
  const color = cardsColors[colorIndex];
  renderCardsByColor(playCardsContainer, color);
}

function renderCardsByColor(elementParent, color) {
  for (let number = 1; number <= numberOfCards; number++) {
    const lineClass = number === 9 || number === 6 ? "line" : "";

    elementParent.innerHTML += `
    <div class="card-body ${color}">
      <div class="center-circle">
        <span class="${lineClass}" data-number=${number}>${number}</span>
      </div>
    </div>`;
  }
}
