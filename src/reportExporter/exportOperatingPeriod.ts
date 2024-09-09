import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { centerTextProps, headerStyle } from './reports.d.types';
import logo from '@/assets/header/tomateLogo.png';
import {
  CANCELLATIONS_POSITION,
  CANCELLATIONS_TABLE,
  CATEGORIES_TABLE,
  CATEGORIES_TABLE_POSITION,
  COURTESIES_POSITION,
  COURTESIES_TABLE,
  DISCOUNTS_POSITION,
  DISCOUNTS_TABLE,
  PARALLELVAR_TRANSACTIONS_TABLE,
  PARALLEVAR_TRANSACTIONS_POSITION,
  PAYMENTS_TABLE,
  PAYMENTS_TABLE_POSITION,
  PRODUCTS_TABLE,
  PRODUCTS_TABLE_POSITION,
  RAPPI_TRANSACTIONS_POSITION,
  RAPPI_TRANSACTIONS_TABLE,
  RESTAURANT_TRANSACTIONS_POSITION,
  RESTAURANT_TRANSACTIONS_TABLE,
  SELLTYPES_TABLE,
  SELLTYPES_TABLE_POSITION,
  SUBCATEGORIES_TABLE,
  SUBCATEGORIES_TABLE_POSITION,
  TELEFONICO_TRANSACTIONS_POSITION,
  TELEFONICO_TRANSACTIONS_TABLE,
} from './consts';
import { centrarTexto } from './svgToImage';

