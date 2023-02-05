import { createSlice } from "@reduxjs/toolkit";
import appInitialState from "./appInitialState";

const appSlice = createSlice({
  name: "app",
  initialState: appInitialState,
  reducers: {},
});

const { actions, reducer } = appSlice;
export const {} = actions;

export default reducer;
