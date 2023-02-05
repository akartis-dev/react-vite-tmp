import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { rootReducer } from "./reducers";

export default function configureAppStore(preloadedState?: any) {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: [logger],
  });

  return store;
}
