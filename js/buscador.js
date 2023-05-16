let arrayListaCards = Array.from(document.getElementsByClassName("card"));
let formularioBuscarNavbar = document.querySelector("#formularioBuscarNavbar");
let buscador = document.querySelector("#buscador");
let sectorJuegos = document.getElementById("sectorJuegos");

let sectionPrincipal = document.getElementById("sectionPrincipal");
let respaldoListadoJuegos = document.createDocumentFragment();

// agregar un evento para escuchar cuando se envía el formulario del buscador
formularioBuscarNavbar.addEventListener("submit", function (e) {
  e.preventDefault();
  let inputbuscador = buscador.value.toLowerCase();
  let descripcion, filtrar;

  while (sectorJuegos.firstChild) {
    respaldoListadoJuegos.appendChild(sectorJuegos.firstChild);
  }

  if (inputbuscador !== "") {
    //recorre el array de juegos y lo filtra por titulo y por descripción
    filtrar = arrayListaCards.filter((juego) => {
      descripcion = juego.querySelector(".card-text").innerHTML.toLowerCase();
      return descripcion.includes(inputbuscador);
    });

    mostrarBannerCarrousel(false);

    //guardo los juegos que fueron filtrados
    filtrar.forEach((juego) => {
      if (filtrar.includes(juego)) {
        sectorJuegos.append(juego);
      }
    });

    if (filtrar.length === 0) mostrarMensaje();
  } else {
    //función para traer todo el array de forma ordenada
    mostrarArrayJuegos();
    //vuelvo a mostrar el banner carrousel
    mostrarBannerCarrousel(true);
  }
});

function mostrarBannerCarrousel(show) {
  if (show) {
    document.getElementById("hero").classList.remove("d-none");
    document.getElementById("textoTitulo").innerHTML = "JUEGOS DESTACADOS";
  } else {
    document.getElementById("hero").classList.add("d-none");
    document.getElementById("textoTitulo").innerHTML =
      "RESULTADOS DE LA BÚSQUEDA:";
  }
}

function mostrarArrayJuegos() {
  arrayListadoJuegos.forEach((juego) => {
    sectorJuegos.appendChild(juego);
  });
}

// mostrar un mensaje cuando la búsqueda sea 0 juegos
function mostrarMensaje() {
  let div = document.createElement("div");

  div.innerHTML = `
              <div class="col">
                      <div class="text-bg-danger h-100">
                              <h3 class="card-title">
                              Lo lamentamos, no encontramos el juego que estas buscando.
                              </h3>
                      </div>
              </div>
      `;

  sectorJuegos.appendChild(div);
}