// styles
import styles from './productosYPrecios.module.css';
//hooks
import { useEffect, useState } from 'react';

// icons
import exportIcon from '../../../../assets/public/exportIcon.svg';
import importIcon from '../../../../assets/public/importIcon.svg';
import createIcon from '../../../../assets/public/createIcon.svg';
import helpIcon from '../../../../assets/public/helpIcon.svg';
import filterIcon from '../../../../assets/public/filterIcon.svg';
import searchIcon from '../../../../assets/public/searchIcon.svg';
import update from '../../../../assets/categorias/updateIcon.svg';
import deleteIcon from '../../../../assets/categorias/bloquedIcon.svg';
import enabledIcon from '../../../../assets/public/enabledIcon.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  getProductsAndPricesAction,
  searchProductsAndPricesAction,
} from '../../../../redux/actions/catalogo/productsAndpricesActions/getProductsAndPrices';
import { discontinueProductsAndPricesAction } from '../../../../redux/actions/catalogo/productsAndpricesActions/discontinueProductsAndPrices';
import { useModal } from '../../../../hooks/useModals';
import UploadFiles from '../../../forms/uploadFile/uploadFile';
import { createProductsAndPrices } from '../../../../redux/actions/catalogo/productsAndpricesActions/createProduct';
import CreateProductsModal from './forms/createProducts';
import { exportToExcel } from '../../../../utils/exporter';
import ConfirmChangesModal from '../../../modals/confimChanges/confirmChanges';
import { useSubcategoriesStore } from '@/zstore/subcategories.store';
import EditProducts from './editProducts/EditPtoducts';

