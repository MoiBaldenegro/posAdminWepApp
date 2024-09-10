import closeIcon from '@/assets/public/leftArrow.svg';
import styles from './returnButton.module.css';

interface Props {
  onClose: () => void;
}

export default function ReturnButton({ onClose }: Props) {
  return (
    <button className={styles.returnButton} onClick={onClose}>
      <img src={closeIcon} alt="close-icon" />
    </button>
  );
}
