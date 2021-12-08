import React, { useRef, useEffect, useState, Fragment } from "react";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const userInput = useRef();
  const passInput = useRef();

  //SECTION control sidebar component state
  const [correct_display, set_correct_display] = useState(false);
  const intervalRef_correct_display = useRef();
  function change_correct_display(props) {
    setTimeout(() => {
      set_correct_display(props);
    }, 100);
  }
  useEffect(() => {
    intervalRef_correct_display.current = correct_display;
  }, [correct_display]);
  //!SECTION
  let correct_text = "wrong!";

  const handelClick_login = (event) => {
    if (
      userInput.current.value === "admin" &&
      passInput.current.value === "950611"
    ) {
      change_correct_display(false);
      //window.open('https://www.google.com', '_blank');
      window.location.replace(
        "https://asianfood.heguangyu.net/data_manage.html"
      );
    } else {
      change_correct_display(true);
    }
  };

  let geo_name = "";
  const location = useLocation();
  if (location.state === null) {
  } else {
    console.log(location.state);
    geo_name = location.state.geo_name;
  }

  return (
    <Fragment>
      <div className="hidden absolute inset-96">
        <h2>Dashboard</h2>
        <div>
          <div>
            <label className="sr-only">User Name</label>
            <input
              type="text"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="User Name"
              ref={userInput}
            ></input>
          </div>
          <div>
            <label className="sr-only">Password</label>
            <input
              type="password"
              autoComplete="current-password"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
              ref={passInput}
            ></input>
          </div>
        </div>
        <div>
          <button
            type="submit"
            onClick={handelClick_login}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign in
          </button>
        </div>
        <p className={`${correct_display ? "" : "hidden"} text-red-600`}>
          {" "}
          {correct_text}{" "}
        </p>
      </div>
      <div className="absolute inset-96">
        <p>Name:{geo_name}</p>
      </div>
    </Fragment>
  );
};

export default Dashboard;
