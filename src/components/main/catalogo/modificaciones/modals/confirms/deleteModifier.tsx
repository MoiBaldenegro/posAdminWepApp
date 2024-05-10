import { useDispatch, useSelector } from 'react-redux';
import styles from '../../../categorias/modals/confirms/saveCategories.module.css';
import notFoundIcon from '../../../../../../assets/public/notFoundIcon.svg';

interface Props {
  isOpen: any;
  onClose: any;
  children: any;
  actionType: () => void;
}

export default function DeletedModifierModal({
  isOpen,
  onClose,
  children,
  actionType,
}: Props) {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.modifiers);
  const { error } = useSelector((state) => state.modifiers);

  if (!isOpen) return null;
  if (!loading) {
    setTimeout(async () => {
      dispatch(actionType());
      onClose();
    }, 800);
  }
  return (
    <div className={styles.container}>
      {error ? (
        <div className={styles.modal}>
          <img src={notFoundIcon} alt="check-icon" />
          <h1 className={styles.tittle}>No se pudo eliminar el modificador</h1>
        </div>
      ) : null}
    </div>
  );
}
