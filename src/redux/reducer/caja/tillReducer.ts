import {
  TILLS_REQUEST,
  TILLS_FAILURE,
  TILLS_CONFLICT,
  SAVE_TILLS,
  GET_TILLS,
  SEARCH_TILLS,
  DISCONTINUE_TILL,
} from '../../actions/caja/actionTypes';
import {
  searchTills,
  tillsConflict,
  tillsFailure,
  tillsRequest,
  getTills,
  saveTills,
  discontinueTills,
} from './tillCases';

const initialState = {
  allTills: [],
  loading: false,
  error: null,
  conflict: null,
};

export default function tillsReducer(state = initialState, action) {
  switch (action.type) {
    // Public
    case TILLS_REQUEST:
      return tillsRequest(state);
    case TILLS_FAILURE:
      return tillsFailure(state, action);
    // Create
    case TILLS_CONFLICT:
      return tillsConflict(state, action);
    case SAVE_TILLS:
      return saveTills(state);
    // Get
    case GET_TILLS:
      return getTills(state, action);
    // Search
    case SEARCH_TILLS:
      return searchTills(state, action);
    // Update
    case DISCONTINUE_TILL:
      return discontinueTills(state, action);
    default:
      return state;
  }
}
