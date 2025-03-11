import { useState } from "react";
import {
  FaBriefcase,
  FaPlusCircle,
  FaInbox,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-base-100 shadow-sm font-inter">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Job Board</h1>

        {/* Mobile Hamburger Icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl text-gray-700"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navbar Links */}
        <div className="hidden lg:flex items-center gap-4">
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

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-gray-900 bg-opacity-50 z-50 transition-all duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)} // Close menu when clicking outside
      >
        <div
          className={`fixed top-0 right-0 w-2/3 bg-white h-full shadow-lg transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 text-2xl text-gray-700"
            >
              <FaTimes />
            </button>
            <div className="flex flex-col items-start mt-16">
              <NavLink
                to="/"
                className="flex items-center gap-2 px-4 py-3 text-lg rounded-lg hover:bg-blue-100 hover:text-blue-700 transition"
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
              >
                <FaBriefcase className="text-base" />
                <span>All Jobs</span>
              </NavLink>
              <NavLink
                to="/create-job"
                className="flex items-center gap-2 px-4 py-3 text-lg rounded-lg hover:bg-blue-100 hover:text-blue-700 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaPlusCircle className="text-base" />
                <span>Create Job</span>
              </NavLink>
              <NavLink
                to="/applications"
                className="flex items-center gap-2 px-4 py-3 text-lg rounded-lg hover:bg-blue-100 hover:text-blue-700 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaInbox className="text-xl" />
                <span>Applications</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
