import Juego from "./classVideojuego.js";
import { sumarioValidacion } from "./helpers.js";

//variables globales
let listaVideoJuegos =
  JSON.parse(localStorage.getItem("listaVideoJuegos")) || [];
if (listaVideoJuegos.length !== 0) {
  listaVideoJuegos = listaVideoJuegos.map(
    (videoJuego) =>
      new Juego(
        videoJuego.codigo,
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

let btnCrearVideoJuego = document.getElementById("btnCrearVideoJuego");

let crearJuegoNuevo = true; //

//Manejador de Eventos
formularioAdminVideoJuego.addEventListener("submit", prepararFormulario);
btnCrearVideoJuego.addEventListener("click", mostrarModalVideoJuego);

//parametros de la funcion

cargaInicial();

function cargaInicial() {
  if (listaVideoJuegos.length > 0) {
    //se dibuja la fila
    listaVideoJuegos.map((videoJuego, longitud) =>
      crearFila(videoJuego, longitud + 1)
    );
  }
}

function crearFila(videoJuego, longitud) {
  let tbody = document.querySelector("#tablaVideoJuego");
  tbody.innerHTML += `<tr>
  <td scope="col">${longitud}</td>
  <td> ${videoJuego.nombre}</td>
  <td> ${videoJuego.precio}</td>
  <td> ${videoJuego.categoria}</td>
  <td class="celdaTamanio text-truncate"> 
    ${videoJuego.descripcion}
  </td>
  <td class="celdaTamanio text-truncate">
    ${videoJuego.imagen}
  </td>
  <td>
  <button class="btn rounded-5 btn-warning" onclick="prepararJuego('${videoJuego.codigo}')">
  <i class="bi bi-pencil"></i>
</button>
    <button class="btn rounded-5 btn-danger" onclick="borrarJuego('${videoJuego.codigo}')">
      <i class="bi bi-x-circle"></i>

    </button>
  </td>
</tr>`;
}

function prepararFormulario(e) {
  e.preventDefault();

  if (crearJuegoNuevo) {
    crearVideoJuego();
  } else {
    editarPelicula();
  }
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
    const juegoNuevo = new Juego(
      undefined,
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

    //agregamos el videojuego en un array
    listaVideoJuegos.push(juegoNuevo);

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

function guardarEnLocalstorage() {
  localStorage.setItem("listaVideoJuegos", JSON.stringify(listaVideoJuegos));
}

function limpiarFormulario() {
  formularioAdminVideoJuego.reset();
}
function mostrarModalVideoJuego() {
  crearJuegoNuevo = true;
  limpiarFormulario();
  modalFormVideojuego.show();
}

window.borrarJuego = (codigo) => {
  Swal.fire({
    title: "¿Esta seguro de eliminar el Juego?",
    text: "No se puede revertir este proceso",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Borrar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      //borrar el Juego del array
      let posicionJuego = listaVideoJuegos.findIndex(
        (Juego) => Juego.codigo === codigo
      );

      listaVideoJuegos.splice(posicionJuego, 1);
      //actualizar el localstorage
      guardarEnLocalstorage();
      //borrar la fila de la tabla
      let tbody = document.querySelector("#tablaVideoJuego");
      tbody.removeChild(tbody.children[posicionJuego]);
      //todo: actualizar el numero de  las filas de la tabla
      Swal.fire(
        "Juego eliminado",
        "El Juego seleccionada fue eliminada correctamente",
        "success"
      );
    }
  });
};

window.prepararJuego = (codigoJuegoeditar) => {
  //1- buscar el objeto que quiero mostrar en el form
  let juegoBuscado = listaVideoJuegos.find(
    (juego) => juego.codigo === codigoJuegoeditar
  );

  //2- mostrar el formulario con los datos

  modalFormVideojuego.show();
  codigo.value = juegoBuscado.codigo;
  nombre.value = juegoBuscado.nombre;
  precio.value = juegoBuscado.precio;
  categoria.value = juegoBuscado.categoria;
  descripcion.value = juegoBuscado.descripcion;
  imagen.value = juegoBuscado.imagen;
  imagenMayorTamanio.value = juegoBuscado.imagenMayorTamanio;
  requisitos.value = juegoBuscado.requisitos;
  desarrollador.value = juegoBuscado.desarrollador;
  plataforma.value = juegoBuscado.plataforma;

  //3- cambiar el estado de la variable crearPeliculaNueva a false
  crearJuegoNuevo = false;
};

function editarPelicula() {
  //Buscar la posicion donde esta el juego que quiero esitar;
  let posicionJuego = listaVideoJuegos.findIndex(
    (juego) => juego.codigo === codigo.value
  );

  // Validar y si esta ok   //Editar os datos seleccionados

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
    listaVideoJuegos[posicionJuego].nombre = nombre.value;
    listaVideoJuegos[posicionJuego].precio = precio.value;
    listaVideoJuegos[posicionJuego].categoria = categoria.value;
    listaVideoJuegos[posicionJuego].descripcion = descripcion.value;
    listaVideoJuegos[posicionJuego].imagen = imagen.value;
    listaVideoJuegos[posicionJuego].imagenMayorTamanio =
      imagenMayorTamanio.value;
    listaVideoJuegos[posicionJuego].requisitos = requisitos.value;
    listaVideoJuegos[posicionJuego].desarrollador = desarrollador.value;
    listaVideoJuegos[posicionJuego].plataforma = plataforma.value;
  }

  listaVideoJuegos[posicionJuego].nombre = nombre.value;

  //actualizar el local storage
  guardarEnLocalstorage();

  //actualizar la fila de la tabla que estoy modificando.
  let tbody = document.querySelector("#tablaVideoJuego");
  tbody.children[posicionJuego].children[1].innerHTML = nombre.value;
  tbody.children[posicionJuego].children[2].innerHTML = precio.value;
  tbody.children[posicionJuego].children[3].innerHTML = categoria.value;
  tbody.children[posicionJuego].children[4].innerHTML = descripcion.value;
  tbody.children[posicionJuego].children[5].innerHTML = imagen.value;
  //Limpiar Formulario luego de editar y cerrar Modal.

  limpiarFormulario();
  modalFormVideojuego.hide();
  //mostrar un swalert avisando que se editó.

  Swal.fire(
    "Juego Modificado",
    "El Juego seleccionado fue modificado exitosamente",
    "success"
  );
}
