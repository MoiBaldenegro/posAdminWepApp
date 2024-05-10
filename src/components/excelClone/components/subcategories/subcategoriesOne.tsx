// styles
import styles from './subCategoriesOne.module.css';
import Cell from '../cell/cell';
// Hooks
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const SubCategoryOne = ({
  rowData,
  rowIndex,
  istittle,
  fatherIndex,
  subcategoryOneIndex,
}) => {
  const { allCategories } = useSelector((state) => state.categories);

  const impData = [
    rowIndex,
    allCategories[fatherIndex]?.categoryName,
    rowData.categoryName,
    rowData.categoryName,
    rowData.categoryName,
    rowData.categoryName,
  ];

  useEffect(() => {
    console.log(allCategories[fatherIndex].categoryName);
  });

  return (
    <div className={styles.row}>
      {impData.map((cellData, colIndex) => (
        <Cell
          key={colIndex}
          value={cellData}
          row={rowIndex}
          col={colIndex}
          istittle={istittle}
        />
      ))}
    </div>
  );
};

export default SubCategoryOne;
