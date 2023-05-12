function validarCantidadCaracteres(texto, min, max) {
  if (texto.length >= min && texto.length <= max) {
    console.log("dato correcto");
    return true;
  } else {
    console.log("dato erroneo");
    return false;
  }
}

export function sumarioValidacion (titulo,precio, categoria,descripcion, imagen, imagenGrande, requisitos, desarrollador, plataforma){
let resumen= '';
if (!validarCantidadCaracteres(titulo, 2, 100)){
    resumen+= 'El titulo debe tener entre 2 y 100 caracteres.'
}
}