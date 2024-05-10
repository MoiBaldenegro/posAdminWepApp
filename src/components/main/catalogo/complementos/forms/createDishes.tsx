import styles from './createDishes.module.css';
// Hooks
import { useState } from 'react';
//Icons
import arrow from './../../../../../assets/public/arrow.svg';
import arrowRigth from './../../../../../assets/public/arrowRigth.svg';
import { useDispatch } from 'react-redux';
import { createDishesAction } from '../../../../../redux/actions/catalogo/dishesActions/createDishes';
interface Props {
  openModal: any;
  isOpen: any;
  onClose: any;
  children: any;
}
export default function CreateDishesModal({
  openModal,
  isOpen,
  onClose,
  children,
}: Props) {
  const dispatch = useDispatch();
  const [dish, setDish] = useState({
    category: 'Main Course',
    code: 'MC001',
    dishesName: 'Spaghetti Bolognese',
    priceInSite: 15.99,
    priceToGo: 16.99,
    priceCallOrder: 17.99,
    priceDelivery: 18.99,
    status: 'enabled',
  });

  const handleChage = (name, event) => {
    console.log(dish);
    setDish({
      ...dish,
      [name]: event.target.value,
    });
  };
  return (
    <div className={styles.screen}>
      <section className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <h1 className={styles.tittle}>{children}</h1>
        <form action="" className={styles.form}>
          <input
            type="text"
            className={styles.input}
            placeholder="Categoria"
            onChange={(e) => {
              handleChage('category', e);
            }}
          />
          <input
            type="text"
            className={styles.input}
            placeholder="Clave"
            onChange={(e) => {
              handleChage('code', e);
            }}
          />
          <input
            type="text"
            className={styles.input}
            placeholder="Nombre del complemento"
            onChange={(e) => {
              handleChage('dishesName', e);
            }}
          />
          <input
            type="number"
            className={styles.input}
            placeholder="Precio"
            onChange={(e) => {
              handleChage('priceToGo', e);
            }}
          />
        </form>
        <button
          className={styles.nextButton}
          onClick={() => {
            dispatch(createDishesAction(dish)), openModal(), onClose();
          }}
        >
          Siguiente
          <img src={arrowRigth} alt="arrow-rigth" />
        </button>
      </section>
    </div>
  );
}
