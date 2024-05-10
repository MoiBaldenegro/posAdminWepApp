import styles from './menusYRecetas.module.css';
// Hook
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useModal } from '../../../../hooks/useModals';

// icons
import createIcon from '../../../../assets/public/createIcon.svg';
import update from '../../../../assets/public/updateIcon.svg';
import deleteIcon from '../../../../assets/public/bloquedIcon.svg';
import enabledIcon from '../../../../assets/public/enabledIcon.svg';
import eyeIcon from '../../../../assets/public/openEye.svg';

// import arrow from "../../../../assets/public/arrow.svg"
import filterIcon from '../../../../assets/public/filterIcon.svg';
import searchIcon from '../../../../assets/public/searchIcon.svg';
import { getMenusAction } from '../../../../redux/actions/catalogo/menusYRecipes/getMenu';
import { discontinueMenusAction } from '../../../../redux/actions/catalogo/menusYRecipes/discontinueMenus';
import CreateMenuModal from './forms/createMenu';
import ConfirmChangesModal from '../../../modals/confimChanges/confirmChanges';

export default function MenusYRecetas() {
  const dispatch = useDispatch();
  const { allMenus, loading, error } = useSelector((state) => state.menus);
  // MODALS
  const uploadMenus = useModal('uploadMenus');
  const saveMenus = useModal('saveMenus');
  const createMenu = useModal('createMenu');
  const confirmChanges = useModal('confirmChanges');

  const toggleStatus = (id, body) => {
    dispatch(discontinueMenusAction(id, body));
  };

  const week = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'];
  useEffect(() => {
    dispatch(getMenusAction());
  }, []);
  return (
    <div className={styles.container}>
      <section className={styles.head}>
        <h2>Menus y recetas</h2>
        <div>
          <button
            className={styles.btnHeadCreate}
            onClick={createMenu.openModal}
          >
            <img src={createIcon} alt="create-icon" />
            <span>Crear receta</span>
          </button>
          {createMenu.isOpen && createMenu.modalName === 'createMenu' ? (
            <CreateMenuModal
              isOpen={createMenu.isOpen}
              onClose={createMenu.closeModal}
              openModal={confirmChanges.openModal}
            >
              Crear Menu
            </CreateMenuModal>
          ) : null}
          {confirmChanges.isOpen &&
          confirmChanges.modalName === 'confirmChanges' ? (
            <ConfirmChangesModal
              loading={loading}
              errors={error}
              isOpen={confirmChanges.isOpen}
              onClose={confirmChanges.closeModal}
              actionType={getMenusAction}
            >
              Cambios guardados
            </ConfirmChangesModal>
          ) : null}
        </div>
      </section>
      <section className={styles.updateSection}>
        <div className={styles.leftSection}>
          <input
            type="text"
            placeholder="Nombre del producto"
            readOnly
            className={styles.productName}
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Clave"
            readOnly
            className={styles.clave}
          />
        </div>

        <div className={styles.weekContainer}>
          <span>Disponibilidad</span>
          {week.map((day) => (
            <div className={styles.dayInput}>
              <input type="checkbox" className={styles.checkInput} />
              <label htmlFor="">{day}</label>
            </div>
          ))}
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
            <button className={styles.categoryButton}>
              <img src={filterIcon} alt="categories-button" />
              <span>Categorias</span>
            </button>
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
              <th className={styles.tHeadPorcion}>Porcion</th>
              <th className={styles.tHeadPrice}>Costo</th>
              <th className={styles.tHeadSuggestedPrice}>Precio sugerido</th>
              <th className={styles.tHeadUtility}>Utilidad</th>
              <th className={styles.tHeadActions}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {allMenus?.map((element, index) => (
              <tr
                key={index}
                className={
                  element.status === 'disabled'
                    ? styles.rowDisabled
                    : styles.release
                }
              >
                <td className={styles.tableRows}>{element.category}</td>
                <td className={styles.tableRows}>{element.code}</td>
                <td className={styles.tableRows}>{element.productName}</td>
                <td className={styles.tableRows}>{element.serving}</td>
                <td className={styles.tableRows}>{element.unit}</td>
                <td className={styles.tableRows}>{element.priceNotIVA}</td>
                <td className={styles.tableRows}>{element.recommendedPrice}</td>
                <td className={styles.buttonsContainer}>
                  <button className={styles.actionButtonsFirstDetails}>
                    <img src={eyeIcon} alt="open-eye-icon" />
                  </button>
                  {element.status === 'enabled' ? (
                    <>
                      <button className={styles.actionButtonsFirst}>
                        <img src={update} alt="update-icon" />
                      </button>
                      <button
                        className={styles.actionButtonsSecond}
                        onClick={() => {
                          toggleStatus(element._id, element.status);
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
                          toggleStatus(element._id, element.status);
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
