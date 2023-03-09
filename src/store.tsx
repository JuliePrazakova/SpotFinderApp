import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./redux/reducers/search-reducer";

// const rootReducer = combineReducers({
//   search: searchSlice.reducer,
// });

const store = configureStore({
  reducer: searchSlice.reducer,
});

export default store;