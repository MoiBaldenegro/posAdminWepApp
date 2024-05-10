// styles
import { useEffect } from 'react';
// Hooks
import { useSelector } from 'react-redux';
import Cell from '../../cell/cell';

const SubCategoryFour = ({
  rowData,
  rowIndex,
  istittle,
  fatherIndex,
  subcategoryFourIndex,
}) => {
  const { allCategories } = useSelector((state) => state.categories);

  const impData = [
    rowIndex,
    allCategories[fatherIndex].categoryName,
    allCategories[fatherIndex].subCategories[fatherIndex].categoryName,
    allCategories[fatherIndex].subCategories[fatherIndex]?.subCategories[
      fatherIndex + 1
    ]?.categoryName,
    allCategories[fatherIndex].subCategories[fatherIndex]?.subCategories[
      fatherIndex + 1
    ]?.subCategories[fatherIndex]?.categoryName,
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

export default SubCategoryFour;
