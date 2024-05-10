import {
  CATEGORIES_REQUEST,
  CATEGORIES_FAILURE,
  CATEGORIES_CONFLICT,
  SAVE_CATEGORIES,
  GET_CATEGORIES,
  SEARCH_CATEGORIES,
  DISCONTINUE_CATEGORY,
} from '../../../actions/catalogo/categoriesActions/actionTypes';
import {
  searchCategories,
  categoriesConflict,
  categoriesFailure,
  categoriesRequest,
  getCategories,
  saveCategories,
  discontinueCategories,
} from './categoriesCases';

const initialState = {
  allCategories: [],
  loading: false,
  error: null,
  conflict: null,
};

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    // Public
    case CATEGORIES_REQUEST:
      return categoriesRequest(state);
    case CATEGORIES_FAILURE:
      return categoriesFailure(state, action);
    // Create
    case CATEGORIES_CONFLICT:
      return categoriesConflict(state, action);
    case SAVE_CATEGORIES:
      return saveCategories(state);
    // Get
    case GET_CATEGORIES:
      return getCategories(state, action);
    // Search
    case SEARCH_CATEGORIES:
      return searchCategories(state, action);
    // Update
    case DISCONTINUE_CATEGORY:
      return discontinueCategories(state, action);
    default:
      return state;
  }
}
