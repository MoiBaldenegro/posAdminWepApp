import { useState } from 'react';
import styles from './categoryProcess.module.css';
import { useDispatch } from 'react-redux';
import { createCategoryAction } from '../../../../../../redux/actions/catalogo/categoriesActions/createCategories';
import disquetIcon from '@/assets/public/disquetIcon.svg';
import closeIcon from '@/assets/public/closeIcon.svg';
interface Props {
  openModal: any;
  actionType: () => void;
  loading: any;
  errors: any;
  isOpen: any;
  onClose: any;
  children: any;
}
export default function CategoryProcessOne({
  actionType,
  openModal,
  isOpen,
  onClose,
  children,
}: Props) {
  const [category, setCategory] = useState({
    categoryName: '',
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCategory({
      ...category,
      [name]: value,
    });
  };
  const dispatch = useDispatch();
  return (
    <div className={styles.screen}>
      <section className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          <img src={closeIcon} alt="close-icon" />
        </button>
        <form className={styles.form}>
          <h1 className={styles.tittle}>{children}</h1>
          <input
            type="text"
            placeholder="Nombre de la categoria"
            className={styles.input}
            name="categoryName"
            onChange={handleChange}
          />
        </form>
        <button
          disabled={category.categoryName === '' ? true : false}
          className={styles.button}
          onClick={() => {
            dispatch(createCategoryAction(category)), openModal(), onClose();
          }}
        >
          <img src={disquetIcon} alt="save-icon" />
          Agregar categoria
        </button>
      </section>
    </div>
  );
}
