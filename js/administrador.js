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

//modal funcion cerrar formulario
let modalFormVideojuego = new bootstrap.Modal(
  document.getElementById("modalVideoJuego")
);
console.log(modalFormVideojuego);
let btnCrearVideoJuego = document.getElementById("btnCrearVideoJuego");

//Manejador de Eventos
formularioAdminVideoJuego.addEventListener("submit", prepararFormulario);
btnCrearVideoJuego.addEventListener("click", mostrarModalVideoJuego);

//parametros de la funcion

cargaInicial();

function cargaInicial() {
  if (listaVideoJuegos.length > 0) {
    //se dibuja la fila
    listaVideoJuegos.map((videoJuego) => crearFila(videoJuego));
  }
}

function crearFila(videoJuego, longitud) {
  let tbody = document.querySelector("#tablaVideoJuego");
  tbody.innerHTML += `<tr>
  <td scope="col">${longitud}</td>
  <td> ${videoJuego.nombre}</td>
  <td> ${videoJuego.precio}</td>
  <td> ${videoJuego.categoria}</td>
  <td class="text-truncate"> 
    ${videoJuego.descripcion}
  </td>
  <td class="celdaTamanio text-truncate">
    ${videoJuego.imagen}
  </td>
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

    //dibujar la fila nueva en la tabla
    crearFila(juegoNuevo, listaVideoJuegos.length);
    //luego cierro el modal

    modalFormVideojuego.hide();
    //limpiar el formulario
    limpiarFormulario();
  } else {
    //mostrar cartel de error
    let alerta = document.getElementById("alerta");
    alerta.innerHTML = resumen;
    alerta.className = "alert alert-danger mt-3";
  }
}
function limpiarFormulario() {
  formularioAdminVideoJuego.reset();
}
function mostrarModalVideoJuego() {
  modalFormVideojuego.show();
}
