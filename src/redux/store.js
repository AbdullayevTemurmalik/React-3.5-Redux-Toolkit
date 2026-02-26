import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./CounterSlice";

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
  },
});
