import {
  PRODUCTSANDPRICES_FAILURE,
  GET_PRODUCTSANDPRICES,
  PRODUCTSANDPRICES_REQUEST,
  PRODUCTSANDPRICES_CONFLICT,
  SAVE_PRODUCTSANDPRICES,
  SEARCH_PRODUCTSANDPRICES,
  DISCONTINUE_PRODUCTSANDPRICES,
} from '../../../actions/catalogo/productsAndpricesActions/actionTypes';

import {
  productsAndPricesConflict,
  productsAndPricesFailure,
  productsAndPricesRequest,
  getProductsAndPrices,
  saveProductsAndPrices,
  searchProductsAndPrices,
  discontinueProductsAndPrices,
} from './productsAndPricesCases';

let initialState = {
  allProductsAndPrices: [],
  loading: false,
  error: null,
  conflict: null,
};

export default function productsAndPricesReducer(state = initialState, action) {
  switch (action.type) {
    // Public
    case PRODUCTSANDPRICES_REQUEST:
      return productsAndPricesRequest(state);
    case PRODUCTSANDPRICES_FAILURE:
      return productsAndPricesFailure(state, action);
    // Create
    case PRODUCTSANDPRICES_CONFLICT:
      return productsAndPricesConflict(state, action);
    case SAVE_PRODUCTSANDPRICES:
      return saveProductsAndPrices(state);
    // Get
    case GET_PRODUCTSANDPRICES:
      return getProductsAndPrices(state, action);
    // Search
    case SEARCH_PRODUCTSANDPRICES:
      return searchProductsAndPrices(state, action);
    // Update
    case DISCONTINUE_PRODUCTSANDPRICES:
      return discontinueProductsAndPrices(state, action);
    default:
      return state;
  }
}
