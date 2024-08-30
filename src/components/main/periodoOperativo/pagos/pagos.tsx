import styles from './pagos.module.css';
// Hooks
import { useDispatch, useSelector } from 'react-redux';
//icons
import searchIcon from '../../../../assets/public/searchIcon.svg';
import filterIcon from '../../../../assets/public/filterIcon.svg';
import { useEffect } from 'react';
import { getPaymentsAction } from '../../../../redux/actions/ventas/paymentsActions/getPayments';

export default function Pagos() {
  const dispatch = useDispatch();
  const { allPayments } = useSelector((state) => state.payments);

  useEffect(() => {
    dispatch(getPaymentsAction());
  }, []);
  return (
    <div className={styles.container}>
      <section className={styles.head}>
        <h2>Pagos</h2>
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
            <span>Pagos</span>
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
                placeholder="Folio #000000"
              />
            </div>
          </div>
        </div>

        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.tHeadPaymentNumber}>Folio de pago</th>
              <th className={styles.tHeadAccount}>Cuenta</th>
              <th className={styles.tHeadNoteNumber}>Nota</th>
              <th className={styles.tHeadSellType}>Tipo de venta</th>
              <th className={styles.tHeadNoteTotal}>Total de la nota</th>
              <th className={styles.tHeadTips}>Propina</th>
              <th className={styles.tHeadTotalPayment}>Total pagado</th>
              <th className={styles.tHeadPaymentType}>Forma de pago</th>
              <th className={styles.tHeadCashier}>Cajero</th>
              <th className={styles.tHeadPaymentDate}>Fecha de pago</th>
              <th className={styles.tHeadBill}>Facturacion</th>
            </tr>
          </thead>
          <tbody>
            {allPayments?.map((element, index) => (
              <tr
                key={index}
                className={
                  element.status === 'disabled'
                    ? styles.rowDisabled
                    : styles.release
                }
              >
                <td className={styles.tableRows}>{element.paymentCode}</td>
                <td className={styles.tableRows}>{element.check}</td>
                <td className={styles.tableRows}>{element.noteCode}</td>
                <td className={styles.tableRows}>{element.sellType}</td>
                <td className={styles.tableRows}>{element.checkTotal}</td>
                <td className={styles.tableRows}>{element.tips}</td>
                <td className={styles.tableRows}>{element.paymentTotal}</td>
                <td className={styles.tableRows}>{element.paymentType}</td>
                <td className={styles.tableRows}>{element.cashier}</td>
                <td className={styles.tableRows}>{element.paymentDate}</td>
                <td className={styles.tableRows}>{element.billing}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className={styles.tableFooter}></div>
      </section>
    </div>
  );
}
