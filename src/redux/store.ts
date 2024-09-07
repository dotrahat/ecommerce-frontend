import { createStore } from "redux";
import { cartReducer } from "@/redux/reducer";

export const store = createStore(
  cartReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);
