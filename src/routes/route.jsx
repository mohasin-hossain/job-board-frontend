import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import CreateJob from "../pages/CreateJob/CreateJob";
import Applications from "../pages/Applications/Applications";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/create-job",
        element: <CreateJob></CreateJob>,
      },
      {
        path: "/applications",
        element: <Applications></Applications>,
      },
    ],
  },
]);

export default router;
