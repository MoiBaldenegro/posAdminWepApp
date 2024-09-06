import styles from './historicoDePeriodosOperativos.module.css';

//icons
import searchIcon from '../../../../assets/public/searchIcon.svg';
import filterIcon from '../../../../assets/public/filterIcon.svg';
import { useOperatingPeriodStore } from '@/zstore/operatingPeriod.store';
import { useEffect } from 'react';
import { OPERATING_PERIODS_TABLE_HEADERS } from './headers';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default function HistoricoDePeriodosOperativos() {
  const operatingPeriods = useOperatingPeriodStore(
    (state) => state.operatingPeriods,
  );
  const getOperatingPeriods = useOperatingPeriodStore(
    (state) => state.getOperatingPeriods,
  );

  const data = {
    bussines: 'TAQUERIAS MG SA DE CV',
    title: 'Reporte de Ventas',
    date: '2024-09-05',

    sales: [
      { product: 'Café', quantity: 10, price: 5000 },
      { product: 'Empanada', quantity: 20, price: 2000 },
      { product: 'Té', quantity: 15, price: 3000 },
    ],
  };

  const centrarTexto = (doc, texto, y, headerStyles) => {
    const pageWidth = doc.internal.pageSize.width; // Ancho de la página
    const textWidth = doc.getTextWidth(texto); // Ancho del texto
    const x = (pageWidth - textWidth) / 2; // Calcular la posición x para centrar
    doc.text(texto, x, y, headerStyles); // Agregar el texto centrado
  };

  const generarPDF = () => {
    const doc = new jsPDF();

    // estilos del header
    const headerStyle = {
      fontSize: 8,
      textColor: [255, 255, 255],
    };

    // Agregar texto centrado
    const BUSSINES_NAME = 'TAQUERIAS MG SA DE CV';
    const REPORT_NAME = 'REPORTE DE CIERRE OPERATIVO';
    const PERIOD_DATE = 'PERIODO DE OPERACION 2024-09-05';
    const BRANCH_NAME = 'SUCURSAL CHAPULTEPEC';

    // Agregar texto centrado en diferentes posiciones verticales
    centrarTexto(doc, BUSSINES_NAME, 16, headerStyle);
    centrarTexto(doc, REPORT_NAME, 24, headerStyle);
    centrarTexto(doc, PERIOD_DATE, 32, headerStyle);
    centrarTexto(doc, BRANCH_NAME, 40, headerStyle);
    doc.line(10, 48, 200, 48);

    // Preparar los datos para la tabla
    const tableColumn = ['Producto', 'Cantidad', 'Precio'];
    const tableRows: (string | number)[][] = [];

    data.sales.forEach((sale) => {
      const saleData = [sale.product, sale.quantity, sale.price];
      tableRows.push(saleData);
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 56, // Posición inicial de la tabla

      // Estilos generales
      styles: {
        fontSize: 12, // Cambia el tamaño de la fuente de la tabla
        cellPadding: 2, // Espacio dentro de las celdas
        valign: 'middle', // Alineación vertical
        halign: 'center', // Alineación horizontal
        lineColor: [0, 0, 0], // Color del borde de la celda
        lineWidth: 0.1, // Ancho del borde
      },

      // Estilos para el encabezado
      headStyles: {
        fillColor: [22, 160, 133], // Color de fondo del encabezado
        textColor: [255, 255, 255], // Color del texto del encabezado
        fontStyle: 'bold', // Texto en negrita
      },

      // Estilos para el cuerpo
      bodyStyles: {
        fillColor: [245, 245, 245], // Color de fondo para las celdas
      },

      // Estilos para filas alternas
      alternateRowStyles: {
        fillColor: [220, 220, 220], // Color de fondo alterno
      },

      // Estilos para una columna específica (columna de precio)
      columnStyles: {
        2: {
          // Tercera columna (índice 2)
          halign: 'right', // Alineación a la derecha
          fillColor: [240, 240, 240], // Fondo más claro para esta columna
        },
      },
    });

    // Guardar el archivo PDF
    doc.save('reporte_ventas.pdf');
  };

  useEffect(() => {
    getOperatingPeriods();
  }, []);
  return (
    <div className={styles.container}>
      <div>
        <section className={styles.head}>
          <h2>Historial de periodos operativos</h2>
          <div>
            <button
              onClick={() => {
                generarPDF();
              }}
            >
              Descargar reporte
            </button>
          </div>
        </section>
        <section className={styles.mainSection}>
          <div className={styles.mainHead}>
            <div className={styles.mainHeadLeft}>
              <span>Mostrar</span>
              <select name="" id="" className={styles.showSelect}>
                <option value="all">Todos</option>
                <option value="option-one">Option 1</option>
                <option value="optio-two">Option 2</option>
              </select>
              <span>Cuentas</span>
            </div>
            <div className={styles.searchContainer}>
              <button className={styles.categoryButton}>
                <img src={filterIcon} alt="categories-button" />
                <span>Categorias</span>
              </button>
              <div className={styles.searchBarTable}>
                <img
                  src={searchIcon}
                  alt="search-icon"
                  className={styles.searchIcon}
                />
                <input
                  type="text"
                  className={styles.searchBarTableInput}
                  placeholder="Cuenta # Ejemplo-00"
                />
              </div>
            </div>
          </div>
          <table className={styles.table}>
            <thead>
              <tr>
                {OPERATING_PERIODS_TABLE_HEADERS?.map((header) => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody className={styles.tableBody}>
              {operatingPeriods?.map((element) => (
                // Revisa si el estado del elemento no es 'disabled'
                <tr
                  key={element.code}
                  className={
                    element.status === 'disabled'
                      ? styles.rowDisabled
                      : styles.release
                  }
                >
                  <td>{element?.createdAt}</td>
                  <td>{element?.sellTotal ?? '$0.00'}</td>
                  <td>{element?.updatedAt}</td>
                  <td className={styles.tableRows}>{element.createdAt}</td>
                  <td>{element?.approvedBy ?? 'N/A'}</td>

                  <td>
                    <button>estado</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.tableFooter}></div>
        </section>
      </div>
    </div>
  );
}
