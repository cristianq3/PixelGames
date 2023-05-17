function validarCantidadCaracteres(texto, min, max) {
  if (texto.length >= min && texto.length <= max) {
    return true;
  } else {
    return false;
  }
}

function validarPrecio(precio) {
  //   // expresión regular
  let patron = /^\d{1,8}$/;

  // Comparamos el precio con el patrón utilizando el método test()
  if (patron.test(precio)) {
    return true;
  } else {
    return false;
  }
}

function validarCategoria(categoria) {
  if (
    categoria === "accion" ||
    categoria === "aventura" ||
    categoria === "deportivos" ||
    categoria === "estrategia" ||
    categoria === "familiar" ||
    categoria === "fantasia" ||
    categoria === "mmorpg" ||
    categoria === "simulacion" ||
    categoria === "terror"
  ) {
    return true;
  } else {
    return false;
  }
}

function validarDescripcion(descripcion, min, max) {
  if (descripcion.length >= min && descripcion.length <= max) {
    return true;
  } else {
    return false;
  }
}

function validarURLImagen(imagen) {
  // expresión regular
  let patron = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)$/;

  if (patron.test(imagen)) {
    return true;
  } else {
    return false;
  }
}

function validarURLImagenMayorTamanio(imagenMayorTamanio) {
  // expresión regular
  let patron = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)$/;

  if (patron.test(imagenMayorTamanio)) {
    return true;
  } else {
    return false;
  }
}

function validarRequisitos(requisitos, min, max) {
  if (requisitos.length >= min && requisitos.length <= max) {
    return true;
  } else {
    return false;
  }
}

function validarDesarrollador(desarrollador, min, max) {
  if (desarrollador.length >= min && desarrollador.length <= max) {
    return true;
  } else {
    return false;
  }
}

function validarPlataforma(plataforma) {
  if (
    plataforma === "pc" ||
    plataforma === "playstation5" ||
    plataforma === "xboxseriesx" ||
    plataforma === "nintendoswitch" ||
    plataforma === "moviles"
  ) {
    return true;
  } else {
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
    resumen +=
      "Debe seleccionar una de las categorías sugeridas en campo Categoría. <br>";
  }

  if (!validarDescripcion(descripcion, 2, 500)) {
    resumen += "La descripción debe tener entre 2 y 500 caracteres. <br>";
  }

  if (!validarURLImagen(imagen)) {
    resumen +=
      "La imagen del videojuego debe ser una URL valida terminada en (.jpg, .png, .gif). <br>";
  }

  if (!validarURLImagenMayorTamanio(imagenMayorTamanio)) {
    resumen +=
      "La imagen de mayor tamaño del videojuego debe ser una URL valida terminada en (.jpg, .png, .gif). <br>";
  }

  if (!validarRequisitos(requisitos, 2, 500)) {
    resumen += "Los requisitos deben contener entre 2 y 500 caracteres. <br>";
  }

  if (!validarDesarrollador(desarrollador, 2, 60)) {
    resumen +=
      "El campo desarrollador debe contener entre 2 y 60 caracteres. <br>";
  }

  if (!validarPlataforma(plataforma, 2, 60)) {
    resumen += "Debe seleccionar una de las plataformas sugeridas. <br>";
  }

  return resumen;
}
