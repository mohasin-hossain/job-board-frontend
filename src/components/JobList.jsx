import JobCard from "./JobCard";

const JobList = ({ jobs }) => {
  if (jobs.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-500">
          No jobs available. Add jobs first.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
      {jobs.map((job) => (
        <JobCard key={job.id || job._id} job={job} />
      ))}
    </div>
  );
};

export default JobList;
