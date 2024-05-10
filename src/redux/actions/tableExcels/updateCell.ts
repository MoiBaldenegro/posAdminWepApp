import { UPDATE_CELL } from './actionTypes';

export const updateCell = (row, col, value) => ({
  type: UPDATE_CELL,
  payload: { row, col, value },
});