export default function ProductosYPrecios() {
  const [product, setProduct] = useState({});
  // Modals
  const confirmChanges = useModal('confirmChanges');
  // Redux states
  const { allCategories } = useSelector((state) => state.categories);
  const { loading } = useSelector((state) => state.products);
  const { error } = useSelector((state) => state.products);
  // States
  const [activeSelect, setActiveSelect] = useState(false);
  const dispatch = useDispatch();
  const { allProductsAndPrices } = useSelector((state) => state.products);
  const toggleStatus = (id, body) => {
    dispatch(discontinueProductsAndPricesAction(id, body));
  };
  // MODALS
  const uploadProduct = useModal('uploadProduct');
  const saveProducts = useModal('saveProducts');
  const createProducts = useModal('createProducts');
  const editProducts = useModal('editProducts');
  // Events
  const handleChange = (event) => {
    event.preventDefault();
    const searchValue = event.target.value;
    if (searchValue.length < 1) {
      dispatch(getProductsAndPricesAction());
    }
    dispatch(searchProductsAndPricesAction(searchValue));
  };

  useEffect(() => {
    dispatch(getProductsAndPricesAction());
  }, []);

  return (
    <div className={styles.container}>
      <section className={styles.head}>
        <h2>Productos y precios</h2>
        <div>
          <button
            className={styles.btnHead}
            onClick={() => {
              exportToExcel(allProductsAndPrices);
            }}
          >
            <img src={exportIcon} alt="export-icon" />
            Exportar productos
          </button>
          <button className={styles.btnHead} onClick={uploadProduct.openModal}>
            <img src={importIcon} alt="import-icon" />
            Importar productos
          </button>
          <button
            className={styles.btnHeadCreate}
            onClick={createProducts.openModal}
          >
            <img src={createIcon} alt="create-icon" />
            <span>Crear producto</span>
          </button>
        </div>
        {uploadProduct.isOpen && uploadProduct.modalName === 'uploadProduct' ? (
          <UploadFiles
            openModal={saveProducts.openModal}
            isOpen={uploadProduct.isOpen}
            onClose={uploadProduct.closeModal}
            actionType={createProductsAndPrices}
          >
            Cargar plantilla de productos
          </UploadFiles>
        ) : null}
        {createProducts.isOpen &&
        createProducts.modalName === 'createProducts' ? (
          <CreateProductsModal
            isOpen={createProducts.isOpen}
            onClose={createProducts.closeModal}
            openModal={confirmChanges.openModal}
          >
            Crear producto
          </CreateProductsModal>
        ) : null}
        {confirmChanges.isOpen &&
        confirmChanges.modalName === 'confirmChanges' ? (
          <ConfirmChangesModal
            loading={loading}
            errors={error}
            isOpen={confirmChanges.isOpen}
            onClose={confirmChanges.closeModal}
            actionType={getProductsAndPricesAction}
          >
            Cambios guardados
          </ConfirmChangesModal>
        ) : null}
        {editProducts.isOpen && editProducts.modalName === 'editProducts' ? (
          <EditProducts
            isOpen={editProducts.isOpen}
            onClose={editProducts.closeModal}
            openModal={confirmChanges.openModal}
            product={product}
          >
            Editar productos
          </EditProducts>
        ) : null}
      </section>
      <section className={styles.updateSection}>
        <div className={styles.leftSection}>
          <input
            type="text"
            placeholder="Nombre del producto"
            readOnly
            className={styles.productName}
          />
          <div className={styles.selectContainer}>
            <input
              type="text"
              name=""
              id=""
              placeholder="Clave"
              readOnly
              className={styles.clave}
            />
            <select
              name=""
              id=""
              placeholder="Tipo de venta"
              className={styles.ventaTypesSelect}
            >
              <option className={styles.ventaTypesSelectOption} value="">
                Comedor
              </option>
              <option className={styles.ventaTypesSelectOption} value="">
                Mostrador
              </option>
              <option className={styles.ventaTypesSelectOption} value="">
                Rappi
              </option>
            </select>
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.inRightSection}>
            <div className={styles.impuesto}>
              <span className={styles.subTittle}>Costo sin impuesto</span>
              <img src={helpIcon} alt="help-icon" className={styles.iconItem} />
              <input
                type="text"
                value={'$0.00'}
                readOnly
                className={styles.inputItem}
              />
            </div>
            <div className={styles.price}>
              <span>Precio de venta</span>
              <input
                type="text"
                placeholder="$0.00"
                readOnly
                className={styles.inputItem}
              />
            </div>
          </div>
          <div className={styles.inRightSection}>
            <div className={styles.aumento}>
              <span className={styles.subTittle}>importe aumento</span>
              <div className={styles.btnContainerInput}>
                <input
                  type="text"
                  placeholder="$0.00"
                  className={styles.inputWithButton}
                />
                <button className={styles.buttonAument}>
                  <img src={createIcon} alt="" />
                </button>
              </div>
            </div>
            <div className={styles.porcentaje}>
              <span>Porcentaje de aumento</span>
              <div className={styles.btnContainerInput}>
                <input
                  type="text"
                  placeholder="0%"
                  className={styles.inputWithButton}
                />
                <button className={styles.buttonAument}>
                  <img src={createIcon} alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className={styles.inRightSection}>
            <div className={styles.margen}>
              <span>Margen de utilidad</span>
              <input
                type="text"
                placeholder="$0.00"
                className={styles.inputItem}
              />
            </div>
            <div className={styles.utility}>
              <span>Utilidad</span>
              <input
                type="text"
                placeholder="Precio de venta"
                readOnly
                className={styles.inputItem}
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.mainSection}>
        <div className={styles.mainHead}>
          <div className={styles.mainHeadLeft}>
            <span>Mostrar</span>
            <select name="" id="" className={styles.showSelect}>
              <option value="all">Todos</option>
              <option value="option-one">Option 1</option>
              <option value="optio-two">Option 2</option>
            </select>
            <span>Productos</span>
          </div>
          <div className={styles.searchContainer}>
            <div className={styles.containerInput}>
              <div className={styles.categoriesSelect}>
                <div className={styles.customSelect}>
                  <div
                    className={styles.selectTrigger}
                    onClick={() => setActiveSelect(!activeSelect)}
                  >
                    <img src={filterIcon} alt="filter-icon" />
                    <span>Categorias</span>
                  </div>
                  <div
                    className={activeSelect ? styles.options : styles.hidden}
                  >
                    {allCategories?.map((element) => (
                      <div className={styles.oneCategory}>
                        <span key={element._id} className={styles.option}>
                          {element.categoryName}
                        </span>
                        <div></div>
                        {element.subCategories?.map((item) => (
                          <div className={styles.twoCategory}>
                            <div className={styles.twoCategoryRight}>
                              <span key={item._id} className={styles.optionTwo}>
                                {item.categoryName}
                              </span>
                              {item.subCategories?.map((itemThree) => (
                                <div className={styles.threeCategory}>
                                  <span
                                    key={itemThree._id}
                                    className={styles.optionThree}
                                  >
                                    {itemThree.categoryName}
                                  </span>
                                  {itemThree.subCategories?.map((itemFour) => (
                                    <div className={styles.FourCategory}>
                                      <span
                                        key={itemFour._id}
                                        className={styles.optionFour}
                                      >
                                        {itemFour.categoryName}
                                      </span>
                                      {itemFour.subCategories?.map(
                                        (itemFive) => (
                                          <div className={styles.fiveCategory}>
                                            <span
                                              key={itemFive._id}
                                              className={styles.optionFive}
                                            >
                                              {itemFive.categoryName}
                                            </span>
                                          </div>
                                        ),
                                      )}
                                    </div>
                                  ))}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <button className={styles.sellTypeButton}>
              <img src={filterIcon} alt="sell-types" />
              <span>Tipo de venta</span>
            </button>
            <button className={styles.stateButton}>
              <img src={filterIcon} alt="state" />
              <span>Estado</span>
            </button>
            <div className={styles.searchBarTable}>
              <img
                src={searchIcon}
                alt="search-icon"
                className={styles.searchIcon}
              />
              <input
                type="text"
                className={styles.searchBarTableInput}
                placeholder="producto de ejemplo"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.tHeadCategoria}>Categoria</th>
              <th className={styles.tHeadClave}>Clave</th>
              <th className={styles.tHeadProducto}>Producto</th>
              <th className={styles.tHeadVenta}>Restaurante</th>
              <th className={styles.tHeadActions}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {allProductsAndPrices?.map((product) => (
              <tr
                key={product._id}
                className={
                  product.status === 'disabled'
                    ? styles.rowDisabled
                    : styles.release
                }
              >
                <td className={styles.tableRows}>{product.category}</td>
                <td className={styles.tableRows}>{product.code}</td>
                <td className={styles.tableRows}>{product.productName}</td>
                <td className={styles.tableRows}>{product.priceInSite}</td>
                <td className={styles.buttonsContainer}>
                  {product.status === 'enabled' ? (
                    <>
                      <button
                        onClick={() => {
                          editProducts.openModal();
                          setProduct(product);
                        }}
                        className={styles.actionButtonsFirst}
                      >
                        <img src={update} alt="update-icon" />
                      </button>
                      <button
                        className={styles.actionButtonsSecond}
                        onClick={() => {
                          toggleStatus(product._id, product.status);
                        }}
                      >
                        <img src={deleteIcon} alt="delete-icon" />
                      </button>
                    </>
                  ) : (
                    <>
                      <button className={styles.actionButtonsFirstEnabled}>
                        <img src={update} alt="update-icon" />
                      </button>
                      <button
                        className={styles.actionButtonsSecond}
                        onClick={() => {
                          toggleStatus(product._id, product.status);
                        }}
                      >
                        <img src={enabledIcon} alt="enabled-icon" />
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.tableFooter}></div>
      </section>
    </div>
  );
}
