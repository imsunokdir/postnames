import { createSlice } from "@reduxjs/toolkit";

const pincodeSlice = createSlice({
  name: "Pincode",
  initialState: "",
  reducers: {
    changePincode: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const pincodeAction = pincodeSlice.actions;
export default pincodeSlice;
