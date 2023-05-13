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


export function sumarioValidacion(
  nombre,
//   precio,
//   categoria,
//   descripcion,
//   imagen,
//   imagenGrande,
//   requisitos,
//   desarrollador,
//   plataforma
) {
  let resumen = "";
  if (!validarCantidadCaracteres(nombre, 2, 100)) {
    resumen += "El titulo debe tener entre 2 y 100 caracteres";
  }
  return resumen;
}


