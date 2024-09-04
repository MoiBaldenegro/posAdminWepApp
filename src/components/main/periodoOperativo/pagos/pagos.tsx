import styles from './pagos.module.css';
// Hooks
//icons
import searchIcon from '../../../../assets/public/searchIcon.svg';
import filterIcon from '../../../../assets/public/filterIcon.svg';
import editIcon from '../../../../assets/public/editPencil.svg';
import { useEffect, useState } from 'react';
import { PAYMENTS_TABLE_HEADERS } from './headers';
import { usePaymentsStore } from '@/zstore/payments.store';
import { EDIT_PAYMENT_MODAL } from './const';
import { useModal } from '@/hooks/useModals';
import EditPaymentModal from './editPayment/editPayment';

export default function Pagos() {
  const currentPayment = usePaymentsStore((state) => state.payments);
  const getCurrentPayments = usePaymentsStore(
    (state) => state.getCurrentPayments,
  );
  const [selectedPayment, setSelectedPayment] = useState();
  const editPaymentModal = useModal(EDIT_PAYMENT_MODAL);
  useEffect(() => {
    getCurrentPayments();
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
              {PAYMENTS_TABLE_HEADERS.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentPayment?.map((element, index) => (
              <tr
                key={index}
                className={
                  element.status === 'disabled'
                    ? styles.rowDisabled
                    : styles.release
                }
              >
                <td>{element.paymentCode}</td>
                <td>{element.accountId.code}</td>
                <td style={{ paddingLeft: '24px' }}>
                  {element.noteCode != 'n/a' ? element.noteCode : '--'}
                </td>
                <td>{element.accountId.checkTotal}</td>
                <td>
                  {element.transactions.length
                    ? `$${element.transactions[0].tips}`
                    : '$0.00'}
                </td>
                <td>{`$${element.paymentTotal}`}</td>
                <td>
                  {element.transactions.length > 1 &&
                  element.transactions.some(
                    (transaction) =>
                      transaction.paymentType ===
                      element.transactions[0].paymentType,
                  )
                    ? 'Compuesto'
                    : element.transactions[0].paymentType === 'cash'
                    ? 'Efectivo'
                    : element.transactions[0].paymentType === 'debit'
                    ? 'Tarjeta de debito'
                    : element.transactions[0].paymentType === 'credit'
                    ? 'Tarjeta de crédito'
                    : element.transactions[0].paymentType === 'transfer'
                    ? 'Transferencia'
                    : 'Otro'}
                </td>
                <td>{element.cashier}</td>
                <td>{element.paymentDate.slice(0, 10)}</td>
                <td style={{ paddingLeft: '32px' }}>
                  <button
                    onClick={() => {
                      setSelectedPayment(element);
                      editPaymentModal.openModal();
                    }}
                  >
                    <img src={editIcon} alt="edit-icon" />
                  </button>
                </td>
                <td style={{ paddingLeft: '48px' }}>
                  <input type="checkbox" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {editPaymentModal.isOpen &&
        editPaymentModal.modalName === EDIT_PAYMENT_MODAL ? (
          <EditPaymentModal
            onClose={editPaymentModal.closeModal}
            element={selectedPayment}
          >
            Editar pago
          </EditPaymentModal>
        ) : null}
        <div className={styles.tableFooter}></div>
      </section>
    </div>
  );
}
