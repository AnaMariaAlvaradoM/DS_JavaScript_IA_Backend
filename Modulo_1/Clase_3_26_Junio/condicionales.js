//! Esto es un comentario 
//! If básico
// const prioridad = 5;

// if (prioridad > 3) {
//   console.log("Esta tarea es URGENTE");
// }

//! If con else 
// const prioridad = 1;

// if (prioridad > 3) {
//   console.log("Esta tarea es URGENTE");
// } else {
//     console.log("Esta tarea es normal");
// }

//! If con niveles
const prioridad = 4;

if (prioridad >= 5) {
  console.log("crítica");
} else if (prioridad >= 3) {
  console.log("alta");
} else{
  console.log("baja");
}


//! siempre busca el true 
const mensaje = "      ";

if (mensaje) {
  console.log("La tarea tiene título");
} else {
  console.log("Falta el título");   // ← entra aquí: "" es falsy
}

