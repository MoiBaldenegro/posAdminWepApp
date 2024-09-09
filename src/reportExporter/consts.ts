/////////////////////////////
// operatingPeriod report////
/////////////////////////////
import { data } from './data.ts/data';
import { transactionResumeData } from './data.ts/transactionResumeData';

export const SELLTYPES_TABLE_POSITION = 90;
export const PAYMENTS_TABLE_POSITION = 152;
export const CATEGORIES_TABLE_POSITION = 225;
export const SUBCATEGORIES_TABLE_POSITION = 20;
export const PRODUCTS_TABLE_POSITION = 20;
export const RESTAURANT_TRANSACTIONS_POSITION = 45;
export const PARALLEVAR_TRANSACTIONS_POSITION = 105;
export const TELEFONICO_TRANSACTIONS_POSITION = 140;
export const RAPPI_TRANSACTIONS_POSITION = 175;
export const DISCOUNTS_POSITION = 210;
export const COURTESIES_POSITION = 20;
export const CANCELLATIONS_POSITION = 100;

type rows = (string | number)[][];

// Preparar los datos para la tabla
const paymentsColumn = ['Tipo', 'Cantidad'];
const sellTypesColumn = ['Tipo', 'Cantidad'];
const categoriesProductsColumn = ['Tipo', 'Cantidad'];
const subcategoriesProductsColumn = ['Tipo', 'Cantidad'];
const productsColumn = ['Tipo', 'Cantidad'];
const restaurantTransactionsColumn = ['Tipo', 'Cantidad'];
const parallelvarTransactionsColumn = ['Tipo', 'Cantidad'];
const telefonicoTransactionsColumn = ['Tipo', 'Cantidad'];
const rappiTransactionsColumn = ['Tipo', 'Cantidad'];
const discountsColumn = ['Tipo', 'Cantidad'];
const courtesiesColumn = ['Tipo', 'Cantidad'];
const cancellationsColumn = ['Tipo', 'Cantidad'];
const tableRows: rows = [];
const sellTypesRows: rows = [];
const categoriesProductsRows: rows = [];
const subcategoriesProductsRows: rows = [];
const productsRows: rows = [];
const restaurantTransactionsRows: rows = [];
const paraLlevarTransactionsRows: rows = [];
const telefonicoTransactionsRows: rows = [];
const rappiTransactionsRows: rows = [];
const discountsRows: rows = [];
const courtesiesRows: rows = [];
const cancellationsRows: rows = [];

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

data.products.forEach((product) => {
  const productData = [product.type, product.quantity];
  productsRows.push(productData);
});

transactionResumeData.restaurant.forEach((transaction) => {
  const transactionData = [transaction.type, transaction.quantity];
  restaurantTransactionsRows.push(transactionData);
});

transactionResumeData.paraLlevar.forEach((transaction) => {
  const transactionData = [transaction.type, transaction.quantity];
  paraLlevarTransactionsRows.push(transactionData);
});

transactionResumeData.telefonico.forEach((transaction) => {
  const transactionData = [transaction.type, transaction.quantity];
  telefonicoTransactionsRows.push(transactionData);
});

transactionResumeData.rappi.forEach((transaction) => {
  const transactionData = [transaction.type, transaction.quantity];
  rappiTransactionsRows.push(transactionData);
});

transactionResumeData.discounts.forEach((transaction) => {
  const transactionData = [transaction.type, transaction.quantity];
  discountsRows.push(transactionData);
});

transactionResumeData.courtesies.forEach((transaction) => {
  const transactionData = [transaction.type, transaction.quantity];
  courtesiesRows.push(transactionData);
});

transactionResumeData.cancellations.forEach((transaction) => {
  const transactionData = [transaction.type, transaction.quantity];
  cancellationsRows.push(transactionData);
});

