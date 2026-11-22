import { configureStore } from "@reduxjs/toolkit";
import marathonReducer from "./marathonSlice"

export const store = configureStore({
  reducer: {
    marathons: marathonReducer
  },
});