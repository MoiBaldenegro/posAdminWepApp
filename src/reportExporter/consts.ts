/////////////////////////////
// operatingPeriod report////
/////////////////////////////

export const SELLTYPES_TABLE_POSITION = 90;
export const PAYMENTS_TABLE_POSITION = 152;
export const CATEGORIES_TABLE_POSITION = 225;
export const SUBCATEGORIES_TABLE_POSITION = 20;

const data = {
  sales: [
    { type: 'Efectivo', quantity: '$000,000,000.0.' },
    { type: 'Tarjeta de débito', quantity: '$000,000,000.0.' },
    { type: 'Tarjeta de crédito', quantity: '$000,000,000.0.' },
    { type: 'Transferencia', quantity: '$000,000,000.0.' },
    { type: 'Plataformas', quantity: '$000,000,000.0.' },
  ],

  selltypesSells: [
    { type: 'Restaurante', quantity: '$000,000,000.0.' },
    { type: 'Para llevar', quantity: '$000,000,000.0.' },
    { type: 'Telefoníco', quantity: '$000,000,000.0.' },
    { type: 'Rappi', quantity: '$000,000,000.0.' },
  ],

  categoriesProducts: [
    { type: '01 Bebidas', quantity: '$000,000,000.0.' },
    { type: '02 Alimentos', quantity: '$000,000,000.0.' },
    { type: '03 Postres', quantity: '$000,000,000.0.' },
    { type: '04 Complementos', quantity: '$000,000,000.0.' },
  ],

  subcategoriesProducts: [
    { type: '0101 Aguas frescas', quantity: '$000,000,000.0.' },
    { type: '0102 Refrescos', quantity: '$000,000,000.0.' },
    { type: '0103 Preparados sin alcohol', quantity: '$000,000,000.0.' },
    { type: '0104 Cervezas', quantity: '$000,000,000.0.' },
    { type: '0105 Preparados con alcohol', quantity: '$000,000,000.0.' },
    { type: '0201 Media orden de carne', quantity: '$000,000,000.0.' },
    { type: '0202 Media orden de especialidad', quantity: '$000,000,000.0.' },
    { type: '0203 Orden completa de carne', quantity: '$000,000,000.0.' },
    {
      type: '0204 Orden completa de especialidad',
      quantity: '$000,000,000.0.',
    },
    { type: '0205 Volcanes', quantity: '$000,000,000.0.' },
    { type: '0206 Gringas', quantity: '$000,000,000.0.' },
    { type: '0207 Quesos fundidos', quantity: '$000,000,000.0.' },
    { type: '0208 Tacos', quantity: '$000,000,000.0.' },
    { type: '0301 Postres', quantity: '$000,000,000.0.' },
    { type: '0401 Extras', quantity: '$000,000,000.0.' },
    { type: '0402 Salsas', quantity: '$000,000,000.0.' }, //////
    ////////////////////////////
    { type: '0101 Aguas frescas', quantity: '$000,000,000.0.' },
    { type: '0102 Refrescos', quantity: '$000,000,000.0.' },
    { type: '0103 Preparados sin alcohol', quantity: '$000,000,000.0.' },
    { type: '0104 Cervezas', quantity: '$000,000,000.0.' },
    { type: '0105 Preparados con alcohol', quantity: '$000,000,000.0.' },
    { type: '0201 Media orden de carne', quantity: '$000,000,000.0.' },
    { type: '0202 Media orden de especialidad', quantity: '$000,000,000.0.' },
    { type: '0203 Orden completa de carne', quantity: '$000,000,000.0.' },
    {
      type: '0204 Orden completa de especialidad',
      quantity: '$000,000,000.0.',
    },
    { type: '0205 Volcanes', quantity: '$000,000,000.0.' },
    { type: '0206 Gringas', quantity: '$000,000,000.0.' },
    { type: '0207 Quesos fundidos', quantity: '$000,000,000.0.' },
    { type: '0208 Tacos', quantity: '$000,000,000.0.' },
    { type: '0301 Postres', quantity: '$000,000,000.0.' },
    { type: '0401 Extras', quantity: '$000,000,000.0.' },
    { type: '0402 Salsas', quantity: '$000,000,000.0.' },
    { type: '0101 Aguas frescas', quantity: '$000,000,000.0.' },
    { type: '0102 Refrescos', quantity: '$000,000,000.0.' },
    { type: '0103 Preparados sin alcohol', quantity: '$000,000,000.0.' },
    { type: '0104 Cervezas', quantity: '$000,000,000.0.' },
    { type: '0105 Preparados con alcohol', quantity: '$000,000,000.0.' },
    { type: '0201 Media orden de carne', quantity: '$000,000,000.0.' },
    { type: '0202 Media orden de especialidad', quantity: '$000,000,000.0.' },
    { type: '0203 Orden completa de carne', quantity: '$000,000,000.0.' },
    {
      type: '0204 Orden completa de especialidad',
      quantity: '$000,000,000.0.',
    },
    { type: '0205 Volcanes', quantity: '$000,000,000.0.' },
    { type: '0206 Gringas', quantity: '$000,000,000.0.' },
    { type: '0207 Quesos fundidos', quantity: '$000,000,000.0.' },
    { type: '0208 Tacos', quantity: '$000,000,000.0.' },
    { type: '0301 Postres', quantity: '$000,000,000.0.' },
    { type: '0401 Extras', quantity: '$000,000,000.0.' },
    { type: '0402 Salsas', quantity: '$000,000,000.0.' },
  ],
};
// Preparar los datos para la tabla
const paymentsColumn = ['Tipo', 'Cantidad'];
const sellTypesColumn = ['Tipo', 'Cantidad'];
const categoriesProductsColumn = ['Tipo', 'Cantidad'];
const subcategoriesProductsColumn = ['Tipo', 'Cantidad'];
const tableRows: (string | number)[][] = [];
const sellTypesRows: (string | number)[][] = [];
const categoriesProductsRows: (string | number)[][] = [];
const subcategoriesProductsRows: (string | number)[][] = [];

