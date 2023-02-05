import { useState } from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import configureAppStore from "redux/store";
import appRoute from "routes/AppRoute";

const store = configureAppStore();

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRoute} />
    </Provider>
  );
}

export default App;
