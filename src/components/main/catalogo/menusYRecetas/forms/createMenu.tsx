import { useState } from 'react';
import styles from './createMenu.module.css';
import { useDispatch } from 'react-redux';
import { createMenusAction } from '../../../../../redux/actions/catalogo/menusYRecipes/createMenu';
interface Props {
  openModal: any;
  isOpen: any;
  onClose: any;
  children: any;
}
export default function CreateMenuModal({
  isOpen,
  onClose,
  children,
  openModal,
}: Props) {
  const dispatch = useDispatch();
  const [recipe, setRecipe] = useState({
    category: 'Appetizers',
    code: 'AP001',
    productName: 'Spinach and Artichoke Dip',
    serving: '2 cups',
    unit: 'gr',
    priceNotIVA: '10.99',
    recommendedPrice: '12.99',
    status: 'enabled',
  });

  const handleChange = (event: any) => {
    console.log(recipe);
    const { name, value } = event.target;
    setRecipe({
      ...recipe,
      [name]: value,
    });
  };
  return (
    <div className={styles.screen}>
      <section className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <h1 className={styles.tittle}>{children}</h1>
        <form
          action="submit"
          className={styles.form}
          onSubmit={() => {
            dispatch(createMenusAction(recipe));
            openModal(), onClose();
          }}
        >
          <input
            type="text"
            name="category"
            onChange={handleChange}
            className={styles.input}
            placeholder="Categoria"
          />
          <input
            type="text"
            name="code"
            onChange={handleChange}
            className={styles.input}
            placeholder="Clave"
          />
          <input
            type="text"
            name="productName"
            onChange={handleChange}
            className={styles.input}
            placeholder="Nombre del producto"
          />
          <div className={styles.porcion}>
            <input
              type="number"
              name="serving"
              onChange={handleChange}
              className={styles.input}
              placeholder="Porcion"
            />
            <input
              type="text"
              name="unit"
              onChange={handleChange}
              className={styles.input}
              placeholder="Unidad"
            />
          </div>
          <input
            type="number"
            name="priceNotIVA"
            onChange={handleChange}
            className={styles.input}
            placeholder="Costo sin IVA"
          />
          <input
            type="number"
            name="recommendedPrice"
            onChange={handleChange}
            className={styles.input}
            placeholder="Precio sugerido"
          />
          <button className={styles.button}>Agregar receta</button>
        </form>
      </section>
    </div>
  );
}
