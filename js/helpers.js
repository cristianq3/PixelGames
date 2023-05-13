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
export function sumarioValidacion(
  nombre,
  precio,
  categoria,
  descripcion,
  imagen,
  imagenMayorTamanio
) {
  let resumen = "";
  if (!validarCantidadCaracteres(nombre, 2, 100)) {
    resumen += "El titulo debe tener entre 2 y 100 caracteres. <br>";
  }

  if (!validarPrecio(precio)) {
    resumen +=
      "El precio debe tener entre 2 y 8 caracteres numericos y sin puntos. <br>";
  }

  if (!validarCategoria(categoria)) {
    resumen += "Debe seleccionar una de las categorías sugeridas. <br>";
  }

  if (!validarCantidadCaracteres(descripcion, 2, 200)) {
    resumen += "La descripción debe tener entre 2 y 200 caracteres. <br>";
  }

  if (!validarURLImagen(imagen)) {
    resumen +=
      "La imagen de la pelicula debe ser una URL valida terminada en (.jpg, .png, .gif). <br>";
  }

  if (!validarURLImagenMayorTamanio(imagenMayorTamanio)) {
    resumen +=
      "La imagen de mayor tamaño de la pelicula debe ser una URL valida terminada en (.jpg, .png, .gif). <br>";
  }

  return resumen;
}
