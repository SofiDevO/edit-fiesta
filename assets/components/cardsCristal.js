import { cristaleria, preparados } from "../data/cristaleria.js";
const cristaleriaTragos = document.querySelector("[data-cristal]");

// Itera sobre cristaleria para generar el HTML
for (const data of cristaleria) {
  const cardHTML = `
     <div class="card__cristal">
     <div class="container__descripcion">
     <div class="img__container">
       <img class="img__cristal" src="${data.src}" alt="${data.nombre}" />
       <span class="cristal__nombre">${data.nombre}</span>
     </div>
     <div class="description">
       <p>${data.desc}</p>
       <span>Piezas: ${data.piezas}</span>
     </div>
   </div>
   <div class="container__trago">
     ${preparados
       .filter((preparado) => preparado.cristal === data.nombre)
       .map(
         (trago) => `
           <div class="img__container">
             <img class="img__cristal"src="${trago.img}" alt="${
           trago.bebida
         }" />
             <span class="cristal__nombre">${trago.bebida}</h2>
           </div>
           <ul class="ingredientes">
             <h3>Ingredientes:</h3>
             ${Object.values(trago.ingredientes)
               .map(
                 (ingrediente) =>
                   `<li class="ingredientes__item">${ingrediente}</li>`
               )
               .join("")}
           </ul>
         `
       )
       .join("")}
   </div>
     </div>
    `;
  cristaleriaTragos.insertAdjacentHTML("beforeend", cardHTML);
}
