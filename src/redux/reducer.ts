import { Actions } from "@/redux/actions";
import { ADD_TO_CART, CLEAR_CART } from "./types";

// initial state of cartReducer
const initialState = {};

export const cartReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
      };

    case CLEAR_CART:
      return {};
    default:
      return state;
  }
};
