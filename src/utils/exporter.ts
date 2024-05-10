import * as XLSX from 'xlsx';

export const exportToExcel = (data) => {
  let workbook = XLSX.utils.book_new(data);
  let worksheet = XLSX.utils.json_to_sheet(data);
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Datos');
  XLSX.writeFile(workbook, 'excelBook.xlsx');
};
