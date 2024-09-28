import { configureStore } from "@reduxjs/toolkit";
import pincodeSlice from "./pincode";

const pincodeStore = configureStore({
  reducer: {
    pincode: pincodeSlice.reducer,
  },
});

export default pincodeStore;
