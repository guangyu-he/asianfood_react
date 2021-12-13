import React from "react";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <div
      className={`
      ${props.sidebar_state ? "" : "hidden"}
      absolute z-40 fixed
      top-16 w-64 bottom-6 mx-4
      shadow-lg rounded-lg
      bg-white dark:bg-gray-900
      overflow-hidden
      `}
    >
      <li
        className="inline-flex items-center p-2 mr-4 
      text-gray-700 dark:text-white"
      >
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
          className={`${
            props.sidebar_item.home
              ? "bg-gray-200 border-gray-400 dark:bg-gray-500 dark:border-gray-300"
              : "hover:bg-gray-300"
          }
          flex mt-5 py-2 px-8 
          border-r-4 
          text-gray-700
          items-center 
          `}
          onClick={() => props.change_searchbar_state(true, "home")}
        >
          <span className="mx-4 font-medium dark:text-white">Home</span>
        </Link>

        <Link
          to="/Dashboard"
          className={`${
            props.sidebar_item.dashboard
              ? "bg-gray-200 border-gray-400 dark:bg-gray-500 dark:border-gray-300"
              : "hover:bg-gray-300"
          }
          flex mt-5 py-2 px-8 
          border-r-4 
          text-gray-700
          items-center 
          `}
          onClick={() => props.change_searchbar_state(true, "dashboard")}
        >
          <span className="mx-4 font-medium dark:text-white">Dashboard</span>
        </Link>

        <Link
          to="/About"
          className={`${
            props.sidebar_item.about
              ? "bg-gray-200 border-gray-400 dark:bg-gray-500 dark:border-gray-300"
              : "hover:bg-gray-300"
          }
          flex mt-5 py-2 px-8 
          border-r-4 
          text-gray-700
          items-center 
          `}
          onClick={() => props.change_searchbar_state(false, "about")}
        >
          <span className="mx-4 font-medium dark:text-white">About</span>
        </Link>
      </nav>
    </div>
  );
};

export default React.memo(Sidebar);
