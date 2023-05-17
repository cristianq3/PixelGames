let listaVideoJuegos =
  JSON.parse(localStorage.getItem("listaVideoJuegos")) || [];

//dibujar columnas
listaVideoJuegos.map((juego) => {
  crearColumna(juego);
});

function crearColumna(juego) {
  let contenedorCards = document.querySelector("#contenedorCards");
  contenedorCards.innerHTML += `<article class="card col-sm-12 col-md-6 col-lg-4">
  <div class="position-relative+">
    <img
      src="${juego.imagen}"
      class="card-img-top img-fluid mt-2 img"
      alt="${juego.titulo}"
    />
    <span class="position-absolute nombreJuego"><p class=" text-cent fw-bolder text-white fs-3">${juego.nombre}</p></span>
  </div>

  <div
    class="w-100 d-flex justify-content-evenly p-2 m-1 align-items-center flex-wrap"
  >
    <span class="badge text-bg-primary mx-2">${juego.plataforma}</span>
    <span class="badge text-bg-secondary mx-2">${juego.desarrollador}</span>
    <span class="badge text-bg-success mx-2">${juego.categoria}</span>
  </div>
  <div
    class="card-body d-flex justify-content-around align-items-center"
  >
    <button type="button" class="btn btn-primary rounded-5" onclick="navegarDetalleJuego('${juego.codigo}')">Comprar</button>
    <button
      type="button"
      class="btn btn-success rounded-5 shadow-lg fw-bold"
    >
      $${juego.precio}
    </button>
  </div>
</article>`;
}

function navegarDetalleJuego(codigo){
 window.location.href = window.location.origin + '/pages/detallejuego.html?codigo='+ codigo;
}

