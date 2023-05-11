import Juego from "./classVideojuego.js";

let formularioAdminVideoJuego = document.getElementById('formVideoJuego');

//Manejador de Eventos
formularioAdminVideoJuego.addEventListener('submit', prepararFormulario);


// Ejemplo de uso de la clase Juego
const juego = new Juego(
    "Nombre del juego",
    "Descripción del juego",
    "ruta-imagen.png",
    "ruta-imagen-grande.png",
    "Género del juego",
    2023,
    "Plataforma del juego"
  );
  
  console.log(juego.nombre); // "Nombre del juego"
console.log(juego.precio); // "Precio del juego"
console.log(juego.categoria); // "Categoría del juego"
console.log(juego.descripcion); // "Descripción del juego"
console.log(juego.imagen); // "ruta-imagen.png"
console.log(juego.imagenMayorTamanio); // "ruta-imagen-grande.png"
console.log(juego.requisitos); // "Requisitos del juego"
console.log(juego.desarrollador); // "Nintendo"
console.log(juego.plataforma); // "Plataforma del juego"

//parametros de la funcion
function prepararFormulario (e){
    e.preventDefault();
    console.log('se esta ejecutando la creacion del videoJuego')
}
