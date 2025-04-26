import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice";
import categoryReducer from "../slices/categorySlice";
import productReducer from "../slices/productSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    category: categoryReducer,
    product: productReducer
  }
})

export default store;