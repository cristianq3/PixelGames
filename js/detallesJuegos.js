const parametroCodigo = new URLSearchParams(window.location.search);
// console.log(parametroCodigo);
console.log(parametroCodigo.get("codigo"));
//aqui hago el read
let listaVideoJuegos =
  JSON.parse(localStorage.getItem("listaVideoJuegos")) || [];


const juego = listaVideoJuegos.find(
  (juego) => juego.codigo === parametroCodigo.get("codigo")
);

console.log(juego)
let main = document.getElementById("contenedorTotal");

main.innerHTML = `
<section class="heroSection" id="contenedorHero  position-relative">
<img src="${juego.imagenMayorTamanio}" class="ImgHero" alt="${juego.nombre}" />

<h1 class="position-absolute textoHero">${juego.nombre}</h1>

</section>
<section
class="d-flex justify-content-evenly align-items-center row pt-sm-2 pt-md-5 pb-3"
>

<aside class="HeroPng contenedorTituloydetalle vidrio p-1">
  <div class="">

    <p class="lead descripcionJuego w-100">
    ${juego.descripcion}
    </p>
  </div>

  <span class="btn rounded w-25 bg-success m-2">$2999</span>
  <a href="/pages/error404.html" class="btn btn-warning"
    >Compralo ya!</a
  >
</aside>
<aside class="col-12 col-md-6 ">
  <img src="${juego.imagen}" class="img-fluid shadow-lg rounded-4 imgCard" alt="${juego.nombre}" />
</aside>
</section>
<article>
<h2 class="text-center pb-3">Detalles:</h2>

<ul
  class="list-unstyled d-flex justify-content-evenly text-center flex-wrap row"
>
  <li class="col-sm-12 col-md-6 col-lg-3">
    <h5 class="">Requerimientos:</h5>
    <p class="lead">
     ${juego.requisitos}
    </p>
  </li>
  <li class="col-sm-12 col-md-6 col-lg-3">
    <h5>Categoria:</h5>
    <p class="lead"> ${juego.categoria}|</p>
  </li>
  <li class="col-sm-12 col-md-6 col-lg-3">
    <h5>Desarrollador:</h5>
    <p class="lead"> ${juego.desarrollador}</p>
  </li>
  <li class="col-sm-12 col-md-6 col-lg-3">
    <h5>Plataforma:</h5>
    <p class="lead">${juego.plataforma}</p>
  </li>
</ul>
</article>`;
