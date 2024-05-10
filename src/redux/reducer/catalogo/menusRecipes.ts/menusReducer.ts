import {
  MENUS_FAILURE,
  GET_MENUS,
  MENUS_REQUEST,
  MENUS_CONFLICT,
  SAVE_MENUS,
  SEARCH_MENUS,
  DISCONTINUE_MENUS,
} from '../../../actions/catalogo/menusYRecipes/actionTypes';
import {
  menusConflict,
  menusFailure,
  menusRequest,
  getMenus,
  saveMenus,
  searchMenus,
  discontinueMenus,
} from './menusCases';

let initialState = {
  allMenus: [],
  loading: false,
  error: null,
  conflict: null,
};

export default function menusReducer(state = initialState, action) {
  switch (action.type) {
    // Public
    case MENUS_REQUEST:
      return menusRequest(state);
    case MENUS_FAILURE:
      return menusFailure(state, action);
    // Create
    case MENUS_CONFLICT:
      return menusConflict(state, action);
    case SAVE_MENUS:
      return saveMenus(state);
    // Get
    case GET_MENUS:
      return getMenus(state, action);
    // Search
    case SEARCH_MENUS:
      return searchMenus(state, action);
    // Update
    case DISCONTINUE_MENUS:
      return discontinueMenus(state, action);
    default:
      return state;
  }
}
