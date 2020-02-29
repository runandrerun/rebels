import { FETCH_SHOP_ITEMS, UPDATE_CART, CLEAR_CART, FETCH_USER } from './types';

export const setShopItems = (items) => {
  return (dispatch) => {
    return dispatch({
      type: FETCH_SHOP_ITEMS,
      payload: items
    });
  };
};

export const setUserCart = (item) => {
  return (dispatch) => {
    return dispatch({
      type: UPDATE_CART,
      payload: item
    });
  };
};

export const clearCart = () => {
  return (dispatch) => {
    return dispatch({
      type: CLEAR_CART
    });
  };
};

export const fetchUser = () => {
  return (dispatch) => {
    return dispatch({
      type: FETCH_USER
    });
  };
};
