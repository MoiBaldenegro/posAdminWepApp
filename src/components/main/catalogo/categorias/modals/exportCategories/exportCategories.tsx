import ExportCategories from '../../exporter/exportCategories';
import styles from './exportCategories.module.css';
interface Props {
  isOpen: any;
  onClose: any;
  children: any;
}
export default function ExportCategoriesModal({
  isOpen,
  onClose,
  children,
}: Props) {
  if (!isOpen) return null;
  return (
    <div className={styles.screen}>
      <section className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <h2>{children}</h2>
        <ExportCategories />
      </section>
    </div>
  );
}
