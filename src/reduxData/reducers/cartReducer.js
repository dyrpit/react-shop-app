import { ACTION_TYPES } from '../actions/cartActions';

const addItem = (state, item) => {
  const product = state.items.find((i) => i.id === item.id);
  if (!product) {
    return {
      ...state,
      items: [...state.items, { ...item, quantity: 1 }],
    };
  } else {
    product.quantity += 1;
    return { ...state };
  }
};

const initialState = {
  items: [],
};

export const cartReducer = (state = initialState, action) => {
  console.log('CART', state);
  switch (action.type) {
    case ACTION_TYPES.ADD_TO_CART:
      return addItem(state, action.item);
    case ACTION_TYPES.REMOVE_FROM_CART:
      return {
        items: state.items.filter((item) => (item.id === action.id ? false : true)),
      };
    case ACTION_TYPES.INCREASE_QUANTITY:
      return {
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    case ACTION_TYPES.DECREASE_QUANTITY:
      return {
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, quantity: item.quantity - 1 } : item
        ),
      };
    default:
      return state;
  }
};
