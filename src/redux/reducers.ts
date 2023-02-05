import { combineReducers } from "@reduxjs/toolkit";
import appReducers from "redux/slice/app/appSlice";
import { AppInitialStateType } from "./slice/app/type";

export const rootReducer = combineReducers({
  appReducers,
});

export type rootState = {
  appReducers: AppInitialStateType;
};
