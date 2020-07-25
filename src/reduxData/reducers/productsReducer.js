import { ACTION_TYPES } from '../actions/productsActions';

const initialState = {
  pending: false,
  products: [],
  error: null,
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.PRODUCTS_FETCH_PENDING:
      return { ...state, pending: true };
    case ACTION_TYPES.PRODUCTS_FETCH_SUCCES:
      return { ...state, pending: false, products: action.products };
    case ACTION_TYPES.PRODUCTS_FETCH_ERROR:
      return { ...state, pending: false, error: action.error };
    default:
      return state;
  }
};
