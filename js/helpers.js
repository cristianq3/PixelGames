function validarCantidadCaracteres(texto, min, max) {
  if (texto.length >= min && texto.length <= max) {
    console.log("dato correcto");
    return true;
  } else {
    console.log("dato erroneo");
    return false;
  }
}

export function sumarioValidacion(
  nombre,
  precio,
  categoria,
  descripcion,
  imagen,
  imagenGrande,
  requisitos,
  desarrollador,
  plataforma
) {
  let resumen = "";
  if (!validarCantidadCaracteres(nombre, 2, 100)) {
    resumen += "El titulo debe tener entre 2 y 100 caracteres";
  }
  return resumen;
}
