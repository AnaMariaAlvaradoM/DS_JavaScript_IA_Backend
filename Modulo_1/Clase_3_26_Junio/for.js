//! Ciclo for 

for (let i = 1; i < 3; i++) {
  console.log("Vuelta número " + i);
}

//! for...of
// const tareas = ["Pagar factura", "Regar plantas", "Llamar cliente"];

// for (const tarea of tareas) {
//   console.log("Tarea: " + tarea);
// }


//! Todo combinado 

const tareas = [
  { titulo: "Pagar factura", prioridad: 5 },
  { titulo: "Regar plantas", prioridad: 2 },
  { titulo: "Llamar cliente", prioridad: 4 }
];

for (const tarea of tareas) {
  if (tarea.prioridad > 3) {
    console.log(tarea.titulo + " → URGENTE");
  } else {
    console.log(tarea.titulo + " → normal");
  }
}