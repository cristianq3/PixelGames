import Juego from "./classVideojuego.js";

let formularioAdminVideoJuego = document.getElementById("formVideoJuego");

//Manejador de Eventos
formularioAdminVideoJuego.addEventListener("submit", prepararFormulario);

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
console.log(juego.precio); // "Precio del juego"
console.log(juego.categoria); // "Categoría del juego"
console.log(juego.descripcion); // "Descripción del juego"
console.log(juego.imagen); // "ruta-imagen.png"
console.log(juego.imagenMayorTamanio); // "ruta-imagen-grande.png"
console.log(juego.requisitos); // "Requisitos del juego"
console.log(juego.desarrollador); // "Nintendo"
console.log(juego.plataforma); // "Plataforma del juego"

//parametros de la funcion
function prepararFormulario(e) {
  e.preventDefault();
  console.log("se esta ejecutando la creacion del videoJuego");

  const juego1 = new Juego(
    "Star Wars Jedi: Survivor",
    9000,
    "accion y aventuras",
    "La historia de Cal Kestis continúa en Star Wars Jedi: Survivor™, un juego de acción y aventuras en tercera persona desarrollado por Respawn Entertainment en colaboración con Lucasfilm Games. Este título para un jugador centrado en la historia retoma la aventura 5 años después de los acontecimientos de Star Wars Jedi: Fallen Order™ y sigue la lucha cada vez más desesperada de Cal mientras la galaxia se hunde en la oscuridad. Empujado al exilio por culpa del Imperio, deberá guardarse de nuevas y viejas amenazas. Como uno de los últimos Caballeros Jedi, debe hacer frente a los tiempos más oscuros de la galaxia, pero ¿hasta dónde está dispuesto a llegar para protegerse a sí mismo, a su tripulación y al legado de la Orden Jedi?",
    "Requisitos mínimos:Sistema operativo: Windows 10 de 64 bits. 02.	RAM: 8 GB. 03.	Características de CPU:  4 núcleos / 8 subprocesos. 04.	Procesador* (AMD):  Ryzen 5 1400. 05.	Tarjeta grafica** (AMD):  Radeon RX 580. 06.	Características de GPU:  DX12, VRAM de 8 GB  07.	Almacenamiento:  155 GB. 08.*Procesador (alternativo): Intel Core i7-7700. 09.	**Tarjeta gráfica (alternativa): Nvidia GTX 1070",
    "Respawn Entertainment",
    "Plataforma"
  );
  console.log(juego1); // "Star Wars Jedi: Survivor"
}
