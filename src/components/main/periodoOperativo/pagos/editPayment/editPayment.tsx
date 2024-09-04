import CloseButton from '@/components/customElements/CloseButton';
import styles from './editPayment.module.css';

interface Props {
  element: any;
  onClose: any;
  children: any;
}
export default function EditPaymentModal({
  element,
  onClose,
  children,
}: Props) {
  return (
    <main className={styles.screen}>
      <div>
        <CloseButton onClose={onClose} />
        <h3>{children}</h3>
        <h4>Pago numero: {element.paymentCode}</h4>
      </div>
    </main>
  );
}
