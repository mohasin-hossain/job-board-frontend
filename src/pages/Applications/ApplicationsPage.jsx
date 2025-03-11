import { useState } from "react";
import { useApplications } from "../../hooks/useApplications";
import { FaSearch } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const ApplicationsPage = () => {
  const [jobId, setJobId] = useState("");
  const { data: applications, isLoading, error } = useApplications(jobId);

  // To show/hide the badge based on jobId and applications state
  const showBadge =
    !jobId || (jobId && applications && applications.length === 0);

  const getErrorMessage = (error) => {
    if (!error || !error.response) {
      return "An unexpected error occurred.";
    }

    const { statusCode, message } = error.response.data;

    if (statusCode === 404) {
      return message || "No job found for the provided Job ID!";
    } else if (statusCode === 500) {
      return message || "Internal Server Error. Please try again later.";
    } else {
      return message || "An error occurred. Please try again.";
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Helmet>
        <title>Applications | Job Board</title>
      </Helmet>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="text"
            value={jobId}
            onChange={(e) => setJobId(e.target.value)}
            placeholder="Search applications by Job ID"
            className="input input-bordered w-full text-lg py-3 px-4 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition pl-10"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </form>

      {showBadge && (
        <div className="mt-4 p-4 bg-blue-50 rounded-lg text-blue-600 text-sm flex items-center justify-center space-x-2">
          Go to the job card and copy the Job ID from there to see the
          applications.
        </div>
      )}

      {jobId && isLoading && (
        <div className="mt-4 text-gray-500">Loading applications...</div>
      )}

      {jobId && error && (
        <div className="mt-4 text-red-500">{getErrorMessage(error)}</div>
      )}

      {applications && applications.length > 0 && (
        <ul className="mt-8 space-y-4">
          {applications.map((app) => (
            <li
              key={app.id}
              className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6"
            >
              <div className="flex justify-between items-center mb-2">
                <div>
                  <strong className="text-lg font-semibold text-gray-800">
                    {app.applicant_name}
                  </strong>
                  <p className="text-sm text-gray-500">{app.applicant_email}</p>
                </div>
                <span className="text-xs text-gray-400">
                  {new Date(app.submitted_at).toLocaleDateString()}
                </span>
              </div>
              <div className="mt-4 text-gray-700 text-sm">
                {app.cover_letter}
              </div>
            </li>
          ))}
        </ul>
      )}

      {jobId && applications && applications.length === 0 && (
        <div className="mt-8 text-gray-500">
          No applications found for this job ID.
        </div>
      )}
    </div>
  );
};

export default ApplicationsPage;
