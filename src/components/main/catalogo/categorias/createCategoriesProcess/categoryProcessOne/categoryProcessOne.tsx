import { useState } from 'react';
import styles from './categoryProcess.module.css';
import { useDispatch } from 'react-redux';
import { createCategoryAction } from '../../../../../../redux/actions/catalogo/categoriesActions/createCategories';
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
    code: '05',
    categoryName: 'Moises',
  });
  const handleChange = (event) => {
    console.log(category);
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
        <h1 className={styles.tittle}>{children}</h1>
        <form className={styles.form}>
          <input
            type="text"
            placeholder="Clave"
            className={styles.input}
            name="code"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Nombre de la categoria"
            className={styles.input}
            name="categoryName"
            onChange={handleChange}
          />
        </form>
        <button
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
