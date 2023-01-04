import { ADD_TO_CART, REMOVE_TO_CART } from "../constants";

const initialState = {
  cartData: [],
};
export default function CartItems(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      // console.log("reducer", action);
      return [...state, { cartData: action.data }];
    case REMOVE_TO_CART:
      state.pop();
      // console.log("reducer", action);
      return [...state];
    default:
      return state;
  }
}
