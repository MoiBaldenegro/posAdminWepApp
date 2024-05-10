export function toggleStatus(state: any[], object: any): any[] {
  const newValue = object.status;
  const objectId = object._id;
  // Función recursiva para buscar el objeto por su _id
  function findAndToggleStatus(categories: any[]): boolean {
    for (let i = 0; i < categories.length; i++) {
      const category = categories[i];

      if (category._id === objectId) {
        // Encontramos el objeto, actualizamos el valor de la propiedad status
        category.status = newValue;
        return true;
      }

      // Si la categoría tiene subcategorías, llamamos recursivamente a la función
      if (category.subCategories && category.subCategories.length > 0) {
        const subCategoryUpdated = findAndToggleStatus(category.subCategories);
        if (subCategoryUpdated) {
          return true;
        }
      }
    }

    return false;
  }

  // Iniciamos la búsqueda recursiva en el estado
  const statusToggle = findAndToggleStatus(state);

  if (!statusToggle) {
    console.error('El objeto no se encuentra en el estado.');
  }

  // Devolvemos una nueva copia del estado con el objeto modificado o el estado original si no se encuentra el objeto
  return [...state];
}
