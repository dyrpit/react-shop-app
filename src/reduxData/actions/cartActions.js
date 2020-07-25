export const ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  INCREASE_QUANTITY: 'INCREASE_QUANTITY',
  DECREASE_QUANTITY: 'DECREASE_QUANTITY',
};

export const addToCart = (item) => ({ type: ACTION_TYPES.ADD_TO_CART, item });
export const removeFromCart = (id) => ({ type: ACTION_TYPES.REMOVE_FROM_CART, id });
export const increaseQuantity = (id) => ({ type: ACTION_TYPES.INCREASE_QUANTITY, id });
export const decreaseQuantity = (id) => ({ type: ACTION_TYPES.DECREASE_QUANTITY, id });
