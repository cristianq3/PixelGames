import Juego from "./classVideojuego.js";
import { sumarioValidacion } from "./helpers.js";

//variables globales
let listaVideoJuegos =
  JSON.parse(localStorage.getItem("listaVideoJuegos")) || [];
if (listaVideoJuegos.length !== 0) {
  listaVideoJuegos = listaVideoJuegos.map(
    (videoJuego) =>
      new Juego(
        videoJuego.nombre,
        videoJuego.precio,
        videoJuego.categoria,
        videoJuego.descripcion,
        videoJuego.imagen,
        videoJuego.imagenMayorTamanio,
        videoJuego.requisitos,
        videoJuego.desarrollador,
        videoJuego.plataforma
      )
  );
}

console.log(listaVideoJuegos);

let formularioAdminVideoJuego = document.getElementById("formVideoJuego");

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

// console.log(juego.nombre); // "Nombre del juego"
// console.log(juego.precio); // "Precio del juego"
// console.log(juego.categoria); // "Categoría del juego"
// console.log(juego.descripcion); // "Descripción del juego"
// console.log(juego.imagen); // "ruta-imagen.png"
// console.log(juego.imagenMayorTamanio); // "ruta-imagen-grande.png"
// console.log(juego.requisitos); // "Requisitos del juego"
// console.log(juego.desarrollador); // "Nintendo"
// console.log(juego.plataforma); // "Plataforma del juego"

//parametros de la funcion

cargaInicial();

function cargaInicial() {
  if (listaVideoJuegos.length > 0) {
    //se dibuja la fila
    listaVideoJuegos.map((videoJuego) => crearFila(videoJuego));
  }
}

function crearFila(videoJuego) {
  let tbody = document.querySelector("#tablaVideoJuego");
  tbody.innerHTML += `<tr>
  <td scope="col">1</td>
  <td> ${videoJuego.nombre}</td>
  <td class="celdaTamanio text-truncate">
    ${videoJuego.descripcion}
  </td>
  <td class="celdaTamanio text-truncate">
    ${videoJuego.imagen}
  </td>
  <td>${videoJuego.categoria}</td>
  <td>${videoJuego.plataforma}</td>
  <td>
    <button class="btn btn-warning">
      <i class="bi bi-pencil-square"></i>
    </button>
    <button class="btn btn-danger">
      <i class="bi bi-x-square"></i>
    </button>
  </td>
</tr>`;
}

function prepararFormulario(e) {
  e.preventDefault();
  console.log("se esta ejecutando la creacion del videoJuego");
  crearVideoJuego();
}

function crearVideoJuego() {
  //validacion del formulario
  let resumen = sumarioValidacion(
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
