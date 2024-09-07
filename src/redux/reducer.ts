import { BaseActions } from "@/redux/actions";
import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "@/redux/types";
import { toast } from "sonner";

export interface CartItem {
  productId: number;
  quantity: number;
}

// initial state of cartReducer
const initialState: CartItem[] = [];

export const cartReducer = (state = initialState, action: BaseActions) => {
  console.log("initialstate: ", state, action);

  switch (action.type) {
    case ADD_TO_CART:
      if (
        state.find((cartItem) =>
          cartItem.productId === action.payload.productId ? true : false,
        )
      ) {
        toast("Product already in cart - Increased Quantity");
        return state.map((cartItem) => {
          if (cartItem.productId === action.payload.productId) {
            cartItem.quantity += 1;
          }
          return cartItem;
        });
      } else {
        toast("Product added to cart");
        return [
          ...state,
          {
            productId: action.payload.productId,
            quantity: 1,
          },
        ];
      }

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
    case CLEAR_CART:
      return null;
      break;

    default:
      return state;
  }
};
