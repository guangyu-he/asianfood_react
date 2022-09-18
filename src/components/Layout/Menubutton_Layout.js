import React from "react";

const Menubutton = React.memo((props) => {
  return (
    <div
      className="
      fixed z-30 fixed
      w-12 left-4 top-2 h-12 
      rounded-l-lg
      bg-white dark:bg-gray-900
      overflow-hidden"
    >
      <button
        className="left-0 absolute inline-flex p-3 rounded ml-auto text-gray-700 dark:text-white outline-none"
        onClick={props.change_sidebar_state}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  );
});

export default Menubutton;
