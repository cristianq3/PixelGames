class Juego {
  #codigo;
  #nombre;
  #descripcion;
  #imagen;
  #imagenMayorTamanio;
  #genero;
  #anio;
  #plataforma;

  constructor(
    nombre,
    descripcion,
    imagen,
    imagenMayorTamanio,
    genero,
    anio,
    plataforma
  ) {
    this.#codigo = 0;
    this.#nombre = nombre;
    this.#descripcion = descripcion;
    this.#imagen = imagen;
    this.#imagenMayorTamanio = imagenMayorTamanio;
    this.#genero = genero;
    this.#anio = anio;
    this.#plataforma = plataforma;
  }

  // Métodos para acceder a las propiedades privadas (getters)
  get nombre() {
    return this.#nombre;
  }

  get descripcion() {
    return this.#descripcion;
  }

  get imagen() {
    return this.#imagen;
  }

  get imagenMayorTamanio() {
    return this.#imagenMayorTamanio;
  }

  get genero() {
    return this.#genero;
  }

  get anio() {
    return this.#anio;
  }

  get plataforma() {
    return this.#plataforma;
  }

  // Métodos para modificar las propiedades privadas (setters)
  set nombre(nombre) {
    this.#nombre = nombre;
  }

  set descripcion(descripcion) {
    this.#descripcion = descripcion;
  }

  set imagen(imagen) {
    this.#imagen = imagen;
  }

  set imagenMayorTamanio(imagenMayorTamanio) {
    this.#imagenMayorTamanio = imagenMayorTamanio;
  }

  set genero(genero) {
    this.#genero = genero;
  }

  set anio(anio) {
    this.#anio = anio;
  }

  set plataforma(plataforma) {
    this.#plataforma = plataforma;
  }
}

// Ejemplo de uso de la clase Juego
const juego = new Juego(
  "Nombre del juego",
  "Descripción del juego",
  "ruta-imagen.png",
  "ruta-imagen-grande.png",
  "Género del juego",
  2023,
  "Plataforma del juego"
);

console.log(juego.nombre); // "Nombre del juego"
console.log(juego.descripcion); // "Descripción del juego"
console.log(juego.imagen); // "ruta-imagen.png"
console.log(juego.imagenMayorTamanio); // "ruta-imagen-grande.png"
console.log(juego.genero); // "Género del juego"
console.log(juego.anio); // 2023
console.log(juego.plataforma); // "Plataforma del juego"
