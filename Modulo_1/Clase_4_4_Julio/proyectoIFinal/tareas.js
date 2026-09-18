function indiceValido(lista, indice) {
  return Number.isInteger(indice) && indice >= 0 && indice < lista.length;
}

function agregarTarea(lista, titulo, prioridad) {
  if (titulo.trim() === "") return false;
  lista.push({ titulo, prioridad, completada: false });
  return true;
}

function completarTarea(lista, indice) {
  if (!indiceValido(lista, indice)) return false;
  lista[indice].completada = true;
  return true;
}

function eliminarTarea(lista, indice) {
  if (!indiceValido(lista, indice)) return false;
  lista.splice(indice, 1);
  return true;
}

module.exports = { agregarTarea, completarTarea, eliminarTarea };
