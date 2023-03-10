import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type MapState = {
  id: string;
};

const initialState: MapState = {
  id: "",
};

export const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setMapSearch: (state, action: PayloadAction<MapState>) => {
      const { id } = action.payload;
      return { ...state, id };
    },
  },
});

export const { setMapSearch } = mapSlice.actions;
export default mapSlice;
