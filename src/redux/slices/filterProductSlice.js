import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredProduct: [],
  sortType: "lowest" || localStorage.getItem("sortType"),
};
export const filterProductSlice = createSlice({
  name: "filterPr",
  initialState,
  reducers: {
    GET_FILTERED_PRODUCTS: (state, action) => {
      state.filteredProduct = action.payload;
    },
    SEARCH_FILTER: (state, action) => {
      const { search, products } = action.payload;
      const findSearchByName = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
      state.filteredProduct = findSearchByName;
    },
    PRICE_FILTER: (state, action) => {
      let newProducts = [];
      const { products, sortType } = action.payload;
      if (sortType === "lowest") {
        newProducts = [...products].sort((a, b) => {
          return Number(a.price) - Number(b.price);
        });
      } else {
        newProducts = [...products].sort((a, b) => {
          return Number(b.price) - Number(a.price);
        });
      }
      localStorage.setItem("sortType", sortType);
      state.sortType = sortType;
      console.log(state.sortType);
      console.log(sortType);
      state.filteredProduct = newProducts;
    },
  },
});
export const { GET_FILTERED_PRODUCTS, SEARCH_FILTER, PRICE_FILTER } =
  filterProductSlice.actions;
export const selFilteredProduct = (state) => state.filterPr.filteredProduct;
export const selSortType = (state) => state.filterPr.sortType;
export default filterProductSlice.reducer;
