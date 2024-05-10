import styles from './turnos.module.css';
// Hook
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

// icons
import createIcon from '../../../../assets/public/createIcon.svg';
import update from '../../../../assets/public/updateIcon.svg';
import deleteIcon from '../../../../assets/public/bloquedIcon.svg';
import enabledIcon from '../../../../assets/public/enabledIcon.svg';

import { discontinueMenusAction } from '../../../../redux/actions/catalogo/menusYRecipes/discontinueMenus';
import { getShiftsAction } from '../../../../redux/actions/usuarios/shiftsActions/getShifts';

export default function Turnos() {
  const dispatch = useDispatch();
  const { allShifts } = useSelector((state) => state.shifts);

  const toggleStatus = (id, body) => {
    dispatch(discontinueMenusAction(id, body));
  };

  useEffect(() => {
    dispatch(getShiftsAction());
  }, []);
  return (
    <div className={styles.container}>
      <section className={styles.head}>
        <h2>Turnos</h2>
        <div>
          <button className={styles.btnHeadCreate}>
            <img src={createIcon} alt="create-icon" />
            <span>Crear turno</span>
          </button>
        </div>
      </section>
      <section className={styles.mainSection}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.tHeadShift}>Turno</th>
              <th className={styles.tHeadStartShift}>Inicio de turno</th>
              <th className={styles.tHeadEndShift}>Fin de turno</th>
              <th className={styles.tHeadUpdateDate}>Ultima actualizacion</th>
              <th className={styles.tHeadActions}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {allShifts?.map((element) => (
              <tr
                key={element._id}
                className={
                  element.status === 'disabled'
                    ? styles.rowDisabled
                    : styles.release
                }
              >
                <td className={styles.tableRows}>{element.shiftName}</td>
                <td className={styles.tableRows}>{element.timeStartShift}</td>
                <td className={styles.tableRows}>{element.timeEndShift}</td>
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
