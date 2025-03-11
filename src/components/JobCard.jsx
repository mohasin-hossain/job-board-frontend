import {
  FaCopy,
  FaBuilding,
  FaBriefcase,
  FaPaperPlane,
  FaHashtag,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const JobCard = ({ job }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(job.id || job._id);
    toast.success("Job ID copied to clipboard!");
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 p-6">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-xs text-gray-400 flex items-center gap-2">
            <FaHashtag className="text-gray-500" /> Job ID: {job.id || job._id}
          </h3>
          <button
            onClick={handleCopy}
            className="text-gray-400 hover:text-blue-600 focus:outline-none cursor-pointer"
          >
            <FaCopy />
          </button>
        </div>

        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <FaBriefcase className="text-gray-500" /> {job.title}
        </h2>

        <p className="text-gray-600 text-sm">{job.description}</p>

        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <FaBuilding className="text-gray-500" /> {job.company}
        </div>

        <div className="mt-4">
          <Link
            to={`/jobs/${job.id || job._id}`}
            className="btn btn-primary w-full flex items-center justify-center gap-2"
          >
            <FaPaperPlane /> Apply
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
