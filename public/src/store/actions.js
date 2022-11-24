import { SET_ADD_CART_INPUT, ADD_TO_CART } from "./constants";

export const setAddCartInput = (payload) => ({
  type: SET_ADD_CART_INPUT,
  payload: payload,
});

export const addToCart = (payload) => ({
  type: ADD_TO_CART,
  payload: payload,
});