// Función para generar el reporte de ventas
export const generateOperatingPeriodReport = (period: any) => {
  const doc = new jsPDF();
  doc.setFontSize(10);

  const BUSSINES_NAME = 'TAQUERIAS MG SA DE CV';
  const REPORT_NAME = 'REPORTE DE CIERRE OPERATIVO';
  const PERIOD_DATE = `PERIODO DE OPERACION ${new Date(period.createdAt)
    .toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    .toUpperCase()}`;

  const BRANCH_NAME = 'SUCURSAL CHAPULTEPEC';
  const TRANSACTIONS_RESUME_TITLE = 'RESUMEN DE TRANSACCIONES';
  const TILL_SELLS_TITLE = 'VENTAS POR CAJA';

  const headerData: centerTextProps[] = [
    { doc, text: BUSSINES_NAME, y: 16, headerStyles: headerStyle },
    { doc, text: REPORT_NAME, y: 22, headerStyles: headerStyle },
    { doc, text: PERIOD_DATE, y: 28, headerStyles: headerStyle },
    { doc, text: BRANCH_NAME, y: 34, headerStyles: headerStyle },
  ];

  // Agregar logo y encabezados
  doc.addImage(logo, 'PNG', 10, 15, 36, 12);
  headerData.forEach((header) => centrarTexto(header));
  doc.line(10, 48, 200, 48);
  doc.text('RESUMEN DE VENTAS', 10, 56);
  doc.text('Total de ventas: $000,000,000.0.0', 10, 64);

  // Ventas por método de pago
  centrarTexto({
    doc,
    text: 'Ventas por método de pago',
    y: PAYMENTS_TABLE_POSITION - 6,
    headerStyles: { fontSize: 10, textColor: [255, 0, 0] },
  });
  doc.line(10, PAYMENTS_TABLE_POSITION - 3, 200, PAYMENTS_TABLE_POSITION - 3);
  doc.autoTable(PAYMENTS_TABLE);

  // Ventas por tipo de venta
  centrarTexto({
    doc,
    text: 'Ventas por tipo de venta',
    y: SELLTYPES_TABLE_POSITION - 6,
    headerStyles: { fontSize: 10, textColor: [255, 0, 0] },
  });
  doc.line(10, SELLTYPES_TABLE_POSITION - 3, 200, SELLTYPES_TABLE_POSITION - 3);
  doc.autoTable(SELLTYPES_TABLE);

  centrarTexto({
    doc,
    text: 'Ventas por categoría de producto',
    y: CATEGORIES_TABLE_POSITION - 6,
    headerStyles: { fontSize: 10, textColor: [255, 0, 0] },
  });
  doc.line(
    10,
    CATEGORIES_TABLE_POSITION - 3,
    200,
    CATEGORIES_TABLE_POSITION - 3,
  );
  doc.autoTable(CATEGORIES_TABLE);

  /////////////////////////////////////////////////////
  // New Page//////////////////////////////////////////
  /////////////////////////////////////////////////////

  doc.addPage();
  centrarTexto({
    doc,
    text: 'Ventas por subcategoría de producto',
    y: SUBCATEGORIES_TABLE_POSITION - 6,
    headerStyles: { fontSize: 10, textColor: [255, 0, 0] },
  });
  doc.line(
    10,
    SUBCATEGORIES_TABLE_POSITION - 3,
    200,
    SUBCATEGORIES_TABLE_POSITION - 3,
  );
  doc.autoTable(SUBCATEGORIES_TABLE);

  /////////////////////////////////////////////////////
  // New Page//////////////////////////////////////////
  /////////////////////////////////////////////////////

  doc.addPage(); // New Page
  centrarTexto({
    doc,
    text: 'Ventas por producto',
    y: PRODUCTS_TABLE_POSITION - 6,
    headerStyles: { fontSize: 10, textColor: [255, 0, 0] },
  });
  doc.line(10, PRODUCTS_TABLE_POSITION - 3, 200, PRODUCTS_TABLE_POSITION - 3);
  doc.autoTable(PRODUCTS_TABLE);

  /////////////////////////////////////////////////////
  // New Page//////////////////////////////////////////
  /////////////////////////////////////////////////////

  doc.addPage(); // New Page
  doc.text(TRANSACTIONS_RESUME_TITLE, 20, 25);

  centrarTexto({
    doc,
    text: 'Restaurante',
    y: RESTAURANT_TRANSACTIONS_POSITION - 6,
    headerStyles: { fontSize: 10, textColor: [255, 0, 0] },
  });
  doc.line(
    10,
    RESTAURANT_TRANSACTIONS_POSITION - 3,
    200,
    RESTAURANT_TRANSACTIONS_POSITION - 3,
  );
  doc.autoTable(RESTAURANT_TRANSACTIONS_TABLE);

  centrarTexto({
    doc,
    text: 'Para llevar',
    y: PARALLEVAR_TRANSACTIONS_POSITION - 6,
    headerStyles: { fontSize: 10, textColor: [255, 0, 0] },
  });
  doc.line(
    10,
    PARALLEVAR_TRANSACTIONS_POSITION - 3,
    200,
    PARALLEVAR_TRANSACTIONS_POSITION - 3,
  );
  doc.autoTable(PARALLELVAR_TRANSACTIONS_TABLE);

  centrarTexto({
    doc,
    text: 'Telefonico',
    y: TELEFONICO_TRANSACTIONS_POSITION - 6,
    headerStyles: { fontSize: 10, textColor: [255, 0, 0] },
  });
  doc.line(
    10,
    TELEFONICO_TRANSACTIONS_POSITION - 3,
    200,
    TELEFONICO_TRANSACTIONS_POSITION - 3,
  );
  doc.autoTable(TELEFONICO_TRANSACTIONS_TABLE);

  centrarTexto({
    doc,
    text: 'Rappi',
    y: RAPPI_TRANSACTIONS_POSITION - 6,
    headerStyles: { fontSize: 10, textColor: [255, 0, 0] },
  });
  doc.line(
    10,
    RAPPI_TRANSACTIONS_POSITION - 3,
    200,
    RAPPI_TRANSACTIONS_POSITION - 3,
  );
  doc.autoTable(RAPPI_TRANSACTIONS_TABLE);

  centrarTexto({
    doc,
    text: 'Descuentos',
    y: DISCOUNTS_POSITION - 6,
    headerStyles: { fontSize: 10, textColor: [255, 0, 0] },
  });
  doc.line(10, DISCOUNTS_POSITION - 3, 200, DISCOUNTS_POSITION - 3);
  doc.autoTable(DISCOUNTS_TABLE);

  doc.addPage();
  centrarTexto({
    doc,
    text: 'Cortesías',
    y: COURTESIES_POSITION - 6,
    headerStyles: { fontSize: 10, textColor: [255, 0, 0] },
  });
  doc.line(10, COURTESIES_POSITION - 3, 200, COURTESIES_POSITION - 3);
  doc.autoTable(COURTESIES_TABLE);

  centrarTexto({
    doc,
    text: 'Cancelaciones',
    y: CANCELLATIONS_POSITION - 6,
    headerStyles: { fontSize: 10, textColor: [255, 0, 0] },
  });
  doc.line(10, CANCELLATIONS_POSITION - 3, 200, CANCELLATIONS_POSITION - 3);
  doc.autoTable(CANCELLATIONS_TABLE); // Nueva página con la tabla

  doc.addPage(); // New Page
  doc.text(TILL_SELLS_TITLE, 20, 25);

  doc.addPage(); // New Page
  doc.text('RESUMEN ', 10, 20);
  doc.text('Total de ingresos: $000,000,000.0.', 10, 30);
  doc.text('Total de egresos: $000,000,000.0.', 10, 35);
  doc.text('Retiros parciales: $000,000,000.0.', 10, 40);

  doc.save('reporte_ventas.pdf');
};
