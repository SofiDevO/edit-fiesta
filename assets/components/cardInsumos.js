import { insumosProductos } from "../data/insumos.js";
export default function insumosTarjeta() {
  const cardInsumos = document.querySelector("[data-insumos]");

  for (const data of insumosProductos) {
    const Card = `
    <div class="container">
            <div class="card cCarousel-item">
                <h3 class="card__desc">${data.nombre}</h3>
                <img class="card__img" src="${data.img}" alt="${data.nombre}">
            </div>
        </div>
        `;
    cardInsumos.insertAdjacentHTML("beforeend", Card);
  }
}

insumosTarjeta();
