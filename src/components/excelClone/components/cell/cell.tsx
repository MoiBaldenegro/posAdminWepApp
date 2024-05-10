// styles
import styles from './cell.module.css';
import { useDispatch } from 'react-redux';
import { updateCell } from '../../../../redux/actions/tableExcels/updateCell';
// Icons
import createCellIcon from '../../../../assets/public/createCell.svg';

const Cell = ({ value, row, col, istittle }) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const newValue = e.target.value;
    dispatch(updateCell(row, col, newValue));
  };

  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className={istittle ? styles.istittle : styles.inputCell}
      />
      <div className={styles.createContainer}>
        <img
          src={createCellIcon}
          alt="create-cell-icon"
          className={istittle ? styles.hidden : styles.buttonCreate}
        />
      </div>
    </div>
  );
};

export default Cell;
