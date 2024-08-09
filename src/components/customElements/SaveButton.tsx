import styles from './ComponentStyle.module.css';
import disquetIcon from '@/assets/public/disquetIcon.svg';

interface Props {
  action: () => void;
}

export default function SaveButton({ action }: Props) {
  return (
    <button className={styles.saveButton} onClick={action}>
      <img src={disquetIcon} alt="close-icon" />
      <span>Guardar</span>
    </button>
  );
}
