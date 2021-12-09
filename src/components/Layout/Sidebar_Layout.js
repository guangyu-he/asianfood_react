import React from "react";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <div
      className={`${
        props.sidebar_state ? "" : "hidden"
      } absolute z-40 top-12 w-64 h-screen bg-white`}
    >
      <li className="inline-flex items-center p-2 mr-4 text-gray-700">
        <Link
          to="/"
          className="text-xl font-bold uppercase tracking-wide"
          onClick={() => props.change_searchbar_state(true, "home")}
        >
          Asian Food in Berlin
        </Link>
      </li>

      <nav className="mt-10">
        <Link
          to="/"
          className={`flex items-center mt-5 py-2 px-8 text-gray-700 border-r-4 ${
            props.sidebar_item.home
              ? "bg-gray-200 border-gray-700"
              : "hover:bg-gray-200 hover:border-gray-700"
          }`}
          onClick={() => props.change_searchbar_state(true, "home")}
        >
          <span className="mx-4 font-medium">Home</span>
        </Link>

        <Link
          to="/Dashboard"
          className={`flex items-center mt-5 py-2 px-8 text-gray-700 border-r-4 ${
            props.sidebar_item.dashboard
              ? "bg-gray-200 border-gray-700"
              : "hover:bg-gray-200 hover:border-gray-700"
          }`}
          onClick={() => props.change_searchbar_state(true, "dashboard")}
        >
          <span className="mx-4 font-medium">Dashboard</span>
        </Link>

        <Link
          to="/About"
          className={`flex items-center mt-5 py-2 px-8 text-gray-700 border-r-4 ${
            props.sidebar_item.about
              ? "bg-gray-200 border-gray-700"
              : "hover:bg-gray-200 hover:border-gray-700"
          }`}
          onClick={() => props.change_searchbar_state(false, "about")}
        >
          <span className="mx-4 font-medium">About</span>
        </Link>
      </nav>
    </div>
  );
};

export default React.memo(Sidebar);
