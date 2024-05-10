import { toggleStatus } from '../../utils/toggleStatus';

// Public
export function discountsRequest(state) {
  return {
    ...state,
    loading: true,
  };
}

export function discountsFailure(state, action) {
  return {
    ...state,
    error: action.error,
    loading: false,
  };
}
// Create
export function discountsConflict(state, action) {
  return {
    ...state,
    loading: true,
    conflict: action.error,
  };
}

export function saveDiscounts(state) {
  return {
    ...state,
    error: null,
    conflict: null,
    loading: false,
  };
}

// Get
export function getDiscounts(state, action) {
  return {
    ...state,
    allDiscounts: action.payload,
    loading: false,
    error: null,
    conflict: null,
  };
}
// Search
export function searchDiscounts(state, action) {
  const value = action.payload;
  const discountsSearch = state.allDiscounts.filter((element) =>
    element.categoryName.toLowerCase().includes(value.toLowerCase()),
  );
  return {
    ...state,
    allDiscounts: discountsSearch,
  };
}
// Update
export function discontinueDiscounts(state, action) {
  const newDiscountsArray = toggleStatus(state.allDiscounts, action.payload);
  return {
    ...state,
    allDiscounts: newDiscountsArray,
    error: null,
    conflict: null,
    loading: false,
  };
}
