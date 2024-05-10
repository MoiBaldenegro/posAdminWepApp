import { useState } from 'react';
import styles from './createModifier.module.css';
import { useDispatch } from 'react-redux';
import { createModifiersAction } from '../../../../../redux/actions/catalogo/modifiersActions/createModifiers';
interface Props {
  openModal: any;
  isOpen: any;
  onClose: any;
  children: any;
}
export default function CreateModifierModal({
  openModal,
  isOpen,
  onClose,
  children,
}: Props) {
  const dispatch = useDispatch();
  const [modifier, setModifier] = useState({
    category: 'Toppings',
    modifierName: 'Cheese',
    status: 'enabled',
  });
  const handleChange = (event) => {
    console.log(modifier);
    const { name, value } = event.target;
    setModifier({
      ...modifier,
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
        <form className={styles.form}>
          <input
            className={styles.input}
            type="text"
            placeholder="Categoria"
            name="category"
            onChange={handleChange}
          />
          <input
            className={styles.input}
            type="text"
            placeholder="Nombre del modificador"
            name="modifierName"
            onChange={handleChange}
          />
        </form>
        <button
          className={styles.button}
          onClick={() => {
            dispatch(createModifiersAction(modifier)), openModal(), onClose();
          }}
        >
          Crear modificador
        </button>
      </section>
    </div>
  );
}
