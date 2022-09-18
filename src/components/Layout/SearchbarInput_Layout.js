import React from "react";

import icon from "../../media/icon.png";
import icon_dark from "../../media/icon_dark.png";

const SearchbarInput = React.memo((props) => {
  let input_display = true;
  if (window.location.pathname === "/About") {
    input_display = false;
  }

  const searchbaricon = (props) => {
    var doms = [];
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      doms.push(
        <img
          src={icon_dark}
          className="rounded-lg h-10 w-10"
          alt=""
          loading="lazy"
          key="icon_dark"
        ></img>
      );
    } else {
      doms.push(
        <img
          src={icon}
          className="rounded-lg h-10 w-10"
          alt=""
          loading="lazy"
          key="icon"
        ></img>
      );
    }
    return doms;
  };

  return (
    <div
      className="
      absolute z-10
      inset-x-4 top-2 h-12 
      rounded-lg shadow-lg 
      bg-white dark:bg-gray-900
      overflow-hidden"
    >
      <input
        className={`${
          input_display ? "" : "hidden"
        } left-16 fixed peer h-12 inset-x-6 outline-none text-sm text-gray-700 dark:bg-gray-900 dark:text-white pr-2 text-2xl`}
        type="text"
        ref={props.searchInput}
        placeholder={"Search something..."}
        onClick={() => props.handleClick_input(false)}
        onChange={props.handleInputChange}
        onKeyDown={(e) => props.enterkeydown(e)}
      />
      <button className="right-0 absolute grid place-items-center h-full w-12 text-gray-300">
        {searchbaricon()}
      </button>
    </div>
  );
});

export default SearchbarInput;
