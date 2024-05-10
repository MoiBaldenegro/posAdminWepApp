import styles from './notas.module.css';
// Hooks
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
//icons
import searchIcon from '../../../../assets/public/searchIcon.svg';
import filterIcon from '../../../../assets/public/filterIcon.svg';
import eyeIcon from '../../../../assets/public/openEye.svg';
import enabledIcon from '../../../../assets/public/StatusIcon(enabled).svg';
import disabledIcon from '../../../../assets/public/StatusIcon(disabled).svg';
import pendingIcon from '../../../../assets/public/StatusIcon(pending).svg';
import { getNotesAction } from '../../../../redux/actions/ventas/notesActions/getNotes';

export default function Notas() {
  const dispatch = useDispatch();
  const { allNotes } = useSelector((state) => state.notes);

  useEffect(() => {
    dispatch(getNotesAction());
  }, []);
  return (
    <div className={styles.container}>
      <section className={styles.head}>
        <h2>Notas</h2>
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
            <span>Notas</span>
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
                placeholder="Nota #Ejemplo-00"
              />
            </div>
          </div>
        </div>

        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.tHeadAccount}>Cuenta</th>
              <th className={styles.tHeadNote}>Nota</th>
              <th className={styles.tHeadPaymentNumber}>Folio de pago</th>
              <th className={styles.tHeadSellType}>Tipo de venta</th>
              <th className={styles.tHeadOpenBy}>Abierta por</th>
              <th className={styles.tHeadTotal}>Total</th>
              <th className={styles.tHeadStatus}>Estatus</th>
              <th className={styles.tHeadCashier}>Cajero</th>
              <th className={styles.tHeadCreationDate}>Fecha de creacion</th>
              <th className={styles.tHeadPaymentDate}>Fecha de pago</th>
              <th className={styles.tHeadDetails}>Detalles</th>
            </tr>
          </thead>
          <tbody>
            {allNotes?.map((element, index) => (
              <tr
                key={index}
                className={
                  element.status === 'disabled'
                    ? styles.rowDisabled
                    : styles.release
                }
              >
                <td className={styles.tableRows}>{element.checkCode}</td>
                <td className={styles.tableRows}>{element.noteNumber}</td>
                <td className={styles.tableRows}>{element.paymentCode}</td>
                <td className={styles.tableRows}>{element.sellType}</td>
                <td className={styles.tableRows}>{element.user}</td>
                <td className={styles.tableRows}>{element.checkTotal}</td>
                <td className={styles.tableRows}>
                  {element.status === 'enabled' ? (
                    <>
                      <img
                        className={styles.statusIcon}
                        src={enabledIcon}
                        alt="enabled-icon"
                      />
                      {element.status}
                    </>
                  ) : element.status === 'disabled' ? (
                    <>
                      <img
                        className={styles.statusIcon}
                        src={disabledIcon}
                        alt="disabled-icon"
                      />
                      {element.status}
                    </>
                  ) : (
                    <>
                      <img
                        className={styles.statusIcon}
                        src={pendingIcon}
                        alt="pending-icon"
                      />
                      {element.status}
                    </>
                  )}
                </td>
                <td className={styles.tableRows}>{element.cashier}</td>
                <td className={styles.tableRows}>{element.createdAt}</td>
                <td className={styles.tableRows}>{element.paymentDate}</td>
                <td className={styles.tableRows}>
                  <button className={styles.actionButtonsFirstDetails}>
                    <img src={eyeIcon} alt="open-eye-icon" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.tableFooter}></div>
      </section>
    </div>
  );
}
