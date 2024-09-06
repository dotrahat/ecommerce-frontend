import { BaseActions, ClearCartAction } from "@/redux/actions";
import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "@/redux/types";

interface CartItem {
  productId: string;
  quantity: number;
}

// initial state of cartReducer
const initialState: CartItem[] = [];

export const cartReducer = (state = initialState, action: BaseActions) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [
        ...state,
        {
          [action.payload.productId]: action.payload.quantity
            ? action.payload.quantity
            : 1,
        },
      ];
      break;

    case REMOVE_FROM_CART:
      return state.filter(
        (cartItem) => cartItem.productId !== action.payload.productId,
      );

      break;

    case INCREASE_QUANTITY:
      return state.map((cartItem) => {
        if (cartItem.productId === action.payload.productId) {
          cartItem.quantity += 1;
        }

        return cartItem;
      });
      break;
    case DECREASE_QUANTITY:
      return state.map((cartItem) => {
        if (cartItem.productId === action.payload.productId) {
          cartItem.quantity -= 1;
        }

        return cartItem;
      });
      break;
    default:
      return state;
  }
};

export const clearCartReducer = (
  _state = initialState,
  action: ClearCartAction,
) => {
  if (action.type === CLEAR_CART) {
    return {};
  }
};
