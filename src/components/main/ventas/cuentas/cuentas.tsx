import styles from './cuentas.module.css';
//hooks
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

//icons
import searchIcon from '../../../../assets/public/searchIcon.svg';
import filterIcon from '../../../../assets/public/filterIcon.svg';
import eyeIcon from '../../../../assets/public/openEye.svg';
import enabledIcon from '../../../../assets/public/StatusIcon(enabled).svg';
import disabledIcon from '../../../../assets/public/StatusIcon(disabled).svg';
import pendingIcon from '../../../../assets/public/StatusIcon(pending).svg';
import { getBillsAction } from '../../../../redux/actions/ventas/billsActions/getBillsAction';
import NotesDetails from './details/details';
import { useModal } from '../../../../hooks/useModals';

export default function Cuentas() {
  // Local States
  const [detailsActive, setDetailsActive] = useState(true);
  const [account, setAccount] = useState();

  // Modals
  const notesDetails = useModal('notesDetails');
  const { allBills } = useSelector((state) => state.bills);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBillsAction());
  }, []);

  return (
    <div className={styles.container}>
      <div>
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
                <th className={styles.tHeadCuenta}>Cuenta</th>
                <th className={styles.tHeadTipoDeVenta}>Tipo de venta</th>
                <th className={styles.tHeadAbiertaPor}>Abierta por</th>
                <th className={styles.tHeadTotal}> Total</th>
                <th className={styles.tHeadStatus}>Status</th>
                <th className={styles.tHeadFechaDeCreacion}>
                  Fecha de creacion
                </th>
                <th className={styles.tHeadFechaDePago}>Fecha de Pago</th>
                <th className={styles.tHeadDetalles}>Detalles</th>
              </tr>
            </thead>
            <tbody>
              {allBills?.map((element) => (
                <tr
                  key={element._billCode}
                  className={
                    element.status === 'disabled'
                      ? styles.rowDisabled
                      : styles.release
                  }
                >
                  <td className={styles.tableRows}>{element.billCode}</td>
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

                  <td className={styles.tableRows}>{element.createdAt}</td>
                  <td className={styles.tableRows}>{element.paymentDate}</td>
                  <td className={styles.buttonsContainer}>
                    <button
                      className={styles.actionButtonsFirstDetails}
                      onClick={() => {
                        notesDetails.openModal();
                        setAccount(element);
                      }}
                    >
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
      {notesDetails.isOpen && notesDetails.modalName === 'notesDetails' && (
        <NotesDetails
          element={account}
          isOpen={notesDetails.isOpen}
          onClose={notesDetails.closeModal}
        >
          Detalles de la cuenta:
        </NotesDetails>
      )}
    </div>
  );
}
