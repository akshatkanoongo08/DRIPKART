// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   isLoading: false,
//   data: {},
//   error: "",
// };

// const UpdateProduct = createSlice({
//   name: "updateProd",
//   initialState,
//   reducers: {
//     UpdateProductrequest(state) {
//       state.isLoading = true;
//     },
//     UpdateProductsuccess(state, action) {
//       state.isLoading = false;
//       state.data = action.payload.data;
//       state.error = "";
//     },
//     UpdateProductfield(state, action) {
//       state.isLoading = false;
//       state.error = action.payload.error;
//     },
//   },
// });

// export const { UpdateProductrequest, UpdateProductsuccess, UpdateProductfield } = UpdateProduct.actions;
// export default UpdateProduct.reducer;


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  data: {},
  error: "",
};

const UpdateProduct = createSlice({
  name: "updateProd",
  initialState,
  reducers: {
    UpdateProductrequest(state) {
      state.isLoading = true;
    },
    UpdateProductsuccess(state, action) {
      state.isLoading = false;
      state.data = action.payload.data;
      state.error = "";
    },
    UpdateProductfield(state, action) {
      state.isLoading = false;
      state.error = action.payload.error;
    },
  },
});

export const { UpdateProductrequest, UpdateProductsuccess, UpdateProductfield } = UpdateProduct.actions;
export default UpdateProduct.reducer;