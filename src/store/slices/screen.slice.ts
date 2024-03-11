import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IScreenState {
  darkMode: string;
}

const initialState: IScreenState = {
  darkMode: "dark",
};

const screenSlice = createSlice({
  name: "screen",
  initialState,
  reducers: {
    changeDarkMode(state: IScreenState, actions: PayloadAction<string>) {
      state.darkMode = actions.payload;
    },
  },
});

export const screenActions = screenSlice.actions;

export const screenReducers = screenSlice.reducer;
