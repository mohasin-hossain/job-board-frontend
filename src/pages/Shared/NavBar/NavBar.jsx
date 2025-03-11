import { FaBriefcase, FaPlusCircle, FaInbox } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm font-inter">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Job Board</h1>
        <div className="flex items-center gap-4">
          <NavLink
            to="/"
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition"
          >
            <FaBriefcase className="text-base" />
            <span>All Jobs</span>
          </NavLink>
          <NavLink
            to="/create-job"
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition"
          >
            <FaPlusCircle className="text-base" />
            <span>Create Job</span>
          </NavLink>
          <NavLink
            to="/applications"
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition"
          >
            <FaInbox className="text-xl" />
            <span>Applications</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
