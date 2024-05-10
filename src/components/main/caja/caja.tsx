import styles from './caja.module.css';
//Hooks
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTillsAction } from '../../../redux/actions/caja/getTill';

//icons
import searchIcon from '../../../assets/public/searchIcon.svg';
import filterIcon from '../../../assets/public/filterIcon.svg';
import eyeIcon from '../../../assets/public/openEye.svg';
import { useModal } from '../../../hooks/useModals';
import TillDetails from './details/details';

export default function Caja() {
  // Local states
  const [till, setTills] = useState();
  // Modals
  const tillDetails = useModal('tillDetails');
  const dispatch = useDispatch();
  const { allTills } = useSelector((state) => state.tills);
  useEffect(() => {
    dispatch(getTillsAction());
  }, []);
  return (
    <div className={styles.container}>
      <section className={styles.head}>
        <h2>Cuentas</h2>
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
              <th className={styles.tHeadDate}>Fecha</th>
              <th className={styles.tHeadTill}>Caja</th>
              <th className={styles.tHeadCashier}>Cajero</th>
              <th className={styles.tHeadCash}>Efectivo</th>
              <th className={styles.tHeadDebit}>Débito</th>
              <th className={styles.tHeadCredit}>Crédito</th>
              <th className={styles.tHeadTransfer}>Transferencia</th>
              <th className={styles.tHeadDeliveryOne}>Rappi</th>
              <th className={styles.tHeadDeliveryTwo}>Dídi Food</th>
              <th className={styles.tHeadDeliveryThree}>Uber Eats</th>
              <th className={styles.tHeadDetails}>Detalles</th>
            </tr>
          </thead>
          <tbody>
            {allTills?.map((element, index) => (
              <tr
                key={index}
                className={
                  element.status === 'disabled'
                    ? styles.rowDisabled
                    : styles.release
                }
              >
                <td className={styles.tableRows}>{element.createdAt}</td>
                <td className={styles.tableRows}>{element.device}</td>
                <td className={styles.tableRows}>{element.user}</td>
                <td className={styles.tableRows}>{element.cash}</td>
                <td className={styles.tableRows}>{element.debit}</td>
                <td className={styles.tableRows}>{element.credit}</td>
                <td className={styles.tableRows}>{element.trnsfer}</td>
                <td className={styles.tableRows}>{element.rappi}</td>
                <td className={styles.tableRows}>{element.didi}</td>
                <td className={styles.tableRows}>{element.uber}</td>
                <td className={styles.tableRows}>
                  <button
                    className={styles.actionButtonsFirstDetails}
                    onClick={() => {
                      setTills(element);
                      tillDetails.openModal();
                    }}
                  >
                    <img src={eyeIcon} alt="open-eye-icon" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {tillDetails.isOpen && tillDetails.modalName === 'tillDetails' && (
          <TillDetails
            element={till}
            isOpen={tillDetails.isOpen}
            onClose={tillDetails.closeModal}
          >
            Detalles del corte
          </TillDetails>
        )}
        <div className={styles.tableFooter}></div>
      </section>
    </div>
  );
}
