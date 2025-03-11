import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import ApplicationForm from "../../components/ApplicationForm";
import { useApplications } from "../../hooks/useApplications";
import { fetchJobById } from "../../utils/api";
import {
  FaBuilding,
  FaMapMarkerAlt,
  FaBriefcase,
  FaUsers,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const JobDetailPage = () => {
  const { jobId } = useParams();

  const { data: job, isLoading: jobLoading } = useQuery({
    queryKey: ["job", jobId],
    queryFn: () => fetchJobById(jobId),
  });

  const { data: applications, isLoading: appLoading } = useApplications(jobId);

  if (jobLoading)
    return <div className="text-center text-gray-500 mt-8">Loading job...</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
      <Helmet>
        <title>Job Details | Job Board</title>
      </Helmet>
      <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <FaBriefcase className="text-gray-500" /> {job.title}
        </h1>
        <p className="text-gray-700 text-sm">{job.description}</p>

        <div className="flex items-center gap-3 text-sm text-gray-600">
          <FaBuilding className="text-gray-500" />
          <span>{job.company}</span>
        </div>

        <div className="flex items-center gap-3 text-sm text-gray-600">
          <FaMapMarkerAlt className="text-gray-500" />
          <span>{job.location}</span>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
        <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
          <FaUsers className="text-gray-500" /> Applications
        </h2>

        {appLoading ? (
          <div className="text-gray-500">Loading applications...</div>
        ) : applications?.length > 0 ? (
          <ul className="space-y-3">
            {applications.map((app) => (
              <li
                key={app.id || app._id}
                className="border border-gray-200 rounded-md p-4"
              >
                <p className="text-sm font-medium text-gray-800">
                  {app.applicant_name}
                </p>
                <p className="text-sm text-gray-500">{app.applicant_email}</p>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-sm text-gray-500">No applications yet.</div>
        )}
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Apply Now!</h2>
        <ApplicationForm jobId={job.id || job._id} />
      </div>
    </div>
  );
};

export default JobDetailPage;
