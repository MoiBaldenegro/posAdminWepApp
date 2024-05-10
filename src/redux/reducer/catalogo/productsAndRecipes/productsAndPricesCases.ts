import { toggleStatus } from '../../utils/toggleStatus';

// Public
export function productsAndPricesRequest(state) {
  return {
    ...state,
    loading: true,
  };
}

export function productsAndPricesFailure(state, action) {
  return {
    ...state,
    error: action.error,
    loading: false,
  };
}
// Create
export function productsAndPricesConflict(state, action) {
  return {
    ...state,
    loading: true,
    conflict: action.error,
  };
}

export function saveProductsAndPrices(state) {
  return {
    ...state,
    error: null,
    conflict: null,
    loading: false,
  };
}

// Get
export function getProductsAndPrices(state, action) {
  return {
    ...state,
    allProductsAndPrices: action.payload,
    loading: false,
    error: null,
    conflict: null,
  };
}
// Search
export function searchProductsAndPrices(state, action) {
  const value = action.payload;
  const productsAndPricesSearch = state.allProductsAndPrices.filter((element) =>
    element.productName.toLowerCase().includes(value.toLowerCase()),
  );
  return {
    ...state,
    allProductsAndPrices: productsAndPricesSearch,
  };
}
// Update
export function discontinueProductsAndPrices(state, action) {
  const newProductsAndPricesArray = toggleStatus(
    state.allProductsAndPrices,
    action.payload,
  );
  console.log(newProductsAndPricesArray);
  return {
    ...state,
    allProductsAndPrices: newProductsAndPricesArray,
    error: null,
    conflict: null,
    loading: false,
  };
}
