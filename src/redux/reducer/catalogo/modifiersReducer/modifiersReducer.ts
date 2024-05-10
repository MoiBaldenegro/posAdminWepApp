import {
  MODIFIERS_FAILURE,
  GET_MODIFIERS,
  MODIFIERS_REQUEST,
  MODIFIERS_CONFLICT,
  SAVE_MODIFIERS,
  SEARCH_MODIFIERS,
  DELETE_MODIFIERS,
} from '../../../actions/catalogo/modifiersActions/actionTypes';
import {
  modifiersConflict,
  modifiersFailure,
  modifiersRequest,
  getModifiers,
  saveModifiers,
  searchModifiers,
  deletedModifier,
} from './modifiersCases';

let initialState = {
  allModifiers: [],
  loading: false,
  error: null,
  conflict: null,
};

export default function modifiersReducer(state = initialState, action) {
  switch (action.type) {
    // Public
    case MODIFIERS_REQUEST:
      return modifiersRequest(state);
    case MODIFIERS_FAILURE:
      return modifiersFailure(state, action);
    // Create
    case MODIFIERS_CONFLICT:
      return modifiersConflict(state, action);
    case SAVE_MODIFIERS:
      return saveModifiers(state);
    // Get
    case GET_MODIFIERS:
      return getModifiers(state, action);
    // Search
    case SEARCH_MODIFIERS:
      return searchModifiers(state, action);
    // Delete
    case DELETE_MODIFIERS:
      return deletedModifier(state, action);
    default:
      return state;
  }
}
