import { toggleStatus } from '../../utils/toggleStatus';

// Public
export function cancellationReasonsRequest(state) {
  return {
    ...state,
    loading: true,
  };
}

export function cancellationReasonsFailure(state, action) {
  return {
    ...state,
    error: action.error,
    loading: false,
  };
}
// Create
export function cancellationReasonsConflict(state, action) {
  return {
    ...state,
    loading: true,
    conflict: action.error,
  };
}

export function saveCancellationReasons(state) {
  return {
    ...state,
    error: null,
    conflict: null,
    loading: false,
  };
}

// Get
export function getCancellationReasons(state, action) {
  return {
    ...state,
    allCancellationReasons: action.payload,
    loading: false,
    error: null,
    conflict: null,
  };
}
// Search
export function searchCancellationReasons(state, action) {
  const value = action.payload;
  const cancellationReasonsSearch = state.allCancellationReasons.filter(
    (element) =>
      element.categoryName.toLowerCase().includes(value.toLowerCase()),
  );
  return {
    ...state,
    allCancellationReasons: cancellationReasonsSearch,
  };
}
// Update
export function discontinueCancellationReasons(state, action) {
  const newCancellationReasonsArray = toggleStatus(
    state.allCancellationReasons,
    action.payload,
  );
  return {
    ...state,
    allCancellationReasons: newCancellationReasonsArray,
    error: null,
    conflict: null,
    loading: false,
  };
}
