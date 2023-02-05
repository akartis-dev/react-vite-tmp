import { createBrowserRouter } from "react-router-dom";
import { IndexPage } from "view/page/IndexPage";
import { routeName } from "./routeName";

const appRoute = createBrowserRouter([
  {
    path: routeName.index,
    element: <IndexPage />,
  },
]);

export default appRoute;
