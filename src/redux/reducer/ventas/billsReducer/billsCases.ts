import { toggleStatus } from '../../utils/toggleStatus';

// Public
export function billsRequest(state) {
  return {
    ...state,
    loading: true,
  };
}

export function billsFailure(state, action) {
  return {
    ...state,
    error: action.error,
    loading: false,
  };
}
// Create
export function billsConflict(state, action) {
  return {
    ...state,
    loading: true,
    conflict: action.error,
  };
}

export function saveBills(state) {
  return {
    ...state,
    error: null,
    conflict: null,
    loading: false,
  };
}

// Get
export function getBills(state, action) {
  return {
    ...state,
    allBills: action.payload,
    loading: false,
    error: null,
    conflict: null,
  };
}
// Search
export function searchBills(state, action) {
  const value = action.payload;
  const billsSearch = state.allBills.filter((element) =>
    element.categoryName.toLowerCase().includes(value.toLowerCase()),
  );
  return {
    ...state,
    allBills: billsSearch,
  };
}
// Update
export function discontinueBills(state, action) {
  const newBillsArray = toggleStatus(state.allBills, action.payload);
  return {
    ...state,
    allBills: newBillsArray,
    error: null,
    conflict: null,
    loading: false,
  };
}
