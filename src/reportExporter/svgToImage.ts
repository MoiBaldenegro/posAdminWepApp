import { centerTextProps } from './reports.d.types';

export const centrarTexto = ({
  doc,
  text,
  y,
  headerStyles,
}: centerTextProps) => {
  const pageWidth = doc.internal.pageSize.width; // Ancho de la página
  const textWidth = doc.getTextWidth(text); // Ancho del texto
  const x = (pageWidth - textWidth) / 2; // Calcular la posición x para centrar
  doc.text(text, x, y, headerStyles); // Agregar el texto centrado
};
