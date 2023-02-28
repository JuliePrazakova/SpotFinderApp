import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AppState = {
  where: string;
  from: string;
  to: string;
  radius: string;
};

const initialState: AppState = {
  where: "",
  from: "",
  to: "",
  radius: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<AppState>) => {
      const { where, from, to, radius } = action.payload;
      return { ...state, where, from, to, radius };
    },
  },
});

export const { setFilter } = searchSlice.actions;
export default searchSlice;
