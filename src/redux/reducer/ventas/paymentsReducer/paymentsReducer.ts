import {
  PAYMENTS_REQUEST,
  PAYMENTS_FAILURE,
  PAYMENTS_CONFLICT,
  SAVE_PAYMENTS,
  GET_PAYMENTS,
  SEARCH_PAYMENTS,
  DISCONTINUE_PAYMENT,
} from '../../../actions/ventas/paymentsActions/actiontypes';
import {
  searchPayments,
  paymentsConflict,
  paymentsFailure,
  paymentsRequest,
  getPayments,
  savePayments,
  discontinuePayments,
} from './paymentsCases';

const initialState = {
  allPayments: [],
  loading: false,
  error: null,
  conflict: null,
};

export default function paymentsReducer(state = initialState, action) {
  switch (action.type) {
    // Public
    case PAYMENTS_REQUEST:
      return paymentsRequest(state);
    case PAYMENTS_FAILURE:
      return paymentsFailure(state, action);
    // Create
    case PAYMENTS_CONFLICT:
      return paymentsConflict(state, action);
    case SAVE_PAYMENTS:
      return savePayments(state);
    // Get
    case GET_PAYMENTS:
      return getPayments(state, action);
    // Search
    case SEARCH_PAYMENTS:
      return searchPayments(state, action);
    // Update
    case DISCONTINUE_PAYMENT:
      return discontinuePayments(state, action);
    default:
      return state;
  }
}
