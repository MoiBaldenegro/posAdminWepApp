import { toggleStatus } from '../../utils/toggleStatus';

//public
export function dishesRequest(state) {
  return {
    ...state,
    loading: true,
  };
}
export function dishesFailure(state, action) {
  return {
    ...state,
    loading: false,
    error: action.error,
  };
}

// Create
export function dishesConflict(state, action) {
  return {
    ...state,
    loading: true,
    conflict: action.error,
  };
}

export function saveDishes(state) {
  return {
    ...state,
    error: null,
    conflict: null,
    loading: false,
  };
}

// Get
export function getDishes(state, action) {
  return {
    ...state,
    allDishes: action.payload,
    loading: false,
    error: null,
    conflict: null,
  };
}

// Search
export function searchDishes(state, action) {
  const value = action.payload;
  const dishesSearch = state.allDishes.filter((element) =>
    element.dishesName.toLowerCase().includes(value.toLowerCase()),
  );
  console.log(dishesSearch);

  return {
    ...state,
    allDishes: dishesSearch,
  };
}

// Update
export function discontinueDishes(state, action) {
  const newDishesArray = toggleStatus(state.allDishes, action.payload);
  return {
    ...state,
    allCategories: newDishesArray,
    error: null,
    conflict: null,
    loading: false,
  };
}
