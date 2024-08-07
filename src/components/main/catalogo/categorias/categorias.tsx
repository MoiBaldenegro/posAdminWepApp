import styles from './categorias.module.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCategoriesAction,
  searchCategoriesAction,
} from '../../../../redux/actions/catalogo/categoriesActions/getCategories';
import deleteIcon from '../../../../assets/categorias/bloquedIcon.svg';
import enabledIcon from '../../../../assets/categorias/enabledIcon.svg';
import update from '../../../../assets/categorias/updateIcon.svg';
import exportIcon from '../../../../assets/categorias/exportIcon.svg';
import importIcon from '../../../../assets/categorias/importIcon.svg';
import createIcon from '../../../../assets/categorias/createIcon.svg';
import searchIcon from '../../../../assets/categorias/searchIcon.svg';
import UploadFiles from './modals/uploadCategories/uploadCategories';
import downArrow from '../../../../assets/public/downArrow.svg';
import AuthDiscontinueModal from '../../../modals/authDiscontinue/authDiscontinue';
import { useEffect } from 'react';
import { useModal } from '../../../../hooks/useModals';
import CreateCategories from './forms/createCategories/createCategory.form';
import SaveCategoriesModal from './modals/confirms/saveCategories';
import { discontinueCategoriesAction } from '../../../../redux/actions/catalogo/categoriesActions/discontinueCategories';
import UpdateOneCategory from './forms/updateCategory/updateOneCategory';
import ConfirmChangesModal from '../../../modals/confimChanges/confirmChanges';
import CategoryProcessOne from './createCategoriesProcess/categoryProcessOne/categoryProcessOne';

//hooks
import { useState } from 'react';

// Utils
import { toggleCategory } from './utils/categoryExpansion';
import ExportCategoriesModal from './modals/exportCategories/exportCategories';
import { updateCategoriesAction } from '../../../../redux/actions/catalogo/categoriesActions/updateCategories';
import CreateSubcategories from './createSubcategories/createSubcategories';

