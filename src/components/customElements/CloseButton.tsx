import closeIcon from '@/assets/public/closeIcon.svg';
import styles from './ComponentStyle.module.css';

interface Props {
  onClose: () => void;
}

export default function CloseButton({ onClose }: Props) {
  return (
    <button className={styles.closeButton} onClick={onClose}>
      <img src={closeIcon} alt="close-icon" />
    </button>
  );
}
