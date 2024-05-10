import styles from './authDiscontinue.module.css';
//Icons
import crossIcon from '../../../assets/public/crossIcon.svg';
import questionIcon from '../../../assets/public/questionIcon.svg';
import { useDispatch } from 'react-redux';
interface Props {
  isOpen: any;
  onClose: any;
  children: any;
  openModal: any;
  handleStatus: () => void;
}
export default function AuthDiscontinueModal({
  isOpen,
  onClose,
  children,
  openModal,
  handleStatus,
}: Props) {
  function handleChage() {
    handleStatus();
    openModal();
    onClose();
  }
  return (
    <div className={styles.screen}>
      <section className={styles.modal}>
        <div className={styles.contentContainer}>
          <img
            className={styles.questionIcon}
            src={questionIcon}
            alt="question-icon"
          />
          <img
            onClick={onClose}
            className={styles.closeButton}
            src={crossIcon}
            alt="cross-icon"
          />
          <h2 className={styles.tittle}>{children}</h2>
          <span className={styles.text}>
            También se descontinuaran las categorias dentro de ésta
          </span>
          <div className={styles.passForm}>
            <input className={styles.input} type="password" />
            <button className={styles.discontinueButton} onClick={handleChage}>
              Descontinuar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
