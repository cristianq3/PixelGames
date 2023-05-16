let form = document.getElementById("accessLogin");
let btnIngresar = document.getElementById("btnIngresar");
let btnAdministrador = document.getElementById("btnAdministrador");
let userLogeado = JSON.parse(localStorage.getItem("userLogeado"));
let btnIngresoDelNav = document.getElementById("btnIngresoDelNav");
let btnSalirDelNav = document.getElementById("btnSalirDelNav");
let validUsers = [
  { name: "Admin", email: "admin@pixelgames.com", password: "abc123" },
];

//Manejadores de eventos
btnIngresar.addEventListener("click", function (event) {
  event.preventDefault();
  ingresar();
});
btnSalirDelNav.addEventListener("click", cambiarBoolean);

form.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    ingresar();
  }
});

function comprobarLocalstorage(userLogeado) {
  //si Esta logueado:
  if (userLogeado === true) {
    //Mostrar Boton Salir, Ocultar Ingresar
    btnSalirDelNav.className = "btn d-block";
    btnIngresoDelNav.className = "btn d-none";
    //Mostrar boton administrador en Navbar
    btnAdministrador.className = "nav-item d-block";
  } else {
    //Ocultar Administrador en el Navbar
    btnAdministrador.className = "nav-item d-none";
    btnSalirDelNav.className = "btn d-none";
  }
}

//Funcion cambiar variable si está log/desloguear

function cambiarBoolean() {
  userLogeado = false;
  localStorage.setItem("userLogeado", JSON.stringify(userLogeado));
  location.reload();
}

//Comprobar si esta logueado.

function ingresar() {
  let emailInput = document.getElementById("floatingInput");
  let passwordInput = document.getElementById("floatingPassword");

  let email = emailInput.value;
  let password = passwordInput.value;

  let validUser = validUsers.find(function (user) {
    return user.email === email && user.password === password;
  });

  if (email.trim() === "" || password.trim() === "") {
    alert("Por favor, completa todos los campos.");
  } else if (validUser) {
    form.submit();
    alert("Acceso exitoso. ¡Bienvenido, " + validUser.name + "!");
    userLogeado = true;
    localStorage.setItem("userLogeado", JSON.stringify(userLogeado));
  } else {
    alert(
      "Los datos ingresados no son válidos. Por favor, verifica tu email y contraseña."
    );
  }
}

comprobarLocalstorage(userLogeado);

// boton ingresar con display block cdo este en true la variable.

// boton salir con display none cuando la variable este en true.
