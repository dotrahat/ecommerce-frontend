import { createStore } from "redux";
import { combineReducers } from "redux";
import { cartReducer, clearCartReducer } from "@/redux/reducer";

// const rootReducer = combineReducers(cartReducer);

export const store = createStore(
  cartReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);
