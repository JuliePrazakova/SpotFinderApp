import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AppState = {
  where: string;
  from: string;
  to: string;
  radius: number | undefined;
};

const initialState: AppState = {
  where: "",
  from: "",
  to: "",
  radius: undefined,
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
