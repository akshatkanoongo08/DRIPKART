import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoding: false,
  erro: "",
};

const DeleteProduct = createSlice({
  name: "deleteProduct",
  initialState,
  reducers: {
    deleteProductRequest(state) {
      state.isLoding = true;
    },
    deleteProductsuccess(state, action) {
      state.isLoding = false;
      state.erro = "";
    },
    deleteProductFailure(state, action) {
        state.isLoding=false,
        state.erro=action.payload.error
    //  (state.isLoding = false), (state.erro = action.payload.error);
    },
  },
});

export const {
  deleteProductRequest,
  deleteProductsuccess,
  deleteProductFailure,
} = DeleteProduct.actions;
export default DeleteProduct.reducer;