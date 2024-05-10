import {
  SHIFTS_REQUEST,
  SHIFTS_FAILURE,
  SHIFTS_CONFLICT,
  SAVE_SHIFTS,
  GET_SHIFTS,
  SEARCH_SHIFTS,
  DISCONTINUE_SHIFT,
} from '../../../actions/usuarios/shiftsActions/actiontypes';
import {
  searchShifts,
  shiftsConflict,
  shiftsFailure,
  shiftsRequest,
  getShifts,
  saveShifts,
  discontinueShifts,
} from './shiftCases';

const initialState = {
  allShifts: [],
  loading: false,
  error: null,
  conflict: null,
};

export default function shiftsReducer(state = initialState, action) {
  switch (action.type) {
    // Public
    case SHIFTS_REQUEST:
      return shiftsRequest(state);
    case SHIFTS_FAILURE:
      return shiftsFailure(state, action);
    // Create
    case SHIFTS_CONFLICT:
      return shiftsConflict(state, action);
    case SAVE_SHIFTS:
      return saveShifts(state);
    // Get
    case GET_SHIFTS:
      return getShifts(state, action);
    // Search
    case SEARCH_SHIFTS:
      return searchShifts(state, action);
    // Update
    case DISCONTINUE_SHIFT:
      return discontinueShifts(state, action);
    default:
      return state;
  }
}
