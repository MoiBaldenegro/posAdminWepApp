import CloseButton from '@/components/customElements/CloseButton';
import styles from './notificationsConfig.module.css';

interface Props {
  isOpen: any;
  onClose: any;
  children: any;
}

export default function NotificationsConfig({
  isOpen,
  onClose,
  children,
}: Props) {
  return (
    <main className={styles.screen}>
      <section>
        <CloseButton onClose={onClose}></CloseButton>
        <h4>{children}</h4>
      </section>
    </main>
  );
}
