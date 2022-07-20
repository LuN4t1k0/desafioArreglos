import { propiedades } from "../data/propiedades.js";

let prueba = document.querySelector(".prueba");
let cantidad = document.querySelector(".cantidad")
let room = document.querySelector("#habitaciones")
let maxText = document.querySelector('.max')
let minText = document.querySelector('.min')

// min = 35
// max = 100

let html = "";
let contador = ""


// for (const propiedad of propiedades) {
//   propiedad.metros >`${min}` && propiedad.metros < `${max}`
//     ? (contador++, html += /*html*/ `
//   <div class="card" style="width: 18rem;">
//   <img src="${propiedad.src}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${propiedad.tipo}</h5>
//     <h6 class="card-subtitle mb-2 text-muted">Nº Habitaciones: ${propiedad.habitaciones}</h6>
//     <h6 class="card-subtitle mb-2 text-muted">Metros:${propiedad.metros} M<span>&#178;</span></h6>
//     <p class="card-text">${propiedad.descripcion}.</p>
//     <a href="#" class="btn btn-primary">Ver más</a>
//   </div>
// </div> `) 

//     : console.log("no pasa na");
// }

const buscarValores = () =>{
  let html = ""
  let min = document.querySelector("#min").value
  let max = document.querySelector("#max").value
  minText.innerHTML = min
  maxText.innerHTML = max

  for (const propiedad of propiedades) {
    if(propiedad.metros >= min ){
      html +=/*html*/ `${propiedad.tipo}`
    }
  }
  cantidad.innerHTML = html
}

export const saludar = () => {
  console.log("hola");
}

console.log(contador);

// cantidad.innerHTML = html;
// cantidad.textContent = `Encontrados ${contador}`
// cantidad.textContent = ` ${min}, ${max}`
