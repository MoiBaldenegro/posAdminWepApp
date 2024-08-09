import styles from './createProducts.module.css';
// Hooks
import { useEffect, useState } from 'react';
//Icons
import arrowRigth from './../../../../../assets/public/arrowRigth.svg';
import { useDispatch, useSelector } from 'react-redux';
import arrow from '@/assets/public/arrow.svg';
import arrowLeft from '@/assets/public/arrowLeft.svg';
import { useSubcategoriesStore } from '@/zstore/subcategories.store';
import CloseButton from '@/components/customElements/CloseButton';

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
  const [category, setCategory] = useState();
  const [subcategory, setSubcategory] = useState();
  const categoryList = useSelector((state) => state.categories.allCategories);

  const [toggleCategory, setToggleCategory] = useState(false);
  const [toggleSubCategory, setToggleSubCategory] = useState(false);
  const [product, setProduct] = useState([
    {
      code: 'ABC123',
      category: 'Electronics',
      productName: 'Smartphone',
      priceInSite: '499.99',
      priceToGo: '449.99',
      priceCallOrder: '459.99',
      priceDelivery: '479.99',
      status: 'enabled',
    },
    {
      code: 'ABC123',
      category: 'Electronics',
      productName: 'Smartphone',
      priceInSite: '499.99',
      priceToGo: '449.99',
      priceCallOrder: '459.99',
      priceDelivery: '479.99',
      status: 'enabled',
    },
    {
      code: 'ABC123',
      category: 'Electronics',
      productName: 'Smartphone',
      priceInSite: '499.99',
      priceToGo: '449.99',
      priceCallOrder: '459.99',
      priceDelivery: '479.99',
      status: 'enabled',
    },
    {
      code: 'ABC123',
      category: 'Electronics',
      productName: 'Smartphone',
      priceInSite: '499.99',
      priceToGo: '449.99',
      priceCallOrder: '459.99',
      priceDelivery: '479.99',
      status: 'enabled',
    },
    {
      code: 'ABC123',
      category: 'Electronics',
      productName: 'Smartphone',
      priceInSite: '499.99',
      priceToGo: '449.99',
      priceCallOrder: '459.99',
      priceDelivery: '479.99',
      status: 'enabled',
    },
    {
      code: 'ABC123',
      category: 'Electronics',
      productName: 'Smartphone',
      priceInSite: '499.99',
      priceToGo: '449.99',
      priceCallOrder: '459.99',
      priceDelivery: '479.99',
      status: 'enabled',
    },
    {
      code: 'ABC123',
      category: 'Electronics',
      productName: 'Smartphone',
      priceInSite: '499.99',
      priceToGo: '449.99',
      priceCallOrder: '459.99',
      priceDelivery: '479.99',
      status: 'enabled',
    },
    {
      code: 'ABC123',
      category: 'Electronics',
      productName: 'Smartphone',
      priceInSite: '499.99',
      priceToGo: '449.99',
      priceCallOrder: '459.99',
      priceDelivery: '479.99',
      status: 'enabled',
    },
    {
      code: 'ABC123',
      category: 'Electronics',
      productName: 'Smartphone',
      priceInSite: '499.99',
      priceToGo: '449.99',
      priceCallOrder: '459.99',
      priceDelivery: '479.99',
      status: 'enabled',
    },
    {
      code: 'ABC123',
      category: 'Electronics',
      productName: 'Smartphone',
      priceInSite: '499.99',
      priceToGo: '449.99',
      priceCallOrder: '459.99',
      priceDelivery: '479.99',
      status: 'enabled',
    },
    {
      code: 'ABC123',
      category: 'Electronics',
      productName: 'Smartphone',
      priceInSite: '499.99',
      priceToGo: '449.99',
      priceCallOrder: '459.99',
      priceDelivery: '479.99',
      status: 'enabled',
    },
    {
      code: 'ABC123',
      category: 'Electronics',
      productName: 'Smartphone',
      priceInSite: '499.99',
      priceToGo: '449.99',
      priceCallOrder: '459.99',
      priceDelivery: '479.99',
      status: 'enabled',
    },
    {
      code: 'ABC123',
      category: 'Electronics',
      productName: 'Smartphone',
      priceInSite: '499.99',
      priceToGo: '449.99',
      priceCallOrder: '459.99',
      priceDelivery: '479.99',
      status: 'enabled',
    },
    {
      code: 'ABC123',
      category: 'Electronics',
      productName: 'Smartphone',
      priceInSite: '499.99',
      priceToGo: '449.99',
      priceCallOrder: '459.99',
      priceDelivery: '479.99',
      status: 'enabled',
    },
    {
      code: 'ABC123',
      category: 'Electronics',
      productName: 'Smartphone',
      priceInSite: '499.99',
      priceToGo: '449.99',
      priceCallOrder: '459.99',
      priceDelivery: '479.99',
      status: 'enabled',
    },
    {
      code: 'ABC123',
      category: 'Electronics',
      productName: 'Smartphone',
      priceInSite: '499.99',
      priceToGo: '449.99',
      priceCallOrder: '459.99',
      priceDelivery: '479.99',
      status: 'enabled',
    },
    {
      code: 'ABC123',
      category: 'Electronics',
      productName: 'Smartphone',
      priceInSite: '499.99',
      priceToGo: '449.99',
      priceCallOrder: '459.99',
      priceDelivery: '479.99',
      status: 'enabled',
    },
    {
      code: 'ABC123',
      category: 'Electronics',
      productName: 'Smartphone',
      priceInSite: '499.99',
      priceToGo: '449.99',
      priceCallOrder: '459.99',
      priceDelivery: '479.99',
      status: 'enabled',
    },
    {
      code: 'ABC123',
      category: 'Electronics',
      productName: 'Smartphone',
      priceInSite: '499.99',
      priceToGo: '449.99',
      priceCallOrder: '459.99',
      priceDelivery: '479.99',
      status: 'enabled',
    },
    {
      code: 'ABC123',
      category: 'Electronics',
      productName: 'Smartphone',
      priceInSite: '499.99',
      priceToGo: '449.99',
      priceCallOrder: '459.99',
      priceDelivery: '479.99',
      status: 'enabled',
    },
    {
      code: 'ABC123',
      category: 'Electronics',
      productName: 'Smartphone',
      priceInSite: '499.99',
      priceToGo: '449.99',
      priceCallOrder: '459.99',
      priceDelivery: '479.99',
      status: 'enabled',
    },
    {
      code: 'ABC123',
      category: 'Electronics',
      productName: 'Smartphone',
      priceInSite: '499.99',
      priceToGo: '449.99',
      priceCallOrder: '459.99',
      priceDelivery: '479.99',
      status: 'enabled',
    },
    {
      code: 'ABC123',
      category: 'Electronics',
      productName: 'Smartphone',
      priceInSite: '499.99',
      priceToGo: '449.99',
      priceCallOrder: '459.99',
      priceDelivery: '479.99',
      status: 'enabled',
    },
    {
      code: 'ABC123',
      category: 'Electronics',
      productName: 'Smartphone',
      priceInSite: '499.99',
      priceToGo: '449.99',
      priceCallOrder: '459.99',
      priceDelivery: '479.99',
      status: 'enabled',
    },
  ]);

  const TABLE_COLUMNS = [
    '',
    'Producto',
    'Restaurante',
    'Rappi',
    'Didi Food',
    'Uber Eats',
    'Para llevar',
    'Telefónico',
    'Precio 7',
    'Precio 8',
    'Precio 9',
    'Precio 10',
  ];
  const TABLE_ROWS = product?.length + 1 ?? 1;

  const handleChange = (name, event) => {
    console.log(product);
    setProduct({
      ...product,
      [name]: event.target.value,
    });
  };
  const getSubcategories = useSubcategoriesStore(
    (state) => state.getSubcategories,
  );

  const subCategoriesArray = useSubcategoriesStore(
    (state) => state.subCategoriesArray,
  );
  // Crear la variable managementSubCategories
  const managementSubCategories = subCategoriesArray.filter((subCategory) =>
    category?.subCategories?.some((element) => element._id === subCategory._id),
  );

  const dispatch = useDispatch();

  useEffect(() => {
    getSubcategories();
  }, [category]);

  return (
    <div className={styles.screen}>
      {processStatus === ProcesStatus.FIRST_PROCESS ? (
        <section className={styles.modal}>
          <CloseButton onClose={onClose} />
          <div className={styles.head}>
            <h2 className={styles.tittle}>{children}</h2>
            <p>Seleccione la categoría a la que se asignarán los productos.</p>
          </div>

          <div className={styles.containerSelects}>
            <div className={styles.containerInput}>
              <div className={styles.categoriesSelect}>
                <div
                  className={styles.customSelect}
                  onClick={() => {
                    setToggleCategory(!toggleCategory);
                    setToggleSubCategory(false);
                  }}
                >
                  <div className={styles.selectTrigger}>
                    <span>
                      {category?.categoryName
                        ? category?.categoryName
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
                        onClick={() => {
                          setCategory(element);
                        }}
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
            <div className={styles.containerInput}>
              <div className={styles.categoriesSelect}>
                <div
                  className={styles.customSelect}
                  onClick={() => {
                    setToggleSubCategory(!toggleSubCategory);
                    setToggleCategory(false);
                  }}
                >
                  <div className={styles.selectTrigger}>
                    <span>
                      {subcategory?.name ?? 'Seleccione una subcategoría'}
                    </span>
                    <img src={arrow} alt="" className={styles.arrowSelect} />
                  </div>
                  <div
                    className={
                      toggleSubCategory ? styles.options : styles.hidden
                    }
                  >
                    {managementSubCategories.map((element, index) => (
                      <span
                        onClick={() => {
                          setSubcategory(element);
                        }}
                        className={styles.option}
                        key={index}
                      >
                        {`${element.code} - ${element.name}`}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.nextButton}>
            <button
              disabled={!category || !subcategory}
              onClick={() => {
                setProcessStatus(ProcesStatus.SECOND_PROCESS);
              }}
            >
              Siguiente
              <img src={arrowRigth} alt="arrow-rigth" />
            </button>
          </div>
        </section>
      ) : (
        <section className={styles.procesTwo}>
          <CloseButton onClose={onClose} />
          <header>
            <h3>{`Crear productos en ${subcategory.name}`}</h3>
          </header>
          <div className={styles.tableContainer}>
            <div>
              {TABLE_COLUMNS.map((column, index) => (
                <div className={styles.thead} key={index}>
                  {column}
                </div>
              ))}
            </div>
            <div>
              {product.map((product, index) => (
                <div className={styles.row} key={index}>
                  <span>{index + 1}</span>
                  <span>{product.productName}</span>
                  <span>{product.category}</span>
                  <span>{product.priceInSite}</span>
                  <span>{product.priceToGo}</span>
                  <span>{product.priceCallOrder}</span>
                  <span>{product.priceDelivery}</span>
                  <span>{product.status}</span>
                  <span>{product.priceToGo}</span>
                  <span>{product.priceCallOrder}</span>
                  <span>{product.priceDelivery}</span>
                  <span>{product.status}</span>
                </div>
              ))}
            </div>
          </div>
          <button onClick={() => setProcessStatus(ProcesStatus.FIRST_PROCESS)}>
            <img src={arrowLeft} alt="arrow-left" />
            Regresar
          </button>
        </section>
      )}
    </div>
  );
}
