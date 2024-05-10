import { useDispatch, useSelector } from 'react-redux';
import styles from './ventaTypes.module.css';
import { useEffect } from 'react';
import { getSellTypesAction } from '../../../redux/actions/tiposDeVenta/getSellTypes';

// Icons
import update from '../../../assets/public/updateIcon.svg';
import deleteIcon from '../../../assets/public/bloquedIcon.svg';
import enabledIcon from '../../../assets/public/enabledIcon.svg';

export default function VentaTypes() {
  const dispatch = useDispatch();
  const { allSellTypes } = useSelector((state) => state.sellTypes);

  useEffect(() => {
    dispatch(getSellTypesAction());
    console.log(allSellTypes);
  }, []);
  return (
    <div className={styles.container}>
      <section className={styles.head}>
        <h2>Tipos de venta</h2>
      </section>
      <section className={styles.mainSection}>
        <table className={styles.table}>
          <thead>
            <th className={styles.tHeadCode}>Clave</th>
            <th className={styles.tHeadSellType}>Tipo de venta</th>
            <th className={styles.tHeadUpdateDate}>Última actualización</th>
            <th className={styles.tHeadActions}>Acciones</th>
          </thead>
          <tbody>
            {allSellTypes?.map((element) => (
              <tr
                className={
                  element.status === 'disabled'
                    ? styles.rowDisabled
                    : styles.release
                }
              >
                <td className={styles.tableRows}>{element.code}</td>
                <td className={styles.tableRows}>{element.sellName}</td>
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
