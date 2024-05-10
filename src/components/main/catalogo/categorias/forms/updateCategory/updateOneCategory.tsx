import styles from './updateOneCategory.module.css';
// Icons
import saveIcon from '../../../../../../assets/public/disquetIcon.svg';
import crossIcon from '../../../../../../assets/public/crossIcon.svg';
import { useState } from 'react';
interface Props {
  actionType: () => void;
  categoria: any;
  isOpen: any;
  onClose: any;
  children: any;
  openModal: any;
}
export default function UpdateOneCategory({
  actionType,
  categoria,
  isOpen,
  onClose,
  children,
  openModal,
}: Props) {
  const [newValue, setNewValue] = useState();
  const handleChange = () => {
    actionType(categoria.id, newValue, categoria.path);
    openModal();
    onClose();
  };
  return (
    <div className={styles.screen}>
      <section className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          <img
            className={styles.closeButton}
            src={crossIcon}
            alt="cross-icon"
          />
        </button>
        <h2 className={styles.tittle}>{children}</h2>
        <div className={styles.contentContainer}>
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder={categoria.body}
              className={styles.input}
              onChange={(e) => {
                setNewValue(e.target.value);
              }}
            />
          </div>
          <button className={styles.saveButton} onClick={handleChange}>
            <img src={saveIcon} alt="save-icon" />
            Guardar
          </button>
        </div>
      </section>
    </div>
  );
}