export default function Categorias() {
  // Modales
  const createCategory = useModal('createCategory');
  const createSubCategory = useModal('createSubCategory');
  const uploadCategories = useModal('uploadCategories');
  const saveCategories = useModal('saveCategories');
  const updateOneCategory = useModal('updateOneCategory');
  const AuthDiscontinue = useModal('AuthDiscontinue');
  const confirmChanges = useModal('confirmChanges');
  const exportCategories = useModal('exportCategories');
  const categoryProcessOne = useModal('categoryProcessOne');

  // States
  // Category expansion
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [buttonParams, setButtonParams] = useState();
  // UpdateOneCategory
  const [updateValue, setUpdateValue] = useState();
  const dispatch = useDispatch();
  const { allCategories, loading, error } = useSelector(
    (state) => state.categories,
  );

  const toggleStatus = () => {
    dispatch(
      discontinueCategoriesAction(
        buttonParams.id,
        buttonParams.body,
        buttonParams.path,
      ),
    );
  };

  function restoreStatus(id, body, path) {
    dispatch(discontinueCategoriesAction(id, body, path));
  }
  const updateCategory = (id, body, path) => {
    dispatch(updateCategoriesAction(id, body, path));
  };

  const handleChange = (event) => {
    event.preventDefault();
    const searchValue = event.target.value;
    if (searchValue.length < 1) {
      dispatch(getCategoriesAction());
    }
    dispatch(searchCategoriesAction(searchValue));
  };

  useEffect(() => {
    dispatch(getCategoriesAction());
  }, [expandedCategories]);

  return (
    <section className={styles.categorias}>
      <div className={styles.categoriasButtons}>
        <h2>Categorias</h2>
        <div className={styles.categoriesButtonsContainer}>
          <button
            className={styles.exportCategories}
            onClick={exportCategories.openModal}
          >
            <img src={exportIcon} alt="export-icon" />
            <span>Exportar categorias</span>
          </button>
          <ExportCategoriesModal
            isOpen={exportCategories.isOpen}
            onClose={exportCategories.closeModal}
          >
            Confirmar
          </ExportCategoriesModal>
          <button
            className={styles.importCategories}
            onClick={uploadCategories.openModal}
          >
            <img src={importIcon} alt="import-icon" />
            <span>Importar categorias</span>
          </button>
          {uploadCategories.isOpen &&
          uploadCategories.modalName === 'uploadCategories' ? (
            <UploadFiles
              openModal={saveCategories.openModal}
              isOpen={uploadCategories.isOpen}
              onClose={uploadCategories.closeModal}
            >
              Cargar archivo
            </UploadFiles>
          ) : null}
          <button
            className={styles.createCategories}
            onClick={createSubCategory.openModal}
          >
            <img src={createIcon} alt="create-icon" />
            <span>Crear Subcategoria</span>
          </button>
          <button
            className={styles.createCategories}
            onClick={categoryProcessOne.openModal}
          >
            <img src={createIcon} alt="create-icon" />
            <span>Crear categoria</span>
          </button>
          {createCategory.isOpen &&
          createCategory.modalName === 'createCategory' ? (
            <CreateCategories
              isOpen={createCategory.isOpen}
              onClose={createCategory.closeModal}
            >
              <strong>Crear categoria</strong>
            </CreateCategories>
          ) : null}
          {saveCategories.isOpen &&
          saveCategories.modalName === 'saveCategories' ? (
            <SaveCategoriesModal
              actionType={getCategoriesAction}
              isOpen={saveCategories.isOpen}
              onClose={saveCategories.closeModal}
            >
              Categorias guardadas
            </SaveCategoriesModal>
          ) : null}
          {updateOneCategory.isOpen &&
          updateOneCategory.modalName === 'updateOneCategory' ? (
            <UpdateOneCategory
              actionType={updateCategory}
              categoria={updateValue}
              isOpen={updateOneCategory.isOpen}
              onClose={updateOneCategory.closeModal}
              openModal={confirmChanges.openModal}
            >
              Editar Categoria
            </UpdateOneCategory>
          ) : null}
          {AuthDiscontinue.isOpen &&
          AuthDiscontinue.modalName === 'AuthDiscontinue' ? (
            <AuthDiscontinueModal
              handleStatus={toggleStatus}
              isOpen={AuthDiscontinue.isOpen}
              onClose={AuthDiscontinue.closeModal}
              openModal={confirmChanges.openModal}
            >
              Descontinuar categoria
            </AuthDiscontinueModal>
          ) : null}
        </div>
        {categoryProcessOne.isOpen &&
        categoryProcessOne.modalName === 'categoryProcessOne' ? (
          <CategoryProcessOne
            loading={loading}
            errors={error}
            isOpen={categoryProcessOne.isOpen}
            onClose={categoryProcessOne.closeModal}
            actionType={getCategoriesAction}
            openModal={confirmChanges.openModal}
          >
            Crear categoria
          </CategoryProcessOne>
        ) : null}
        {createSubCategory.isOpen &&
        createSubCategory.modalName === 'createSubCategory' ? (
          <CreateSubcategories
            loading={loading}
            errors={error}
            isOpen={createSubCategory.isOpen}
            onClose={createSubCategory.closeModal}
            actionType={getCategoriesAction}
            openModal={confirmChanges.openModal}
          >
            Crear Subcategoria
          </CreateSubcategories>
        ) : null}
        {confirmChanges.isOpen &&
        confirmChanges.modalName === 'confirmChanges' ? (
          <ConfirmChangesModal
            isOpen={confirmChanges.isOpen}
            onClose={confirmChanges.closeModal}
            actionType={getCategoriesAction}
            loading={loading}
            errors={error}
          >
            Cambios guardados
          </ConfirmChangesModal>
        ) : null}
      </div>
      <div className={styles.searchBarContainer}>
        <div className={styles.searchInputContainer}>
          <img
            src={searchIcon}
            alt="search-icon"
            className={styles.searchIcon}
          />
          <input
            type="text"
            className={styles.searchBar}
            placeholder="Buscar categoria"
            onChange={handleChange}
          />
        </div>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th className={styles.tHeadClave}>Clave</th>
              <th className={styles.tHeadCategoria}>Categoría</th>
              <th className={styles.tHeadDate}>Última Actualización</th>
              <th className={styles.tHeadActions}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {allCategories?.map((categoria, index) => (
              <React.Fragment key={index}>
                <tr
                  className={
                    categoria.status === 'disabled'
                      ? styles.rowDisabled
                      : styles.release
                  }
                >
                  <td className={styles.tableRows}>{categoria.code}</td>
                  <td className={styles.tableRows}>
                    {categoria.categoryName}
                    {categoria.subCategories &&
                    categoria.subCategories.length > 0 &&
                    categoria.status !== 'disabled' ? (
                      <img
                        src={downArrow}
                        alt="down-arrow-icon"
                        className={styles.downArrow}
                        onClick={() =>
                          toggleCategory({
                            categoryId: categoria._id,
                            setExpandedCategories,
                          })
                        }
                      />
                    ) : null}
                  </td>
                  <td className={styles.tableRows}>{categoria.createdAt}</td>
                  <td className={styles.buttonsContainer}>
                    {categoria.status === 'enabled' ? (
                      <>
                        <button
                          className={styles.actionButtonsFirst}
                          onClick={() => {
                            updateOneCategory.openModal();
                            setUpdateValue({
                              id: categoria._id,
                              body: categoria.categoryName,
                              path: 'categories',
                            });
                          }}
                        >
                          <img src={update} alt="update-icon" />
                        </button>
                        <button
                          className={styles.actionButtonsSecond}
                          onClick={() => {
                            AuthDiscontinue.openModal();
                            setButtonParams({
                              id: categoria._id,
                              body: categoria.status,
                              path: 'categories',
                            });
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
                            restoreStatus(
                              categoria._id,
                              categoria.status,
                              'categories',
                            );
                          }}
                        >
                          <img src={enabledIcon} alt="enabled-icon" />
                        </button>
                      </>
                    )}
                  </td>
                </tr>
                {expandedCategories.includes(categoria._id) &&
                  categoria.subCategories &&
                  categoria.status !== 'disabled' && (
                    <>
                      {categoria.subCategories?.map((subCategory, subIndex) => (
                        <React.Fragment key={subIndex}>
                          <tr
                            key={subIndex}
                            className={
                              subCategory.status === 'disabled'
                                ? styles.rowDisabled
                                : styles.subCategoryRow
                            }
                          >
                            <td className={styles.tableRows}>
                              {subCategory.code}
                            </td>
                            <td className={styles.tableRowsNameOne}>
                              {subCategory.name}
                              {subCategory.subCategories &&
                              subCategory.subCategories.length > 0 &&
                              subCategory.status !== 'disabled' ? (
                                <img
                                  src={downArrow}
                                  alt="down-arrow-icon"
                                  className={styles.downArrow}
                                  onClick={() =>
                                    toggleCategory({
                                      categoryId: subCategory._id,
                                      setExpandedCategories,
                                    })
                                  }
                                />
                              ) : null}
                            </td>
                            <td className={styles.tableRows}>
                              {categoria.createdAt}
                            </td>
                            <td className={styles.buttonsContainer}>
                              {subCategory.status === 'enabled' ? (
                                <>
                                  <button
                                    className={styles.actionButtonsFirst}
                                    onClick={() => {
                                      updateOneCategory.openModal();
                                      setUpdateValue({
                                        id: subCategory._id,
                                        body: subCategory.categoryName,
                                        path: 'subcategory-one',
                                      });
                                    }}
                                  >
                                    <img src={update} alt="update-icon" />
                                  </button>
                                  <button
                                    className={styles.actionButtonsSecond}
                                    onClick={() => {
                                      AuthDiscontinue.openModal();
                                      setButtonParams({
                                        id: subCategory._id,
                                        body: subCategory.status,
                                        path: 'subcategory-one',
                                      });
                                    }}
                                  >
                                    <img src={deleteIcon} alt="delete-icon" />
                                  </button>
                                </>
                              ) : (
                                <>
                                  <button
                                    className={styles.actionButtonsFirstEnabled}
                                  >
                                    <img src={update} alt="update-icon" />
                                  </button>
                                  <button
                                    className={styles.actionButtonsSecond}
                                    onClick={() => {
                                      restoreStatus(
                                        subCategory._id,
                                        subCategory.status,
                                        'subcategory-one',
                                      );
                                    }}
                                  >
                                    <img src={enabledIcon} alt="enabled-icon" />
                                  </button>
                                </>
                              )}
                            </td>
                          </tr>
                        </React.Fragment>
                      ))}
                    </>
                  )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
