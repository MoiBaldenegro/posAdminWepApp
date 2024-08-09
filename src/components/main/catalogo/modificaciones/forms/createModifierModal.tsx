import { useState } from 'react';
import styles from './createModifier.module.css';
import { useDispatch } from 'react-redux';
import { createModifiersAction } from '../../../../../redux/actions/catalogo/modifiersActions/createModifiers';
import disquetIcon from '../../../../../assets/public/disquetIcon.svg';
import closeIcon from '../../../../../assets/public/closeIcon.svg';
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
    modifierName: '',
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
          <img src={closeIcon} alt="close-icon" />
        </button>
        <h1 className={styles.tittle}>{children}</h1>
        <p>
          {' '}
          Solo ingrese el nombre del modificador. Las palabras con, sin, poco y
          mucho serán agregadas automáticamente en el punto de venta.
        </p>
        <form className={styles.form}>
          <input
            className={styles.input}
            type="text"
            placeholder="Nombre del modificador"
            name="modifierName"
            onChange={handleChange}
          />
        </form>
        <div className={styles.buttonsFooter}>
          <button
            disabled={modifier.modifierName.length < 1}
            className={styles.button}
            onClick={() => {
              dispatch(createModifiersAction(modifier)), openModal(), onClose();
            }}
          >
            <img src={disquetIcon} alt="save-icon" />
            Guardar
          </button>
        </div>
      </section>
    </div>
  );
}
