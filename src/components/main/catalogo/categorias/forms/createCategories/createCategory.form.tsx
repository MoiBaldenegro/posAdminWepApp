import styles from './createCategories.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// icons
import { createCategoryAction } from '../../../../../../redux/actions/catalogo/categoriesActions/createCategories';
import TableExcels from '../../../../../excelClone/tableExcel';

interface Props {
  isOpen: any;
  onClose: any;
  children: any;
}
function CreateCategories({ isOpen, onClose, children }: Props) {
  const dispatch = useDispatch();
  const [category, setCategory] = useState({
    code: '25',
    categoryName: 'sdfgsdfgfsdf',
    subCategories: [
      {
        code: '02',
        categoryName: 'Subcategoría 1',
      },
      {
        code: '03',
        categoryName: 'Subcategoría 2',
      },
    ],
    parentCategory: null,
    status: 'enabled',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCategory({
      ...category,
      [name]: value,
    });
  };
  const onSubmit = () => {
    dispatch(createCategoryAction(category));
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <TableExcels />
      </div>
    </div>
  );
}
// new commit

export default CreateCategories;
