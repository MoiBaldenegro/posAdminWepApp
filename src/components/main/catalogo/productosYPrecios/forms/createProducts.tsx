import styles from './createProducts.module.css';
// Hooks
import { useState } from 'react';
//Icons
import arrowRigth from './../../../../../assets/public/arrowRigth.svg';
import { useDispatch } from 'react-redux';
import { createProductsAndPrices } from '../../../../../redux/actions/catalogo/productsAndpricesActions/createProduct';
interface Props {
  openModal: () => void;
  isOpen: any;
  onClose: any;
  children: any;
}
export default function CreateProductsModal({
  openModal,
  isOpen,
  onClose,
  children,
}: Props) {
  const [toggleStatus, setToggleStatus] = useState(false);
  const [product, setProduct] = useState({
    code: 'ABC123',
    category: 'Electronics',
    productName: 'Smartphone',
    priceInSite: '499.99',
    priceToGo: '449.99',
    priceCallOrder: '459.99',
    priceDelivery: '479.99',
    status: 'enabled',
  });

  const handleChange = (name, event) => {
    console.log(product);
    setProduct({
      ...product,
      [name]: event.target.value,
    });
  };

  const dispatch = useDispatch();
  return (
    <div className={styles.screen}>
      <section className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <h1
          className={styles.tittle}
          style={{ marginLeft: '200px', marginTop: '25px' }}
        >
          {children}
        </h1>
        <div className={styles.tittleContainer}>
          <form action="" className={styles.form}>
            <input
              type="text"
              className={styles.input}
              placeholder="Categoria"
              onChange={(e) => {
                handleChange('category', e);
              }}
            />
            <input
              type="text"
              className={styles.input}
              placeholder="code"
              onChange={(e) => {
                handleChange('code', e);
              }}
            />
            <input
              type="text"
              className={styles.input}
              placeholder="Nombre del producto"
              onChange={(e) => {
                handleChange('productName', e);
              }}
            />
            <input
              type="number"
              className={styles.input}
              placeholder="Precio"
              onChange={(e) => {
                handleChange('priceInSite', e);
              }}
            />
          </form>
        </div>
        <button
          className={styles.nextButton}
          onClick={() => {
            dispatch(createProductsAndPrices(product)), openModal(), onClose();
          }}
        >
          Siguiente
          <img src={arrowRigth} alt="arrow-rigth" />
        </button>
      </section>
    </div>
  );
}

{
  /*   


<h1 className={styles.tittle}>{children}</h1>
          <span className={styles.textTittle}>
            Seleccione la categoría a la que se asignarán los productos.
          </span>
        </div>
        <div className={styles.containerInput}>
          <div className={styles.categoriesSelect}>
            <div
              className={styles.customSelect}
              onClick={() => {
                setToggleStatus(!toggleStatus);
              }}
            >
              <div className={styles.selectTrigger}>
                <span>Categorias</span>
                <img src={arrow} alt="" className={styles.arrowSelect} />
              </div>
              <div className={toggleStatus ? styles.options : styles.hidden}>
                <span className={styles.option}>Options</span>
                <span className={styles.option}> Option</span>
                <span className={styles.option}>Option</span>
              </div>
            </div>
          </div>






*/
}
