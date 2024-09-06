// Actions for Add to cart functionality
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "@/redux/types";

export interface ClearCartAction {
  (): { type: string };
}

export interface BaseActions {
  type: string;
  payload: {
    productId: number;
    quantity: number;
  };
}

export type Actions = BaseActions | ClearCartAction;

interface ActionCreator {
  (productId: number, quantity: number): BaseActions;
}

const addToCartActionCreator: ActionCreator = (productId, quantity) => {
  return {
    type: ADD_TO_CART,
    payload: {
      productId,
      quantity,
    },
  };
};

const removeFromCartActionCreator: ActionCreator = (productId, quantity) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      productId,
      quantity,
    },
  };
};

const increaseQuantityActionCreator: ActionCreator = (productId, quantity) => {
  return {
    type: INCREASE_QUANTITY,
    payload: {
      productId,
      quantity,
    },
  };
};

const decreaseQuantityActionCreator: ActionCreator = (productId, quantity) => {
  return {
    type: DECREASE_QUANTITY,
    payload: {
      productId,
      quantity,
    },
  };
};

const clearCartActionCreator: ClearCartAction = () => {
  return {
    type: CLEAR_CART,
  };
};

export {
  addToCartActionCreator,
  removeFromCartActionCreator,
  increaseQuantityActionCreator,
  decreaseQuantityActionCreator,
  clearCartActionCreator,
};
