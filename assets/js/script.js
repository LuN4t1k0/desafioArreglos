import { propiedades  } from "../data/propiedades.js";

let prueba = document.querySelector('.prueba')
let html = '';

for (const propiedad of propiedades) {
  
  propiedad.metros > 35 && propiedad.metros <200 ? 
  html += /*html*/ `<li>${propiedad.tipo}</li> <li>${propiedad.metros}</li>` : console.log("no pasa na");
  
}

prueba.innerHTML = html