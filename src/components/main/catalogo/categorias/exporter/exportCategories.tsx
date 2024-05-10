import * as XLSX from 'xlsx';
import { useSelector } from 'react-redux';

const ExportCategories = () => {
  const { allCategories } = useSelector((state) => state.categories);

  const flattenCategories = (categories) => {
    let flatCategories = [];

    categories.forEach((category) => {
      const flatCategory = {
        codigo: category.code,
        categoryName: '',
        codigo_2: '0101',
        Sub_categoria_1: '',
        codigo_3: '010101',
        subcategoria_2: '',
        codigo_4: '01010101',
        subcategoria_3: category.categoryName,
        codigo_5: '01010101',
        subcategoria_4: category.categoryName,
      };

      flatCategories.push(flatCategory);

      if (category.subCategories && category.subCategories.length > 0) {
        flatCategories = flatCategories.concat(
          flattenCategories(category.subCategories, category.categoryName),
        );
      }
    });
    console.log(flatCategories);

    return flatCategories;
  };

  const exportToExcel = () => {
    console.log(allCategories);

    // Flatten the categories for a flat table structure
    const flatCategories = flattenCategories(allCategories);

    let workbook = XLSX.utils.book_new();
    let worksheet = XLSX.utils.json_to_sheet(flatCategories);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Datos');
    XLSX.writeFile(workbook, 'excelBook.xlsx');
  };

  return <button onClick={exportToExcel}>Exportar a Excel</button>;
};

export default ExportCategories;
