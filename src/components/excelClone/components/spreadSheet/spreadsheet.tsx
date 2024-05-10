// Styles
import styles from './spreadsheet.module.css';
import { useDispatch, useSelector } from 'react-redux';
import Column from '../column/column';
import SubCategoryOne from '../subcategories/subcategoriesOne';
import Row from '../row/row';
import SubCategoryTwo from '../subcategories/subCategoriesTwo.tsx/subCategorieTwo';
import SubCategoryThree from '../subcategories/subCategoriesThree/subCategoriesThree';
import SubCategoryFour from '../subcategories/subCategoriesFour.tsx/subCategoriesFour';

const Spreadsheet = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.spreadsheet.data);
  const { allCategories } = useSelector((state) => state.categories);

  const head = [
    '',
    'Categoría principal',
    'Subcategoria 1',
    'Subcategoria 2',
    'Subcategoria 3',
    'Subcategoria 4',
  ];

  return (
    <div className={styles.spreadsheet}>
      <Column colData={head.map((rowData) => rowData)} />
      {allCategories?.map((categoryData, categoryIndex) => (
        <>
          {categoryData.subCategories?.length <= 0 && (
            <Row
              rowIndex={categoryIndex}
              key={categoryIndex}
              rowData={categoryData}
              istittle={false}
              fatherIndex={categoryIndex}
              subIndexTwo={categoryIndex}
            />
          )}

          {categoryData.subCategories?.map((childData, childIndex) => (
            <>
              {childData.SubCategories?.length <= 0 && (
                <SubCategoryOne
                  rowIndex={childIndex}
                  key={childIndex}
                  rowData={childData}
                  istittle={false}
                  fatherIndex={categoryIndex}
                  subcategoryOneIndex={childIndex}
                />
              )}
              {childData.subCategories?.map((childDataTwo, childIndexTwo) => (
                <>
                  {childDataTwo.subCategories?.length <= 0 && (
                    <SubCategoryTwo
                      rowIndex={childIndexTwo}
                      key={childIndexTwo}
                      rowData={childDataTwo}
                      istittle={false}
                      fatherIndex={childIndex}
                      subcategoryTwoIndex={childIndexTwo}
                    />
                  )}

                  {childDataTwo.subCategories?.map(
                    (childDataThree, childIndexThree) => (
                      <>
                        {childDataThree.subCategories?.length <= 0 && (
                          <SubCategoryThree
                            rowIndex={childIndexThree}
                            key={childIndexThree}
                            rowData={childDataThree}
                            istittle={false}
                            fatherIndex={childIndexTwo - 1} // El enigma sin resolver M16
                            subcategoryThreeIndex={childIndexThree}
                          />
                        )}

                        {childDataThree.subCategories?.map(
                          (childDataFour, childIndexFour) => (
                            <SubCategoryFour
                              rowIndex={childIndexFour}
                              key={childIndexFour}
                              rowData={childDataFour}
                              istittle={false}
                              fatherIndex={childIndexThree} // El enigma sin resolver M16
                              subcategoryFourIndex={childIndexFour}
                            />
                          ),
                        )}
                      </>
                    ),
                  )}
                </>
              ))}
            </>
          ))}
        </>
      ))}
    </div>
  );
};
export default Spreadsheet;
