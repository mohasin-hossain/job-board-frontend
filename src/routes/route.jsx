import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main";
import Home from "../pages/AllJobs/AllJobsPage";
import NotFound from "../pages/NotFound/NotFoundPage";
import CreateJob from "../pages/CreateJob/CreateJobPage";
import Applications from "../pages/Applications/ApplicationsPage";
import JobDetailsPage from "../pages/JobDetails/JobDetailsPage";

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
        path: "/jobs/:jobId",
        element: <JobDetailsPage></JobDetailsPage>,
      },
      {
        path: "/applications",
        element: <Applications></Applications>,
      },
    ],
  },
]);

export default router;
