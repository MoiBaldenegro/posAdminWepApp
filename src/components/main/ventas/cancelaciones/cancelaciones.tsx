import styles from './cancelaciones.module.css';
// Hooks
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// Actions
import { getCancellationsAction } from '../../../../redux/actions/ventas/cancellationsActions/getCancellations';
//icons
import searchIcon from '../../../../assets/public/searchIcon.svg';
import filterIcon from '../../../../assets/public/filterIcon.svg';

export default function Cancelaciones() {
  const dispatch = useDispatch();
  const { allCancellations } = useSelector((state) => state.cancellations);

  useEffect(() => {
    dispatch(getCancellationsAction());
  }, []);
  return (
    <div className={styles.container}>
      <section className={styles.head}>
        <h2>Cancelaciones</h2>
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
            <span>Cancelaciones</span>
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
                placeholder="Folio de cuenta cancelada"
              />
            </div>
          </div>
        </div>

        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.tHeadAccount}>Cuenta</th>
              <th className={styles.tHeadSellType}>Tipo de venta</th>
              <th className={styles.tHeadMountCancelled}>Monto cancelado</th>
              <th className={styles.tHeadCancelledBy}>Cancelada por</th>
              <th className={styles.tHeadCancelledFor}>Cancelada a</th>
              <th className={styles.tHeadCancellationReason}>
                Motivo de cancelacion
              </th>
              <th className={styles.tHeadCancellationDate}>
                Fecha de cancelacion
              </th>
            </tr>
          </thead>
          <tbody>
            {allCancellations?.map((element, index) => (
              <tr
                key={index}
                className={
                  element.status === 'disabled'
                    ? styles.rowDisabled
                    : styles.release
                }
              >
                <td className={styles.tableRows}>{element.checkCode}</td>
                <td className={styles.tableRows}>{element.sellType}</td>
                <td className={styles.tableRows}>
                  {element.CancellationMount}
                </td>
                <td className={styles.tableRows}>{element.cancellationBy}</td>
                <td className={styles.tableRows}>{element.cancellationFor}</td>
                <td className={styles.tableRows}>
                  {element.cancellationReason}
                </td>
                <td className={styles.tableRows}>{element.cancellationDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.tableFooter}></div>
      </section>
    </div>
  );
}
