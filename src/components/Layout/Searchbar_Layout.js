import React from "react";

const Searchbar = (props) => {
  return (
    <div className="fixed z-10 flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
      <button
        onClick={props.handelClick_button}
        className="left-0 absolute inline-flex p-3 rounded text-white ml-auto text-gray-700 outline-none"
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
      <input
        className={`${
          props.searchbar_state ? "" : "hidden"
        } left-12 absolute peer h-full w-full outline-none text-sm text-gray-700 pr-2 text-2xl`}
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
