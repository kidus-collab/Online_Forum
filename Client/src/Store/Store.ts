import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./AppState";

const Store = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export default Store;
