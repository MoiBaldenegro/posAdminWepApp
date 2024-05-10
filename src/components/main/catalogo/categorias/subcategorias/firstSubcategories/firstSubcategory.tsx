import styles from './firstSubcategory.module.css';
// Hooks
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Actions
import { getCategoriesAction } from '../../../../../../redux/actions/catalogo/categoriesActions/getCategories';
export default function FirstSubcategories() {
  const dispatch = useDispatch();
  const { allCategories } = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(getCategoriesAction());
    console.log(allCategories[0].subCategories[0]);
  }, []);

  return (
    <div>
      {allCategories.subCategories?.map((element, index) => (
        <h1 key={index}>{element.categoryName}</h1>
      ))}
    </div>
  );
}
