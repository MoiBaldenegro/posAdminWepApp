import { toggleStatus } from '../../utils/toggleStatus';

// Public
export function cancellationsRequest(state) {
  return {
    ...state,
    loading: true,
  };
}

export function cancellationsFailure(state, action) {
  return {
    ...state,
    error: action.error,
    loading: false,
  };
}
// Create
export function cancellationsConflict(state, action) {
  return {
    ...state,
    loading: true,
    conflict: action.error,
  };
}

export function saveCancellations(state) {
  return {
    ...state,
    error: null,
    conflict: null,
    loading: false,
  };
}

// Get
export function getCancellations(state, action) {
  return {
    ...state,
    allCancellations: action.payload,
    loading: false,
    error: null,
    conflict: null,
  };
}
// Search
export function searchCancellations(state, action) {
  const value = action.payload;
  const cancellationsSearch = state.allCancellations.filter((element) =>
    element.categoryName.toLowerCase().includes(value.toLowerCase()),
  );
  return {
    ...state,
    allCancellations: cancellationsSearch,
  };
}
// Update
export function discontinueCancellations(state, action) {
  const newCancellationsArray = toggleStatus(
    state.allCancellations,
    action.payload,
  );
  return {
    ...state,
    allCancellations: newCancellationsArray,
    error: null,
    conflict: null,
    loading: false,
  };
}
