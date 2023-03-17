import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./redux/reducers/cart-reducer";
import mapSlice from "./redux/reducers/map-reducer";
import searchSlice from "./redux/reducers/search-reducer";

const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    map: mapSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
