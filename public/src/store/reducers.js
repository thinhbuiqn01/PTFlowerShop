import { ADD_TO_CART, SET_ADD_CART_INPUT } from "./constants";

const listCart =
  localStorage.getItem("listCart") != null
    ? JSON.parse(localStorage.getItem("listCart"))
    : [];
 
const initState = {
  listCart: listCart,
  listCartInput: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_ADD_CART_INPUT:
      return {
        ...state,
        listCart: action.payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        listCart: [...listCart, action.payload],
      };
    default:
      throw new Error("Invalid Action");
  }
};
export { initState };
export default reducer;
