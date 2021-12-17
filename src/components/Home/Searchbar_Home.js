import React from "react";

const Searchbar = (props) => {
  return (
    <div className="
    fixed z-10
    inset-x-4 top-2 h-12 
    rounded-lg shadow-lg 
    bg-white dark:bg-gray-900
    overflow-hidden">
      <input
        className={`left-12 absolute peer h-full w-full outline-none text-sm text-gray-700 dark:bg-gray-900 dark:text-white pr-2 text-2xl`}
        type="text"
        id="search"
        ref={props.searchInput}
        placeholder={"Search something..."}
        onClick={props.handelClick_input}
        onChange={props.handleInputChange}
      />
      <button className="right-0 absolute grid place-items-center h-full w-12 text-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export default React.memo(Searchbar);
