import { toggleStatus } from '../../reducer/utils/toggleStatus';

// Public
export function tillsRequest(state) {
  return {
    ...state,
    loading: true,
  };
}

export function tillsFailure(state, action) {
  return {
    ...state,
    error: action.error,
    loading: false,
  };
}
// Create
export function tillsConflict(state, action) {
  return {
    ...state,
    loading: true,
    conflict: action.error,
  };
}

export function saveTills(state) {
  return {
    ...state,
    error: null,
    conflict: null,
    loading: false,
  };
}

// Get
export function getTills(state, action) {
  return {
    ...state,
    allTills: action.payload,
    loading: false,
    error: null,
    conflict: null,
  };
}
// Search
export function searchTills(state, action) {
  const value = action.payload;
  const tillsSearch = state.allTills.filter((element) =>
    element.categoryName.toLowerCase().includes(value.toLowerCase()),
  );
  return {
    ...state,
    allTills: tillsSearch,
  };
}
// Update
export function discontinueTills(state, action) {
  const newTillsArray = toggleStatus(state.allTills, action.payload);
  return {
    ...state,
    allTills: newTillsArray,
    error: null,
    conflict: null,
    loading: false,
  };
}
