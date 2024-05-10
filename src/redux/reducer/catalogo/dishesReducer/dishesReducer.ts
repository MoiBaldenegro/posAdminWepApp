import {
  DISHES_FAILURE,
  GET_DISHES,
  DISHES_REQUEST,
  DISHES_CONFLICT,
  SAVE_DISHES,
  SEARCH_DISHES,
  DISCONTINUE_DISHES,
} from '../../../actions/catalogo/dishesActions/actionTypes';
import {
  discontinueDishes,
  dishesConflict,
  dishesFailure,
  dishesRequest,
  getDishes,
  saveDishes,
  searchDishes,
} from './dishesCases';

let initialState = {
  allDishes: [],
  loading: false,
  error: null,
  conflict: null,
};

export default function dishesReducer(state = initialState, action) {
  switch (action.type) {
    // Public
    case DISHES_REQUEST:
      return dishesRequest(state);
    case DISHES_FAILURE:
      return dishesFailure(state, action);
    // Create
    case DISHES_CONFLICT:
      return dishesConflict(state, action);
    case SAVE_DISHES:
      return saveDishes(state);
    // Get
    case GET_DISHES:
      return getDishes(state, action);
    // Search
    case SEARCH_DISHES:
      return searchDishes(state, action);
    // Update
    case DISCONTINUE_DISHES:
      return discontinueDishes(state, action);
    default:
      return state;
  }
}
