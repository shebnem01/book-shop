import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: JSON.parse(localStorage.getItem("cart")) || [],
  total: [],
  totalQuantity: 0,
};

export const filterProductSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADD_TO_CART: (state, action) => {
      const { id, product } = action.payload;
      let newCartList = [...state.cartList];
      const currentItem = newCartList.find((item) => item.id === id);
      if (currentItem) {
        currentItem.quantity += 1;
      } else {
        newCartList = [...newCartList, { ...product, quantity: 1 }];
      }
      state.cartList = newCartList;
      localStorage.setItem("cart", JSON.stringify(newCartList));
    },
    ADD_QUANTITY: (state, action) => {
      const id = action.payload;

      let newCartList = [...state.cartList];
      let currentItem = newCartList.find((item) => item.id === id);
      currentItem.quantity += 1;
      state.cartList = newCartList;
      localStorage.setItem("cart", JSON.stringify(newCartList));
    },
    REDUCE_QUANTITY: (state, action) => {
      const id = action.payload;
      let newCartList = [...state.cartList];
      let currentItem = newCartList.find((item) => item.id === id);
      currentItem.quantity === 1
        ? (currentItem.quantity = 1)
        : (currentItem.quantity -= 1);
      state.cartList = newCartList;
      localStorage.setItem("cart", JSON.stringify(newCartList));
    },
    REMOVE_ALL: (state) => {
      let newCartList = [...state.cartList];
      newCartList = [];
      state.cartList = newCartList;
      localStorage.setItem("cart", JSON.stringify(newCartList));
    },
    REMOVE_FROM_CART: (state, action) => {
      const id = action.payload;
      let newCartList = [...state.cartList];
      newCartList = newCartList.filter((item) => item.id !== id);
      state.cartList = newCartList;
      localStorage.setItem("cart", JSON.stringify(newCartList));
    },
    CALCULATE_TOTAL_PRICE: (state, action) => {
      const cart = action.payload;
      let newTotal = state.total;
      newTotal = cart.reduce((acc, item) => {
        return (acc += Number(item.price) * item.quantity);
      }, 0);
      state.total = newTotal;
    },
    CALCULATE_SUB_QUANTITY: (state, action) => {
      const cart = action.payload;
      let newTotalQuantity = 0;
      newTotalQuantity=cart.reduce((acc,item)=>{
        return acc+=item.quantity
      },0)
      state.totalQuantity = newTotalQuantity;
    },
  },
});
export const {
  ADD_TO_CART,
  ADD_QUANTITY,
  REDUCE_QUANTITY,
  REMOVE_ALL,
  CALCULATE_TOTAL_PRICE,
  CALCULATE_SUB_QUANTITY,
  REMOVE_FROM_CART,
} = filterProductSlice.actions;
export const selCart = (state) => state.cart.cartList;
export const selTotalQuantity = (state) => state.cart.totalQuantity;
export const selTotal = (state) => state.cart.total;
export default filterProductSlice.reducer;
