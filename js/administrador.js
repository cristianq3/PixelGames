import Juego from "./classVideojuego.js";
import { sumarioValidacion } from "./helpers.js";

let formularioAdminVideoJuego = document.getElementById("formVideoJuego");
let listaVideoJuegos = [];

let codigo = document.getElementById("codigo"),
  nombre = document.getElementById("nombre"),
  precio = document.getElementById("precio"),
  categoria = document.getElementById("categoria"),
  descripcion = document.getElementById("descripcion"),
  imagen = document.getElementById("imagen"),
  imagenMayorTamanio = document.getElementById("imagenMayorTamanio"),
  requisitos = document.getElementById("requisitos"),
  desarrollador = document.getElementById("desarrollador"),
  plataforma = document.getElementById("plataforma");


//Manejador de Eventos
formularioAdminVideoJuego.addEventListener("submit", prepararFormulario);

// Ejemplo de uso de la clase Juego
const juego = new Juego(
  "Nombre del juego",
  500,
  "Simulación",
  "Descripción del juego",
  "ruta-imagen.png",
  "ruta-imagen-grande.png",
  "Requisitos del juego",
  "Desarrollador del juego",
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
function prepararFormulario(e) {
  e.preventDefault();
  console.log("se esta ejecutando la creacion del videoJuego");
  crearVideoJuego();
}

function crearVideoJuego() {
  //validacion del formulario
  let resumen = sumarioValidacion("nombre.value");
  if (resumen.length === 0) {
    //los datos son validos
    // se crea el objeto Vj
    const juegoNuevo = new Juego(
      nombre.value,
      precio.value,
      categoria.value,
      descripcion.value,
      imagen.value,
      imagenMayorTamanio.value,
      requisitos.value,
      desarrollador.value,
      plataforma.value
    );
    console.log(juegoNuevo); // "Star Wars Jedi: Survivor"

    //agregamos el videojuego en un array
    listaVideoJuegos.push(juegoNuevo);
    console.log(listaVideoJuegos);
    //lo almaceno en el localstorage
    localStorage.setItem("listaVideoJuegos", JSON.stringify(listaVideoJuegos));

    //luego cierro el modal
  } else {
    //mostrar cartel de error
    let alerta = document.getElementById("alerta");
    alerta.innerHTML = resumen;
    alerta.className = "alert alert-danger mt-3";
  }
}
