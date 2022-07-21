//#region Arreglo
const propiedadesJSON = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2,
    m: 170,
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    m: 130,
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m: 80,
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo ",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    m: 6,
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    m: 200,
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión vip de tus sueños ",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    rooms: 5,
    m: 500,
  },
  {
    name: "Departamento",
    description: "Vive una vida lujosa en el departamento de tus sueños ",
    src: "https://http2.mlstatic.com/D_NQ_NP_2X_786208-MLC50785462705_072022-O.webp",
    rooms: 5,
    m: 500,
  },
  {
    name: "Departamento",
    description: "Vive una vida lujosa en el departamento de tus sueños ",
    src: "https://http2.mlstatic.com/D_NQ_NP_2X_852663-MLC50775597688_072022-O.webp",
    rooms: 3,
    m: 200,
  },
  {
    name: "Casa de campo",
    description: "Vive una vida lujosa en la casa de capo de tus sueños ",
    src: "https://a0.muscache.com/im/pictures/997261b3-1645-4766-bb72-dae4caca150c.jpg?im_w=720",
    rooms: 5,
    m: 500,
  },
  {
    name: "Isla",
    description: "Disfruta de nuestra isla privada ubicada en del Rosario.  ",
    src: "https://a0.muscache.com/im/pictures/miso/Hosting-49227437/original/7cf358b9-e8c5-4067-9ac5-014784387e22.jpeg?im_w=720",
    rooms: 5,
    m: 1750,
  },
];
//#endregion

//variables
let result = document.querySelector(".realState-card");
let contador = document.querySelector(".contador")

const template = (prop) => {
  console.log(prop);
  return /*html*/ `
        <div class="card" style="width: 15rem">
            <img src="${prop.src}" class="card-img-top" alt="imagen Propiedad" height="158px" width ="238px"  />
            <div class="card-body">
              <h5 class="titulo"><b>${prop.name}</b></h5>
              <h5 class="m2 subtitulo">${prop.m}<span> Metros&#178;</span></h5>
              <h5 class="rooms subtitulo">${prop.rooms} <span>habitaciones</span> </h5>
              <p class="card-text description">${prop.description}</p>
              <a href="#" class="btn btn-primary">Más Informacion</a>
            </div>
          </div>
  `;
};


const cargaDatosPropiedades = () => {
  let cantidad = "";
  for (const propiedad of propiedadesJSON) {
    let html = template(propiedad);
    cantidad ++
    result.innerHTML += html;
  }
  console.log(cantidad);
  contador.innerHTML = cantidad
};

const buscarPropiedadPorMetroCuadrado = () => {
  let minText = document.querySelector(".min").value;
  let maxText = document.querySelector(".max").value;
  let rooms = document.querySelector(".rooms").value;
  let html = "";
  cantidad = 0

  if(minText == 0 || maxText == 0 || rooms == 0) {
    alert("Debes ingresar todos los valores")
  }

  let filtro = propiedadesJSON.filter((p) => p.m >= minText && p.m <= maxText && p.rooms >= rooms
  );

  if(filtro.length==0){
    html+= `<h1>Busqueda sin resultados</h1>`
  }

  //limpiar pantalla
  result.innerHTML = "";
  for (const f of filtro) {
    html += template(f);
    cantidad++
  }
  result.innerHTML = html;
  contador.innerHTML = cantidad
};

document.addEventListener("DOMContentLoaded", cargaDatosPropiedades);




