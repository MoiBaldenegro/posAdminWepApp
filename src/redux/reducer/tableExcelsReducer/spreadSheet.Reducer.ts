import {
  SELECT_CELL,
  UPDATE_CELL,
} from '../../actions/tableExcels/actionTypes';
import { selectCellCase, updateCellCase } from './spreadSheet.cases';

const initialState = {
  data: [
    ['A1', 'B1', 'C1', 'D1', 'E1'],
    ['A2', 'B2', 'C2', 'D2', 'E2'],
    ['A3', 'B3', 'C3', 'D3', 'E3'],
    ['A4', 'B4', 'C4', 'D4', 'E4'],
    ['A5', 'B5', 'C5', 'D5', 'E5'],
  ],
  selectedCell: { row: 0, col: 0 },
};

export const spreadsheetReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CELL:
      return updateCellCase(state, action);
    case SELECT_CELL:
      return selectCellCase(state, action);
    default:
      return state;
  }
};
