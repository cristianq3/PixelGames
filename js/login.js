// Se crea objeto User para agregar datos del administrador.
const UsuarioAdmin = {
  usuario: "admin@pixelgames.com",
  contrasenia: "Admin123",
};
//boton administrador para poner D-none
const btnAdministrador = document.getElementById("btnAdministradorNavbar");
//Form de Login

let btnIngresar = document.getElementById("btnIngresar");

//Eventos
btnIngresar.addEventListener("submit", function (e) {
  e.preventDefault();
  logearUsuario();
});

function logearUsuario() {
  //Traer los Valores de user y contraseña.
  let usuarioIngresado = document.getElementById("usuario").value;
  let contraseniaIngresada = document.getElementById("contrasenia").value;
  //Validar si son datos correctos.
  //Comparar si son los mismos del admin
  //

  //mostrar mensaje de logueado con exito. y
  //mostrar btnAdministrador () sacar class d-none)
  //cambiar el InnerHtml del boton con id btnIngresoModal cambiar a Salir
  //cerrar Modal
}

console.log(UsuarioAdmin.usuario, UsuarioAdmin.contrasenia);
