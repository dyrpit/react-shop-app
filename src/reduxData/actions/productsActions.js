export const ACTION_TYPES = {
  PRODUCTS_FETCH_PENDING: 'PRODUCTS_FETCH_PENDING',
  PRODUCTS_FETCH_SUCCES: 'PRODUCTS_FETCH_SUCCES',
  PRODUCTS_FETCH_ERROR: 'PRODUCTS_FETCH_ERROR',
};

export const fetchPending = () => ({ type: ACTION_TYPES.PRODUCTS_FETCH_PENDING });
export const fetchSucces = (products) => ({ type: ACTION_TYPES.PRODUCTS_FETCH_SUCCES, products });
export const fetchError = (error) => ({ type: ACTION_TYPES.PRODUCTS_FETCH_ERROR, error });
