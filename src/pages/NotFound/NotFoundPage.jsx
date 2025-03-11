import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-8">
      <div className="text-center bg-white  p-6 rounded-lg max-w-lg w-full">
        <FaExclamationTriangle className="text-6xl text-red-500 mb-4 mx-auto" />
        <h1 className="text-4xl font-semibold text-gray-800">
          Oops! Page Not Found
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          We couldn't find the page you're looking for.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="btn btn-primary text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
