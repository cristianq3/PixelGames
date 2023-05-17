const parametroCodigo = new URLSearchParams(window.location.search);
// console.log(parametroCodigo);
console.log(parametroCodigo.get('codigo'));
//aqui hago el read
let listaVideoJuegos =
  JSON.parse(localStorage.getItem("listaJuegos")) || [];

const juegoBuscado = listaVideoJuegos.find((juego)=> juego.codigo === parametroCodigo.get('codigo'));

let main = document.getElementById('contenedorTotal');
main.innerHTML = `
<section class="heroSection" id="contenedorHero">
<img src="/img/index/apex.jpeg" class="ImgHero" alt="Star Wars" />
</section>

<section
class="d-flex justify-content-center align-items-center row pt-sm-2 pt-md-5 pb-3"
>
<aside class="col-12 col-md-6">
  <img src="${Juego.imagen}" class="img-fluid" alt="apex" />
</aside>
<aside class="HeroPng contenedorTituloydetalle">
  <div class="">

    <p class="lead descripcionJuego w-100">
    ${Juego.descripcion}
    </p>
  </div>

  <span class="btn rounded w-25 bg-success m-2">$2999</span>
  <a href="/pages/error404.html" class="btn btn-warning"
    >Compralo ya!</a
  >
</aside>
</section>
<article>
<h2 class="text-center pb-3">Detalles:</h2>

<ul
  class="list-unstyled d-flex justify-content-evenly text-center flex-wrap"
>
  <li>
    <h5>Requerimientos:</h5>
    <p class="lead">
     ${Juego.requerimientos}
    </p>
  </li>
  <li>
    <h5>Categoria:</h5>
    <p class="lead"> ${Juego.categoria}|</p>
  </li>
  <li>
    <h5>Desarrollador:</h5>
    <p class="lead"> ${Juego.desarrollador}</p>
  </li>
  <li>
    <h5>Plataforma:</h5>
    <p class="lead">${Juego.plataforma}</p>
  </li>
</ul>
</article>`