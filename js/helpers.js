function validarCantidadCaracteres(texto, min, max) {
  if (texto.length >= min && texto.length <= max) {
    console.log("dato correcto");
    return true;
  } else {
    console.log("dato erroneo");
    return false;
  }
}

function validarPrecio(precio) {
  //   // expresión regular
  let patron = /^\d{1,8}$/;

  // Comparamos el precio con el patrón utilizando el método test()
  if (patron.test(precio)) {
    console.log("la expresion regular funciona");
    return true;
  } else {
    console.log("la expresion regular fallo");
    return false;
  }
}

function validarCategoria(categoria) {
  console.log(categoria);
  if (
    categoria === "accion" ||
    categoria === "aventura" ||
    categoria === "deportivos" ||
    categoria === "estrategia" ||
    categoria === "familiar" ||
    categoria === "fantasia" ||
    categoria === "MMORPG" ||
    categoria === "simulacion" ||
    categoria === "terror"
  ) {
    console.log("El género es un valor de la lista desplegable");
    return true;
  } else {
    console.log("El género no es un valor de la lista desplegable");
    return false;
  }
}

function validarDescripcion(descripcion, min, max) {
  if (descripcion.length >= min && descripcion.length <= max) {
    console.log("dato correcto");
    return true;
  } else {
    console.log("dato erroneo");
    return false;
  }
}

function validarURLImagen(imagen) {
  // expresión regular
  let patron = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)$/;

  if (patron.test(imagen)) {
    console.log("la expresion regular de imagen funciona");
    return true;
  } else {
    console.log("la expresion regular de imagen fallo");
    return false;
  }
}

function validarURLImagenMayorTamanio(imagenMayorTamanio) {
  // expresión regular
  let patron = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)$/;

  if (patron.test(imagenMayorTamanio)) {
    console.log("la expresion regular de imagen funciona");
    return true;
  } else {
    console.log("la expresion regular de imagen fallo");
    return false;
  }
}

function validarRequisitos(requisitos, min, max) {
  if (requisitos.length >= min && requisitos.length <= max) {
    console.log("dato correcto");
    return true;
  } else {
    console.log("dato erroneo");
    return false;
  }
}

function validarDesarrollador(desarrollador, min, max) {
  if (desarrollador.length >= min && desarrollador.length <= max) {
    console.log("dato correcto");
    return true;
  } else {
    console.log("dato erroneo");
    return false;
  }
}

function validarPlataforma(plataforma) {
  console.log(plataforma);
  if (
    plataforma === "PC" ||
    plataforma === "playstation5" ||
    plataforma === "vboxSeriesX" ||
    plataforma === "nintendoSwitch" ||
    plataforma === "moviles"
  ) {
    console.log("La plataforma es un valor de la lista desplegable");
    return true;
  } else {
    console.log("La plataforma no es un valor de la lista desplegable");
    return false;
  }
}

export function sumarioValidacion(
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
  let resumen = "";
  if (!validarCantidadCaracteres(nombre, 2, 100)) {
    resumen += "El titulo debe tener entre 2 y 100 caracteres. <br>";
  }

  if (!validarPrecio(precio)) {
    resumen +=
      "El precio debe tener entre 2 y 8 caracteres numericos y sin puntos. <br>";
  }

  if (!validarCategoria(categoria, 2, 60)) {
    resumen += "Debe seleccionar una de las categorías sugeridas en campo Categoría. <br>";
  }

  if (!validarDescripcion(descripcion, 2, 500)) {
    resumen += "La descripción debe tener entre 2 y 500 caracteres. <br>";
  }

  if (!validarURLImagen(imagen)) {
    resumen +=
      "La imagen de la pelicula debe ser una URL valida terminada en (.jpg, .png, .gif). <br>";
  }

  if (!validarURLImagenMayorTamanio(imagenMayorTamanio)) {
    resumen +=
      "La imagen de mayor tamaño de la pelicula debe ser una URL valida terminada en (.jpg, .png, .gif). <br>";
  }

  if (!validarRequisitos(requisitos, 2, 500)) {
    resumen += "Los requisitos deben contener entre 2 y 500 caracteres. <br>";
  }

  if (!validarDesarrollador(desarrollador, 2, 60)) {
    resumen +=
      "El campo desarrollador debe contener entre 2 y 60 caracteres. <br>";
  }

  if (!validarPlataforma(plataforma, 2, 60)) {
    resumen +=
    "Debe seleccionar una de las categorías sugeridas en el campo Plataforma. <br>";
  }

  return resumen;
}
