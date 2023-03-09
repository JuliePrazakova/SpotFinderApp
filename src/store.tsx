import { configureStore } from "@reduxjs/toolkit";
import mapSlice from "./redux/reducers/map-reducer";
import searchSlice from "./redux/reducers/search-reducer";

// const rootReducer = combineReducers({
//   search: searchSlice.reducer,
// });

const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    map: mapSlice.reducer,
  },
});

export default store;
