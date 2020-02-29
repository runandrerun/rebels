import { FETCH_SHOP_ITEMS, UPDATE_CART, CLEAR_CART } from '../actions/types';

const initialState = {
  items: [],
  cart: []
};

const shopReducer = (state = initialState, action) => {

  switch (action.type) {
    case FETCH_SHOP_ITEMS:
    return {
      ...state,
      items: action.payload
    };

    case UPDATE_CART:
    return {
      ...state,
      cart: [
        ...state.cart,
        action.payload
      ]
    };

    case CLEAR_CART:
    return {
      ...state,
      cart: []
    };

    default:
    return state;
  };
};

export default shopReducer;
