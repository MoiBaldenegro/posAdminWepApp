// styles
import { useEffect } from 'react';
import Cell from '../../cell/cell';
// Hooks
import { useSelector } from 'react-redux';

const SubCategoryThree = ({
  rowData,
  rowIndex,
  istittle,
  fatherIndex,
  subcategoryThreeIndex,
}) => {
  const { allCategories } = useSelector((state) => state.categories);

  const impData = [
    rowIndex,
    allCategories[fatherIndex].categoryName,
    allCategories[fatherIndex].subCategories[fatherIndex].categoryName,
    allCategories[fatherIndex].subCategories[fatherIndex]?.subCategories[
      fatherIndex + 1
    ]?.categoryName,
    rowData.categoryName,
    rowData.categoryName,
  ];
  useEffect(() => {
    console.log(`fatherIndex es ${fatherIndex + 1}, `);
  });
  return (
    <div>
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

export default SubCategoryThree;
