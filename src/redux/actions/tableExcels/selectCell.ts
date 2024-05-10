import { SELECT_CELL } from './actionTypes';

export const selectCell = (row, col) => ({
  type: SELECT_CELL,
  payload: { row, col },
});
