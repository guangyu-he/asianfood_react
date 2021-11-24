import "./index.css";
import { Link } from "react-router-dom";
import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    return (
      <div
        className={`${this.props.content ? "" : "hidden"} absolute z-20 top-14 w-64 h-screen bg-white`}
      >
        <Link
          to="/"
          className="inline-flex items-center p-2 mr-4 text-gray-700"
        >
          <text className="text-xl font-bold uppercase tracking-wide">
            Asian Food in Berlin
          </text>
        </Link>

        <nav className="mt-10">
          <a
            className="flex items-center py-2 px-8 bg-gray-200 text-gray-700 border-r-4 border-gray-700"
            href="#"
          >
            <span className="mx-4 font-medium">Dashboard</span>
          </a>

          <a
            className="flex items-center mt-5 py-2 px-8 text-gray-600 border-r-4 border-white hover:bg-gray-200 hover:text-gray-700 hover:border-gray-700"
            href="#"
          >
            <span className="mx-4 font-medium">Accounts</span>
          </a>

          <a
            className="flex items-center mt-5 py-2 px-8 text-gray-600 border-r-4 border-white hover:bg-gray-200 hover:text-gray-700 hover:border-gray-700"
            href="#"
          >
            <span className="mx-4 font-medium">Tickets</span>
          </a>

          <a
            className="flex items-center mt-5 py-2 px-8 text-gray-600 border-r-4 border-white hover:bg-gray-200 hover:text-gray-700 hover:border-gray-700"
            href="#"
          >
            <span className="mx-4 font-medium">Settings</span>
          </a>
        </nav>
      </div>
    );
  }
}

export default Sidebar;
