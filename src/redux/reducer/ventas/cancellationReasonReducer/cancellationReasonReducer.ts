import {
  CANCELLATIONREASONS_REQUEST,
  CANCELLATIONREASONS_FAILURE,
  CANCELLATIONREASONS_CONFLICT,
  SAVE_CANCELLATIONREASONS,
  GET_CANCELLATIONREASONS,
  SEARCH_CANCELLATIONREASONS,
  DISCONTINUE_CANCELLATIONREASON,
} from '../../../actions/ventas/cancellationReasons/actionTypes';
import {
  searchCancellationReasons,
  cancellationReasonsConflict,
  cancellationReasonsFailure,
  cancellationReasonsRequest,
  getCancellationReasons,
  saveCancellationReasons,
  discontinueCancellationReasons,
} from './cancellationReasonCases';

const initialState = {
  allCancellationReasons: [],
  loading: false,
  error: null,
  conflict: null,
};

export default function cancellationReasonsReducer(
  state = initialState,
  action,
) {
  switch (action.type) {
    // Public
    case CANCELLATIONREASONS_REQUEST:
      return cancellationReasonsRequest(state);
    case CANCELLATIONREASONS_FAILURE:
      return cancellationReasonsFailure(state, action);
    // Create
    case CANCELLATIONREASONS_CONFLICT:
      return cancellationReasonsConflict(state, action);
    case SAVE_CANCELLATIONREASONS:
      return saveCancellationReasons(state);
    // Get
    case GET_CANCELLATIONREASONS:
      return getCancellationReasons(state, action);
    // Search
    case SEARCH_CANCELLATIONREASONS:
      return searchCancellationReasons(state, action);
    // Update
    case DISCONTINUE_CANCELLATIONREASON:
      return discontinueCancellationReasons(state, action);
    default:
      return state;
  }
}
