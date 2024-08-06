import styles from './createProducts.module.css';
// Hooks
import { useState } from 'react';
//Icons
import arrowRigth from './../../../../../assets/public/arrowRigth.svg';
import { useDispatch, useSelector } from 'react-redux';
import { createProductsAndPrices } from '../../../../../redux/actions/catalogo/productsAndpricesActions/createProduct';
import closeIcon from '@/assets/public/closeIcon.svg';
import arrow from '@/assets/public/arrow.svg';
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
  enum ProcesStatus {
    FIRST_PROCESS = 'FIRST_PROCESS',
    SECOND_PROCESS = 'SECOND_PROCESS',
  }
  const [processStatus, setProcessStatus] = useState<ProcesStatus>(
    ProcesStatus.FIRST_PROCESS,
  );
  const [category, setCategory] = useState({});
  const [subcategory, setSubcategory] = useState({});
  const categoryList = useSelector((state) => state.categories.allCategories);
  // const categoryList = useSelector((state) => state.categories.allCategories);

  const [toggleCategory, setToggleCategory] = useState(false);
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
        <div className={styles.head}>
          <button className={styles.closeButton} onClick={onClose}>
            <img src={closeIcon} alt="close-icon" />
          </button>
          <h2 className={styles.tittle}>{children}</h2>
          <p>Seleccione la categoría a la que se asignarán los productos.</p>
        </div>
        {processStatus === ProcesStatus.FIRST_PROCESS ? (
          <div>
            <div className={styles.containerInput}>
              <div className={styles.categoriesSelect}>
                <div
                  className={styles.customSelect}
                  onClick={() => {
                    setToggleCategory(!toggleCategory);
                  }}
                >
                  <div className={styles.selectTrigger}>
                    <span>
                      {category.categoryName
                        ? category.categoryName
                        : 'Seleccione una categoría'}
                    </span>
                    <img
                      src={arrow}
                      alt="arrow-icon"
                      className={styles.arrowSelect}
                    />
                  </div>
                  <div
                    className={toggleCategory ? styles.options : styles.hidden}
                  >
                    {categoryList.map((element: any, index: number) => (
                      <span
                        onClick={() => setCategory(element)}
                        className={styles.option}
                        key={index}
                      >
                        {element.categoryName}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <> Process 2</>
        )}
        <div className={styles.nextButton}>
          {processStatus === ProcesStatus.FIRST_PROCESS ? (
            <button
              onClick={() => {
                setProcessStatus(ProcesStatus.SECOND_PROCESS);
              }}
            >
              Siguiente
              <img src={arrowRigth} alt="arrow-rigth" />
            </button>
          ) : (
            <button
              onClick={() => setProcessStatus(ProcesStatus.FIRST_PROCESS)}
            >
              Regresar
              <img src={arrowRigth} alt="arrow-rigth" />
            </button>
          )}
        </div>
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
