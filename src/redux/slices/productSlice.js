import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    SET_PRODUCTS: (state, action) => {
      state.productList = action.payload.products;
    },
  },
});
export const { SET_PRODUCTS } = productSlice.actions;
export const selProducts = (state) => state.product.productList;
export default productSlice.reducer;
 