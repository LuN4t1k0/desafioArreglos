//#region Arreglo
const propiedades = [
  {
    tipo: "Departamento",
    descripcion: "Desde las alturas todo se ve mejor",
    src: "../assets/img/depto1.jpg",
    habitaciones: 1,
    metros: 35,
  },
  {
    tipo: "Departamento",
    descripcion: "Desde las alturas todo se ve mejor",
    src: "../assets/img/depto2.jpg",
    habitaciones: 2,
    metros: 55,
  },
  {
    tipo: "Casa",
    descripcion: "Desde las alturas todo se ve mejor",
    src: "../assets/img/casa1.jpg",
    habitaciones: 3,
    metros: 120,
  },
  {
    tipo: "Casas",
    descripcion: "Desde las alturas todo se ve mejor",
    src: "../assets/img/casa2.jpg",
    habitaciones: 4,
    metros: 180,
  },
  {
    tipo: "Departamento",
    descripcion: "Desde las alturas todo se ve mejor",
    src: "../assets/img/depto3.jpg",
    habitaciones: 3,
    metros: 200,
  },
  {
    tipo: "Departamento",
    descripcion: "Desde las alturas todo se ve mejor",
    src: "../assets/img/depto4.jpg",
    habitaciones: 1,
    metros: 36,
  },
  {
    tipo: "Casa",
    descripcion: "Desde las alturas todo se ve mejor",
    src: "../assets/img/casa3.jpg",
    habitaciones: 3,
    metros: 90,
  },

  {
    tipo: "Departamento",
    descripcion: "Desde las alturas todo se ve mejor",
    src: "../assets/img/casa4.jpg",
    habitaciones: 2,
    metros: 60,
  },
];

//#endregion

//variables
let result = document.querySelector(".container-result");
// let html = "";

//template

// for (const propiedad of propiedades) {
//   if (propiedad.metros >= 35 && propiedad.metros <=70) {
//     html += /*html*/ `
//     <div class="card" style="width: 18rem;">
//   <img src="${propiedad.src}" class="card-img-top" alt="imagen propiedad">
//   <div class="card-body">
//     <h5 class="card-title">${propiedad.tipo}</h5>
//     <h6 class="card-subtitle mb-2 text-muted">Nº Habitaciones: ${propiedad.habitaciones}</h6>
//     <h6 class="card-subtitle mb-2 text-muted">Metros:${propiedad.metros} M<span>&#178;</span></h6>
//     <p class="card-text">${propiedad.descripcion}.</p>
//     <a href="#" class="btn btn-primary">Ver más</a>
//   </div>
// </div> 
//     `;
//   }
// }

const buscarPropiedadPorMetroCuadrado = () =>{
  let minText = document.querySelector('.min').value
  let maxText = document.querySelector('.max').value
  let html = ''

  for (const propiedad of propiedades) {
    if(propiedad.metros >= minText && propiedad.metros <=maxText){
      html += /*html*/ `
    <div class="card" style="width: 18rem;">
  <img src="${propiedad.src}" class="card-img-top" alt="imagen propiedad">
  <div class="card-body">
    <h5 class="card-title">${propiedad.tipo}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Nº Habitaciones: ${propiedad.habitaciones}</h6>
    <h6 class="card-subtitle mb-2 text-muted">Metros:${propiedad.metros} M<span>&#178;</span></h6>
    <p class="card-text">${propiedad.descripcion}.</p>
    <a href="#" class="btn btn-primary">Ver más</a>
  </div>
</div> 
    `
    }
  }
  result.innerHTML = html
  
}

// result.innerHTML = html;
