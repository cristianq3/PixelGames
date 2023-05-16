let form = document.getElementById("accessLogin");
let btnIngresar = document.getElementById("btnIngresar");

let validUsers = [
  { name: "Usuario1", email: "usuario1@pixelgames.com", password: "1234" },
  { name: "admin", email: "admin@pixelgames.com", password: "abc123" },
];

btnIngresar.addEventListener("click", function(event) {
  event.preventDefault();
  ingresar();
});

form.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    ingresar();
  }
});

function ingresar() {
  let emailInput = document.getElementById("floatingInput");
  let passwordInput = document.getElementById("floatingPassword");

  let email = emailInput.value;
  let password = passwordInput.value;

  let validUser = validUsers.find(function(user) {
    return user.email === email && user.password === password;
  });

  if (email.trim() === "" || password.trim() === "") {
    alert("Por favor, completa todos los campos.");
  } else if (validUser) {
    form.submit();
    alert("Acceso exitoso. ¡Bienvenido, " + validUser.name + "!");
  } else {
    alert("Los datos ingresados no son válidos. Por favor, verifica tu email y contraseña.");
  }
}

