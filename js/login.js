const btnAdministrador = document.getElementById("btnAdministradorNavbar");

// Se crea la class User para agregar datos del administrador.

class User {
  #usuario;
  #contrasenia;

  constructor(usuario, contrasenia) {
    this.#usuario = "admin@pixelgames.com";
    this.#contrasenia = "12345678";
  }

  get usuario() {
    return this.#usuario;
  }

  set usuario(newUser) {
    this.#usuario = newUser;
  }

  get contrasenia() {
    return this.#contrasenia;
  }

  set contrasenia(newPass) {
    this.#contrasenia = newPass;
  }
}


