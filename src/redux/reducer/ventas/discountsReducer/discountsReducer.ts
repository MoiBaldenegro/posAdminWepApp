import {
  DISCOUNTS_REQUEST,
  DISCOUNTS_FAILURE,
  DISCOUNTS_CONFLICT,
  SAVE_DISCOUNTS,
  GET_DISCOUNTS,
  SEARCH_DISCOUNTS,
  DISCONTINUE_DISCOUNT,
} from '../../../actions/ventas/discountsActions/actionTypes';
import {
  searchDiscounts,
  discountsConflict,
  discountsFailure,
  discountsRequest,
  getDiscounts,
  saveDiscounts,
  discontinueDiscounts,
} from './discountsCases';

const initialState = {
  allDiscounts: [],
  loading: false,
  error: null,
  conflict: null,
};

export default function discountsReducer(state = initialState, action) {
  switch (action.type) {
    // Public
    case DISCOUNTS_REQUEST:
      return discountsRequest(state);
    case DISCOUNTS_FAILURE:
      return discountsFailure(state, action);
    // Create
    case DISCOUNTS_CONFLICT:
      return discountsConflict(state, action);
    case SAVE_DISCOUNTS:
      return saveDiscounts(state);
    // Get
    case GET_DISCOUNTS:
      return getDiscounts(state, action);
    // Search
    case SEARCH_DISCOUNTS:
      return searchDiscounts(state, action);
    // Update
    case DISCONTINUE_DISCOUNT:
      return discontinueDiscounts(state, action);
    default:
      return state;
  }
}
