import {
  BILLS_REQUEST,
  BILLS_FAILURE,
  BILLS_CONFLICT,
  SAVE_BILLS,
  GET_BILLS,
  SEARCH_BILLS,
  DISCONTINUE_BILL,
} from '../../../actions/ventas/billsActions/actionTypes';
import {
  searchBills,
  billsConflict,
  billsFailure,
  billsRequest,
  getBills,
  saveBills,
  discontinueBills,
} from './billsCases';

const initialState = {
  allBills: [],
  loading: false,
  error: null,
  conflict: null,
};

export default function billsReducer(state = initialState, action) {
  switch (action.type) {
    // Public
    case BILLS_REQUEST:
      return billsRequest(state);
    case BILLS_FAILURE:
      return billsFailure(state, action);
    // Create
    case BILLS_CONFLICT:
      return billsConflict(state, action);
    case SAVE_BILLS:
      return saveBills(state);
    // Get
    case GET_BILLS:
      return getBills(state, action);
    // Search
    case SEARCH_BILLS:
      return searchBills(state, action);
    // Update
    case DISCONTINUE_BILL:
      return discontinueBills(state, action);
    default:
      return state;
  }
}
