function validarCantidadCaracteres(texto, min, max) {
  if (texto.length >= min && texto.length <= max) {
    console.log("dato correcto");
    return true;
  } else {
    console.log("dato erroneo");
    return false;
  }
}

// function validarGenero(genero) {
//     console.log(genero);
//     if (
//       genero === 'accion' ||
//       genero === 'drama' ||
//       genero === 'comedia' ||
//       genero === 'aventura'
//     ) {
//       console.log('El género es un valor de la lista desplegable');
//       return true;
//     } else {
//       console.log('El género no es un valor de la lista desplegable');
//       return false;
//     }
//   }

function validarPrecio(precio) {
  // expresión regular
  let patron = /^\d{2,8}$/;

  ///^\d+(\.\d{1,8})?$/;

  // Comparamos el precio con el patrón utilizando el método test()
  if (patron.test(precio)) {
    console.log("la expresion regular funciona");
    return true;
  } else {
    console.log("la expresion regular fallo");
    return false;
  }
}

export function sumarioValidacion(
  nombre,
  descripcion,
  precio
  //   categoria,
  //descripcion,
  //   imagen,
  //   imagenGrande,
  //   requisitos,
  //   desarrollador,
  //   plataforma
) {
  let resumen = "";
  if (!validarCantidadCaracteres(nombre, 2, 100)) {
    resumen += "El titulo debe tener entre 2 y 100 caracteres <br>";
  }

  if (!validarCantidadCaracteres(descripcion, 2, 200)) {
    resumen += "La descripción debe tener entre 2 y 200 caracteres <br>";
  }

  if (!validarPrecio(precio)) {
    resumen +=
      "El precio debe tener entre 2 y 8 caracteres numericos y sin puntos. <br>";
  }

  return resumen;
}
