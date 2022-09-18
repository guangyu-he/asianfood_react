import React, { Fragment } from "react";

const Login = (props) => {
  return (
    <Fragment>
      <div className="absolute w-full h-fit p-4 inset-y-1/3 lg:w-1/3 lg:inset-x-1/3">
        <div>
          <label className="sr-only">User Name</label>
          <input
            type="text"
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="User Name"
            ref={props.userInput}
          ></input>
        </div>
        <div>
          <label className="sr-only">Password</label>
          <input
            type="password"
            autoComplete="current-password"
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
            ref={props.passInput}
          ></input>
        </div>
        <div className="py-2"></div>
        <button
          type="submit"
          onClick={props.handelClick_login}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Sign in
        </button>
      </div>
    </Fragment>
  );
};

export default React.memo(Login);
