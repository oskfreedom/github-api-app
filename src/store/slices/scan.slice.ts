import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRepo } from "types";

interface IScanState {
  keyword: string;
  users: string[];
  user: string;
  repos: {
    [key: string]: IRepo[];
  };
}

const initialState: IScanState = {
  keyword: "",
  users: [],
  user: "",
  repos: {},
};

const scanSlice = createSlice({
  name: "repo",
  initialState,
  reducers: {
    getUserRequest(state: IScanState, actions: PayloadAction<string>) {
      state.keyword = actions.payload;
    },
    getUser(state: IScanState, actions: PayloadAction<string[]>) {
      state.users = [
        ...actions.payload
          .filter((user) =>
            user.toUpperCase().includes(state.keyword.toUpperCase())
          )
          .slice(0, 5),
      ];
    },
    getRepoRequest(state: IScanState, actions: PayloadAction<string>) {
      state.user = actions.payload;
    },
    getRepo(state: IScanState, actions: PayloadAction<IRepo[]>) {
      state.repos[state.user] = [...actions.payload];
    },
  },
});

export const scanActions = scanSlice.actions;

export const scanReducers = scanSlice.reducer;
