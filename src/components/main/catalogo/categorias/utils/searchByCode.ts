expport function buscarPorCode(objeto, codeBuscado) {
  // Verificar si el objeto actual tiene el código buscado
  if (objeto.code === codeBuscado) {
    return objeto;
  }

  // Verificar si el objeto actual tiene subcategorías
  if (objeto.subCategories && objeto.subCategories.length > 0) {
    // Iterar sobre las subcategorías de forma recursiva
    for (const subCategoria of objeto.subCategories) {
      const resultado = buscarPorCode(subCategoria, codeBuscado);
      // Si se encuentra el resultado en la subcategoría, retornar el resultado
      if (resultado) {
        return resultado;
      }
    }
  }

  // Si no se encuentra en el objeto actual ni en sus subcategorías, retornar null
  return null;
}

// Ejemplo de uso
const codigoBuscado = '01-01-01-01';
const resultado = buscarPorCode(tuArray, codigoBuscado);

if (resultado) {
  console.log('Objeto encontrado:', resultado);
} else {
  console.log('Objeto no encontrado');
}
