import styles from './historicoDePeriodosOperativos.module.css';

//icons
import searchIcon from '../../../../assets/public/searchIcon.svg';
import filterIcon from '../../../../assets/public/filterIcon.svg';
import { useOperatingPeriodStore } from '@/zstore/operatingPeriod.store';
import { useEffect } from 'react';
import { OPERATING_PERIODS_TABLE_HEADERS } from './headers';
import { generateOperatingPeriodReport } from '@/reportExporter/exportOperatingPeriod';

export default function HistoricoDePeriodosOperativos() {
  const operatingPeriods = useOperatingPeriodStore(
    (state) => state.operatingPeriods,
  );
  const getOperatingPeriods = useOperatingPeriodStore(
    (state) => state.getOperatingPeriods,
  );

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
                generateOperatingPeriodReport();
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
