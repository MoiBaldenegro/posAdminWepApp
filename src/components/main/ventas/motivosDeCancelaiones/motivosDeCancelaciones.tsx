import styles from './motivosDeCancelaciones.module.css';
// Hooks
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// Actions
import { getCancellationReasonsAction } from '../../../../redux/actions/ventas/cancellationReasons/getCancellationReasons';
//icons
import searchIcon from '../../../../assets/public/searchIcon.svg';
import filterIcon from '../../../../assets/public/filterIcon.svg';
import update from '../../../../assets/public/updateIcon.svg';
import enabledIcon from '../../../../assets/public/enabledIcon.svg';
import deleteIcon from '../../../../assets/public/deleteIcon.svg';

export default function MotivosDeCancelacion() {
  const dispatch = useDispatch();
  const { allCancellationReasons } = useSelector(
    (state) => state.cancellationReasons,
  );

  useEffect(() => {
    dispatch(getCancellationReasonsAction());
  }, []);
  return (
    <div className={styles.container}>
      <section className={styles.head}>
        <h2>
          {' '}
          <main>Motivos de cancelación</main>
        </h2>
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
            <span>Motivos de cancelación</span>
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
                placeholder="Folio de cuenta"
              />
            </div>
          </div>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.tHeadCode}>Clave</th>
              <th className={styles.tHeadCancellationReason}>
                Motivo de cancelacion
              </th>
              <th className={styles.tHeadUpdateDate}>Ultima actualizacion</th>
              <th className={styles.tHeadActions}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {allCancellationReasons?.map((element, index) => (
              <tr
                key={index}
                className={
                  element.status === 'disabled'
                    ? styles.rowDisabled
                    : styles.release
                }
              >
                <td className={styles.tableRows}>{element.keyReason}</td>
                <td className={styles.tableRows}>{element.reasonName}</td>
                <td className={styles.tableRows}>{element.createdAt}</td>
                <td className={styles.buttonsContainer}>
                  {element.status === 'enabled' ? (
                    <>
                      <button className={styles.actionButtonsFirst}>
                        <img src={update} alt="update-icon" />
                      </button>
                      <button
                        className={styles.actionButtonsSecond}
                        onClick={() => {
                          toggleStatus(element._id, element.status);
                        }}
                      >
                        <img src={deleteIcon} alt="delete-icon" />
                      </button>
                    </>
                  ) : (
                    <>
                      <button className={styles.actionButtonsFirstEnabled}>
                        <img src={update} alt="update-icon" />
                      </button>
                      <button
                        className={styles.actionButtonsSecond}
                        onClick={() => {
                          toggleStatus(element._id, element.status);
                        }}
                      >
                        <img src={enabledIcon} alt="enabled-icon" />
                      </button>
                    </>
                  )}
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
