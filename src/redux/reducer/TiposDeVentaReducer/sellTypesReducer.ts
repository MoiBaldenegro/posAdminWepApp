import {
  SELLTYPES_REQUEST,
  SELLTYPES_FAILURE,
  SELLTYPES_CONFLICT,
  SAVE_SELLTYPES,
  GET_SELLTYPES,
  SEARCH_SELLTYPES,
  DISCONTINUE_SELLTYPE,
} from '../../actions/tiposDeVenta/actionTypes';

import {
  searchSellTypes,
  sellTypesConflict,
  sellTypesFailure,
  sellTypesRequest,
  getSellTypes,
  saveSellTypes,
  discontinueSellTypes,
} from './sellTypesCases';

const initialState = {
  allSellTypes: [],
  loading: false,
  error: null,
  conflict: null,
};

export default function sellTypesReducer(state = initialState, action) {
  switch (action.type) {
    // Public
    case SELLTYPES_REQUEST:
      return sellTypesRequest(state);
    case SELLTYPES_FAILURE:
      return sellTypesFailure(state, action);
    // Create
    case SELLTYPES_CONFLICT:
      return sellTypesConflict(state, action);
    case SAVE_SELLTYPES:
      return saveSellTypes(state);
    // Get
    case GET_SELLTYPES:
      return getSellTypes(state, action);
    // Search
    case SEARCH_SELLTYPES:
      return searchSellTypes(state, action);
    // Update
    case DISCONTINUE_SELLTYPE:
      return discontinueSellTypes(state, action);
    default:
      return state;
  }
}
