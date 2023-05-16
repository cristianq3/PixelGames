
const parametroCodigo = new URLSearchParams(window.location.search);
// console.log(parametroCodigo);
console.log(parametroCodigo.get('codigo'));
//aqui hago el read
let listaJuegos =
  JSON.parse(localStorage.getItem("listaJuegos")) || [];

const juegoBuscado = listaJuegos.find((juego)=> juego.codigo === parametroCodigo.get('codigo'));

let section = document.getElementById('detallesArriba');
section.innerHTML = `
<img
src="${juegoBuscado.imagenMayorTamanio}"
class="ImgHero"
alt=""
/>

<aside class="position-absolute HeroPng contenedorTituloydetalle">
<div>
  <img src="${juegoBuscado.imagenMayorTamanio}" class="TituloPng" alt="">

  <p class="lead descripcionJuego">
  ${juegoBuscado.descripcion}
  </p>
</div>

<a href="/pages/error404.html" class="btn btn-warning"
  >Compralo ya!</a
>
</aside>
`


let section = document.getElementById('seccionDetalle');
section.innerHTML = `
<div class="row">
<div class="col-12 col-md-6">
  <img
   src="${juegoBuscado.imagen}"
   class="img-fluid rounded-start"
   alt=""
  />
</div>
<div
  class="col-12 col-md-6 d-flex justify-content-center align-items-center flex-column"
>
  <h1 class="display-3">${juegoBuscado.nombre}</h1>
  <p class="lead text-center">
  ${juegoBuscado.descripcion}
  </p>
  <p class="lead text-center">Categoria: ${juegoBuscado.categoria}</p>
  <p class="lead text-center">Precio: ${juegoBuscado.precio}</p>
  <p class="lead text-center">Desarrollador: ${juegoBuscado.desarrollador}</p>
</div>
<div
  class="col-12 col-md-6 d-flex justify-content-center align-items-center flex-column"
>
  <p class="lead text-center">
    Plataforma: ${juegoBuscado.plataforma}
  </p>
</div>
<div class="col-12 col-md-6">
  <img
    src="${juegoBuscado.imagen}"
    alt=""
    class="img-fluid"
  />
</div>
</div>`