import { Link } from "react-router-dom";
import { useJobs } from "../../hooks/useJobs";
import JobList from "../../components/JobList";
import { Helmet } from "react-helmet-async";

const AllJobs = () => {
  const { data: jobs, isLoading, error } = useJobs();

  if (isLoading)
    return <div className="mt-12 text-center">Loading jobs...</div>;

  if (error)
    return (
      <div className="mt-12 text-center">
        Error loading jobs: {error.message}
      </div>
    );

  return (
    <div>
      <Helmet>
        <title>Home | Job Board</title>
      </Helmet>
      {jobs.length === 0 ? (
        <div className="mt-12 flex justify-center items-center flex-col bg-base-200 p-6">
          <p>No jobs available. Please create some jobs first.</p>
          <Link to="/create-job" className="btn btn-primary mt-4">
            Create Job
          </Link>
        </div>
      ) : (
        <JobList jobs={jobs} />
      )}
    </div>
  );
};

export default AllJobs;