const stylesConfigs = {
  styles: {
    fontSize: 10, // Cambia el tamaño de la fuente de la tabla
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

// products Section
export const PRODUCTS_TABLE = {
  head: [productsColumn],
  body: productsRows,
  startY: PRODUCTS_TABLE_POSITION, // Posición inicial de la tabla
  styles: stylesConfigs.styles,
  headStyles: stylesConfigs.headStyles,
  bodyStyles: stylesConfigs.bodyStyles,
  alternateRowStyles: stylesConfigs.alternateRowStyles,
  columnStyles: stylesConfigs.columnStyles,
};

// restaurantTransactions Section
export const RESTAURANT_TRANSACTIONS_TABLE = {
  head: [restaurantTransactionsColumn],
  body: restaurantTransactionsRows,
  startY: RESTAURANT_TRANSACTIONS_POSITION, // Posición inicial de la tabla
  styles: stylesConfigs.styles,
  headStyles: stylesConfigs.headStyles,
  bodyStyles: stylesConfigs.bodyStyles,
  alternateRowStyles: stylesConfigs.alternateRowStyles,
  columnStyles: stylesConfigs.columnStyles,
};

export const PARALLELVAR_TRANSACTIONS_TABLE = {
  head: [parallelvarTransactionsColumn],
  body: paraLlevarTransactionsRows,
  startY: PARALLEVAR_TRANSACTIONS_POSITION, // Posición inicial de la tabla
  styles: stylesConfigs.styles,
  headStyles: stylesConfigs.headStyles,
  bodyStyles: stylesConfigs.bodyStyles,
  alternateRowStyles: stylesConfigs.alternateRowStyles,
  columnStyles: stylesConfigs.columnStyles,
};

export const TELEFONICO_TRANSACTIONS_TABLE = {
  head: [telefonicoTransactionsColumn],
  body: telefonicoTransactionsRows,
  startY: TELEFONICO_TRANSACTIONS_POSITION, // Posición inicial de la tabla
  styles: stylesConfigs.styles,
  headStyles: stylesConfigs.headStyles,
  bodyStyles: stylesConfigs.bodyStyles,
  alternateRowStyles: stylesConfigs.alternateRowStyles,
  columnStyles: stylesConfigs.columnStyles,
};

export const RAPPI_TRANSACTIONS_TABLE = {
  head: [rappiTransactionsColumn],
  body: rappiTransactionsRows,
  startY: RAPPI_TRANSACTIONS_POSITION, // Posición inicial de la tabla
  styles: stylesConfigs.styles,
  headStyles: stylesConfigs.headStyles,
  bodyStyles: stylesConfigs.bodyStyles,
  alternateRowStyles: stylesConfigs.alternateRowStyles,
  columnStyles: stylesConfigs.columnStyles,
};

export const DISCOUNTS_TABLE = {
  head: [discountsColumn],
  body: discountsRows,
  startY: DISCOUNTS_POSITION, // Posición inicial de la tabla
  styles: stylesConfigs.styles,
  headStyles: stylesConfigs.headStyles,
  bodyStyles: stylesConfigs.bodyStyles,
  alternateRowStyles: stylesConfigs.alternateRowStyles,
  columnStyles: stylesConfigs.columnStyles,
};

// courtesies Section
export const COURTESIES_TABLE = {
  head: [courtesiesColumn],
  body: courtesiesRows,
  startY: COURTESIES_POSITION, // Posición inicial de la tabla
  styles: stylesConfigs.styles,
  headStyles: stylesConfigs.headStyles,
  bodyStyles: stylesConfigs.bodyStyles,
  alternateRowStyles: stylesConfigs.alternateRowStyles,
  columnStyles: stylesConfigs.columnStyles,
};

export const CANCELLATIONS_TABLE = {
  head: [cancellationsColumn],
  body: cancellationsRows,
  startY: CANCELLATIONS_POSITION, // Posición inicial de la tabla
  styles: stylesConfigs.styles,
  headStyles: stylesConfigs.headStyles,
  bodyStyles: stylesConfigs.bodyStyles,
  alternateRowStyles: stylesConfigs.alternateRowStyles,
  columnStyles: stylesConfigs.columnStyles,
};
