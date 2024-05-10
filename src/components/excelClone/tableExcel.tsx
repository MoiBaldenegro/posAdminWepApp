import Spreadsheet from './components/spreadSheet/spreadsheet';
import styles from './tableExcel.module.css';

export default function TableExcels() {
  return (
    <div className={styles.tableExcels}>
      <Spreadsheet />
    </div>
  );
}
