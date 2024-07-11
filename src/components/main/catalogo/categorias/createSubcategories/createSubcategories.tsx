import { useState } from 'react';
import styles from './createSubcategories.module.css';
import { useDispatch } from 'react-redux';
interface Props {
  openModal: any;
  actionType: () => void;
  loading: any;
  errors: any;
  isOpen: any;
  onClose: any;
  children: any;
}
export default function CreateSubcategories({
  actionType,
  openModal,
  isOpen,
  onClose,
  children,
}: Props) {
  const [category, setCategory] = useState({
    code: '05',
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
          X
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
          Agregar categoria
        </button>
      </section>
    </div>
  );
}
