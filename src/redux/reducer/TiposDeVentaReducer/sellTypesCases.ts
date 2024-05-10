import { toggleStatus } from '../utils/toggleStatus';

// Public
export function sellTypesRequest(state) {
  return {
    ...state,
    loading: true,
  };
}

export function sellTypesFailure(state, action) {
  return {
    ...state,
    error: action.error,
    loading: false,
  };
}
// Create
export function sellTypesConflict(state, action) {
  return {
    ...state,
    loading: true,
    conflict: action.error,
  };
}

export function saveSellTypes(state) {
  return {
    ...state,
    error: null,
    conflict: null,
    loading: false,
  };
}

// Get
export function getSellTypes(state, action) {
  return {
    ...state,
    allSellTypes: action.payload,
    loading: false,
    error: null,
    conflict: null,
  };
}
// Search
export function searchSellTypes(state, action) {
  const value = action.payload;
  const sellTypesSearch = state.allSellTypes.filter((element) =>
    element.sellTypeName.toLowerCase().includes(value.toLowerCase()),
  );
  return {
    ...state,
    allSellTypes: sellTypesSearch,
  };
}
// Update
export function discontinueSellTypes(state, action) {
  const newSellTypesArray = toggleStatus(state.allSellTypes, action.payload);
  return {
    ...state,
    allSellTypes: newSellTypesArray,
    error: null,
    conflict: null,
    loading: false,
  };
}
