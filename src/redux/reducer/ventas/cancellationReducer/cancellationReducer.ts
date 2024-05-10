import {
  CANCELLATIONS_REQUEST,
  CANCELLATIONS_FAILURE,
  CANCELLATIONS_CONFLICT,
  SAVE_CANCELLATIONS,
  GET_CANCELLATIONS,
  SEARCH_CANCELLATIONS,
  DISCONTINUE_CANCELLATION,
} from '../../../actions/ventas/cancellationsActions/actionTypes';

import {
  searchCancellations,
  cancellationsConflict,
  cancellationsFailure,
  cancellationsRequest,
  getCancellations,
  saveCancellations,
  discontinueCancellations,
} from './cancellationCases';

const initialState = {
  allCancellations: [],
  loading: false,
  error: null,
  conflict: null,
};

export default function cancellationsReducer(state = initialState, action) {
  switch (action.type) {
    // Public
    case CANCELLATIONS_REQUEST:
      return cancellationsRequest(state);
    case CANCELLATIONS_FAILURE:
      return cancellationsFailure(state, action);
    // Create
    case CANCELLATIONS_CONFLICT:
      return cancellationsConflict(state, action);
    case SAVE_CANCELLATIONS:
      return saveCancellations(state);
    // Get
    case GET_CANCELLATIONS:
      return getCancellations(state, action);
    // Search
    case SEARCH_CANCELLATIONS:
      return searchCancellations(state, action);
    // Update
    case DISCONTINUE_CANCELLATION:
      return discontinueCancellations(state, action);
    default:
      return state;
  }
}
