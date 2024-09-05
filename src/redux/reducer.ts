import { Actions } from "./actions";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  CLEAR_CART,
} from "./types";

// initial state of cartReducer
const initialState = {};

export const cartReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        [action.payload.productId]: {
          ...action.payload,
          quantity: 1,
        },
      };

    case CLEAR_CART:
      return {};
    default:
      return state;
  }
};
