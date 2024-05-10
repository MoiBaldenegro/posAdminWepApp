import { toggleStatus } from '../../utils/toggleStatus';

// Public
export function categoriesRequest(state) {
  return {
    ...state,
    loading: true,
  };
}

export function categoriesFailure(state, action) {
  return {
    ...state,
    error: action.error,
    loading: false,
  };
}
// Create
export function categoriesConflict(state, action) {
  return {
    ...state,
    loading: true,
    conflict: action.error,
  };
}

export function saveCategories(state) {
  return {
    ...state,
    error: null,
    conflict: null,
    loading: false,
  };
}

// Get
export function getCategories(state, action) {
  return {
    ...state,
    allCategories: action.payload,
    loading: false,
    error: null,
    conflict: null,
  };
}
// Search
export function searchCategories(state, action) {
  const value = action.payload;
  const categoriesSearch = state.allCategories.filter((element) =>
    element.categoryName.toLowerCase().includes(value.toLowerCase()),
  );
  return {
    ...state,
    allCategories: categoriesSearch,
  };
}
// Update
export function discontinueCategories(state, action) {
  const newCategoriesArray = toggleStatus(state.allCategories, action.payload);
  return {
    ...state,
    allCategories: newCategoriesArray,
    error: null,
    conflict: null,
    loading: false,
  };
}
