import { ADD_TO_CART, SET_ADD_CART_INPUT } from "./constants";

const initState = {
  listCart: [],
  listCartInput: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_ADD_CART_INPUT:
      return {
        ...state,
        listCartInput: action.payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        listCart: [...state.listCart, action.payload],
      };
    default:
      throw new Error("Invalid Action");
  }
};
export { initState };
export default reducer;
