import CloseButton from '@/components/customElements/CloseButton';
import styles from './configModal.module.css';
interface Props {
  isOpen: any;
  onClose: any;
  children: any;
}
export default function ConfigModal({ isOpen, onClose, children }: Props) {
  return (
    <main className={styles.screen}>
      <div>
        <CloseButton onClose={onClose} />
      </div>
      <h2>{children}</h2>
    </main>
  );
}
