import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { centerTextProps, headerStyle } from './reports.d.types';
import logo from '@/assets/header/tomateLogo.png';
import {
  CATEGORIES_TABLE,
  CATEGORIES_TABLE_POSITION,
  PAYMENTS_TABLE,
  PAYMENTS_TABLE_POSITION,
  SELLTYPES_TABLE,
  SELLTYPES_TABLE_POSITION,
  SUBCATEGORIES_TABLE,
  SUBCATEGORIES_TABLE_POSITION,
} from './consts';
import { centrarTexto } from './svgToImage';

// Función para generar el reporte de ventas
export const generateOperatingPeriodReport = () => {
  const doc = new jsPDF();
  const BUSSINES_NAME = 'TAQUERIAS MG SA DE CV';
  const REPORT_NAME = 'REPORTE DE CIERRE OPERATIVO';
  const PERIOD_DATE = 'PERIODO DE OPERACION 2024-09-05';
  const BRANCH_NAME = 'SUCURSAL CHAPULTEPEC';

  const headerData: centerTextProps[] = [
    { doc, text: BUSSINES_NAME, y: 16, headerStyles: headerStyle },
    { doc, text: REPORT_NAME, y: 24, headerStyles: headerStyle },
    { doc, text: PERIOD_DATE, y: 32, headerStyles: headerStyle },
    { doc, text: BRANCH_NAME, y: 40, headerStyles: headerStyle },
  ];

  // Agregar logo y encabezados
  doc.addImage(logo, 'PNG', 10, 15, 36, 12);
  headerData.forEach((header) => centrarTexto(header));
  doc.line(10, 48, 200, 48);
  doc.text('RESUMEN DE VENTAS', 10, 56);
  doc.text('Total de ventas: $000,000,000.0.0', 10, 64);

  // Crear tabla principal con el título
  centrarTexto({
    doc,
    text: 'Ventas por método de pago',
    y: PAYMENTS_TABLE_POSITION - 6,
    headerStyles: { fontSize: 12, textColor: [255, 0, 0] },
  });
  doc.line(10, PAYMENTS_TABLE_POSITION - 3, 200, PAYMENTS_TABLE_POSITION - 3);
  doc.autoTable(PAYMENTS_TABLE);

  centrarTexto({
    doc,
    text: 'Ventas por tipo de venta',
    y: SELLTYPES_TABLE_POSITION - 6,
    headerStyles: { fontSize: 12, textColor: [255, 0, 0] },
  });
  doc.line(10, SELLTYPES_TABLE_POSITION - 3, 200, SELLTYPES_TABLE_POSITION - 3);
  doc.autoTable(SELLTYPES_TABLE);

  centrarTexto({
    doc,
    text: 'Ventas por categoría de producto',
    y: CATEGORIES_TABLE_POSITION - 6,
    headerStyles: { fontSize: 12, textColor: [255, 0, 0] },
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
    headerStyles: { fontSize: 12, textColor: [255, 0, 0] },
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
    text: 'RESUMEN DE TRANSACCIONES',
    y: 20,
    headerStyles: { fontSize: 12, textColor: [255, 0, 0] },
  });
  doc.line(10, 23, 200, 23);

  doc.save('reporte_ventas.pdf');
};
