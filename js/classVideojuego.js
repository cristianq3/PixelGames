export default class Juego {
  #codigo;
  #nombre;
  #precio;
  #categoria;
  #descripcion;
  #imagen;
  #imagenMayorTamanio;
  #requisitos;
  #desarrollador;
  #plataforma;

  constructor(
    codigo = uuidv4(),
    nombre,
    precio,
    categoria,
    descripcion,
    imagen,
    imagenMayorTamanio,
    requisitos,
    desarrollador,
    plataforma
  ) {
    this.#codigo = codigo;
    this.#nombre = nombre;
    this.#precio = precio;
    this.#categoria = categoria;
    this.#descripcion = descripcion;
    this.#imagen = imagen;
    this.#imagenMayorTamanio = imagenMayorTamanio;
    this.#requisitos = requisitos;
    this.#desarrollador = desarrollador;
    this.#plataforma = plataforma;
  }

  // Métodos para acceder a las propiedades privadas (getters)

  get codigo() {
    return this.#codigo;
  }

  get nombre() {
    return this.#nombre;
  }

  get precio() {
    return this.#precio;
  }

  get categoria() {
    return this.#categoria;
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

  get requisitos() {
    return this.#requisitos;
  }

  get desarrollador() {
    return this.#desarrollador;
  }

  get plataforma() {
    return this.#plataforma;
  }

  // Métodos para modificar las propiedades privadas (setters)
  set codigo(codigo) {
    this.#codigo = codigo;
  }

  set nombre(nombre) {
    this.#nombre = nombre;
  }

  set precio(precio) {
    this.#precio = precio;
  }

  set categoria(categoria) {
    this.#categoria = categoria;
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

  set requisitos(requisitos) {
    this.#requisitos = requisitos;
  }

  set desarrollador(desarrollador) {
    this.#desarrollador = desarrollador;
  }

  set plataforma(plataforma) {
    this.#plataforma = plataforma;
  }
  toJSON() {
    return {
      codigo: this.codigo,
      nombre: this.nombre,
      precio: this.precio,
      categoria: this.categoria,
      descripcion: this.descripcion,
      imagen: this.imagen,
      imagenMayorTamanio: this.imagenMayorTamanio,
      requisitos: this.requisitos,
      desarrollador: this.desarrollador,
      plataforma: this.plataforma,
    };
  }
}