data.sales.forEach((sale) => {
  const saleData = [sale.type, sale.quantity];
  tableRows.push(saleData);
});
data.selltypesSells.forEach((sellType) => {
  const sellTypeData = [sellType.type, sellType.quantity];
  sellTypesRows.push(sellTypeData);
});

data.categoriesProducts.forEach((category) => {
  const categoryData = [category.type, category.quantity];
  categoriesProductsRows.push(categoryData);
});

data.subcategoriesProducts.forEach((subcategory) => {
  const subcategoryData = [subcategory.type, subcategory.quantity];
  subcategoriesProductsRows.push(subcategoryData);
});

const stylesConfigs = {
  styles: {
    fontSize: 12, // Cambia el tamaño de la fuente de la tabla
    cellPadding: 2, // Espacio dentro de las celdas
    cellWidth: 'auto',
    valign: 'middle', // Alineación vertical
    halign: 'left', // Alineación horizontal
    lineColor: [0, 0, 0], // Color del borde de la celda
  },

  // Estilos para el encabezado
  headStyles: {
    fillColor: [153, 0, 15],
    textColor: [255, 255, 255],
    fontStyle: 'bold',
  },

  // Estilos para el cuerpo
  bodyStyles: {
    fillColor: [245, 245, 245],
  },

  // Estilos para filas alternas
  alternateRowStyles: {
    fillColor: [220, 220, 220],
  },

  columnStyles: {
    fillColor: [240, 240, 240],
    borderWidth: 1,
  },
};

// payments Section
export const PAYMENTS_TABLE = {
  head: [paymentsColumn],
  body: tableRows,
  startY: PAYMENTS_TABLE_POSITION, // Posición inicial de la tabla
  styles: stylesConfigs.styles,
  headStyles: stylesConfigs.headStyles,
  bodyStyles: stylesConfigs.bodyStyles,
  alternateRowStyles: stylesConfigs.alternateRowStyles,
  columnStyles: stylesConfigs.columnStyles,
};

// sellTypes Section
export const SELLTYPES_TABLE = {
  head: [sellTypesColumn],
  body: sellTypesRows,
  startY: SELLTYPES_TABLE_POSITION, // Posición inicial de la tabla
  styles: stylesConfigs.styles,
  headStyles: stylesConfigs.headStyles,
  bodyStyles: stylesConfigs.bodyStyles,
  alternateRowStyles: stylesConfigs.alternateRowStyles,
  columnStyles: stylesConfigs.columnStyles,
};

// categoriesProducts Section
export const CATEGORIES_TABLE = {
  head: [categoriesProductsColumn],
  body: categoriesProductsRows,
  startY: CATEGORIES_TABLE_POSITION, // Posición inicial de la tabl
  styles: stylesConfigs.styles,
  headStyles: stylesConfigs.headStyles,
  bodyStyles: stylesConfigs.bodyStyles,
  alternateRowStyles: stylesConfigs.alternateRowStyles,
  columnStyles: stylesConfigs.columnStyles,
};

// subcategoriesProducts Section
export const SUBCATEGORIES_TABLE = {
  head: [subcategoriesProductsColumn],
  body: subcategoriesProductsRows,
  startY: SUBCATEGORIES_TABLE_POSITION, // Posición inicial de la tabla
  styles: stylesConfigs.styles,
  headStyles: stylesConfigs.headStyles,
  bodyStyles: stylesConfigs.bodyStyles,
  alternateRowStyles: stylesConfigs.alternateRowStyles,
  columnStyles: stylesConfigs.columnStyles,
};
