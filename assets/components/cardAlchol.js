import { alcoholProductos } from "../data/alcohol.js";

export default function alcoholTarjeta() {
  const cardAlcohol = document.querySelector("[data-alcohol]");

  for (const data of alcoholProductos) {
    const Cards = `
    <div class="container">
            <div class="card cCarousel-item2">
            <img class="card__img" src="${data.img}" alt="${data.nombre}">
            <h3 class="card__desc">${data.nombre}</h3>
            </div>
        </div>
        `;
    cardAlcohol.insertAdjacentHTML("beforeend", Cards);
  }
}

alcoholTarjeta();
