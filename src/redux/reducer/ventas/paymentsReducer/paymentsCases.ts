import { toggleStatus } from '../../utils/toggleStatus';

// Public
export function paymentsRequest(state) {
  return {
    ...state,
    loading: true,
  };
}

export function paymentsFailure(state, action) {
  return {
    ...state,
    error: action.error,
    loading: false,
  };
}
// Create
export function paymentsConflict(state, action) {
  return {
    ...state,
    loading: true,
    conflict: action.error,
  };
}

export function savePayments(state) {
  return {
    ...state,
    error: null,
    conflict: null,
    loading: false,
  };
}

// Get
export function getPayments(state, action) {
  return {
    ...state,
    allPayments: action.payload,
    loading: false,
    error: null,
    conflict: null,
  };
}
// Search
export function searchPayments(state, action) {
  const value = action.payload;
  const paymentsSearch = state.allPayments.filter((element) =>
    element.categoryName.toLowerCase().includes(value.toLowerCase()),
  );
  return {
    ...state,
    allPayments: paymentsSearch,
  };
}
// Update
export function discontinuePayments(state, action) {
  const newPaymentsArray = toggleStatus(state.allPayments, action.payload);
  return {
    ...state,
    allPayments: newPaymentsArray,
    error: null,
    conflict: null,
    loading: false,
  };
}
