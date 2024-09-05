// Actions for Add to cart functionality
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  CLEAR_CART,
} from "./types";

export interface ClearCartAction {
  type: string;
}

export interface BaseActions {
  type: string;
  payload: {
    productId: string;
    quantity: number;
  };
}

export type Actions = BaseActions | ClearCartAction;

const addToCart = (productId: string, quantity: number): Actions => {
  return {
    type: ADD_TO_CART,
    payload: {
      productId,
      quantity,
    },
  };
};

const removeFromCart = (productId: string, quantity: number): Actions => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      productId,
      quantity,
    },
  };
};

const updateCartQuantity = (productId: string, quantity: number): Actions => {
  return {
    type: UPDATE_CART_QUANTITY,
    payload: {
      productId,
      quantity,
    },
  };
};

const clearCart = (): Actions => {
  return {
    type: CLEAR_CART,
  };
};

export { addToCart, removeFromCart, updateCartQuantity, clearCart };
