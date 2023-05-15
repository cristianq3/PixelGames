// Se crea objeto User para agregar datos del administrador.
const UsuarioAdmin = {
  usuario: "admin@pixelgames.com",
  contrasenia: "Admin123",
};


//Boton Logeo Traer el Form
let formIngresar = document.getElementById("ingresar");

//Eventos
btnIngresar.addEventListener("submit", prepararFormulario);

function prepararFormulario(e) {
  e.preventDefault();
  Ingresar();
 
}

function Ingresar() {
  let usuarioIngresado = document.getElementById("usuario").value;
  let contraseniaIngresada = document.getElementById("contrasenia").value;

  console.log(usuarioIngresado, contraseniaIngresada);
}
