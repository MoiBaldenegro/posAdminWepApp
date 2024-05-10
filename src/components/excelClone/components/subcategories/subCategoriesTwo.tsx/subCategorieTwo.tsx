// styles
import Cell from '../../cell/cell';
import styles from './subCategoriesTwo.module.css';
// Hooks
import { useSelector } from 'react-redux';

const SubCategoryTwo = ({
  rowData,
  rowIndex,
  istittle,
  fatherIndex,
  subcategoryTwoIndex,
}) => {
  const { allCategories } = useSelector((state) => state.categories);

  const impData = [
    rowIndex,
    allCategories[fatherIndex].categoryName,
    allCategories[fatherIndex].subCategories[fatherIndex].categoryName,
    rowData.categoryName,
    rowData.categoryName,
    rowData.categoryName,
  ];

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

export default SubCategoryTwo;
