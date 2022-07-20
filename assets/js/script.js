import { propiedades } from "../data/propiedades.js";

let prueba = document.querySelector(".prueba");
let cantidad = document.querySelector(".cantidad")
let html = "";
let contador = ""

for (const propiedad of propiedades) {
  propiedad.metros > 35 && propiedad.metros < 200
    ? (contador++, html += /*html*/ `
  <div class="card" style="width: 18rem;">
  <img src="${propiedad.src}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${propiedad.tipo}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Nº Habitaciones: ${propiedad.habitaciones}</h6>
    <h6 class="card-subtitle mb-2 text-muted">Metros:${propiedad.metros} M<span>&#178;</span></h6>
    <p class="card-text">${propiedad.descripcion}.</p>
    <a href="#" class="btn btn-primary">Ver más</a>
  </div>
</div> `) 

    : console.log("no pasa na");
}

console.log(contador);

prueba.innerHTML = html;
cantidad.textContent = `Encontrados ${contador}`
