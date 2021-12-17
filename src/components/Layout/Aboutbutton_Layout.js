import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Aboutbutton = React.memo((props) => {
  //console.log("Aboutbutton: " + props.siderbar_item_selected);

  let about_selected = true;
  if (props.siderbar_item_selected !== "about") {
    about_selected = false;
  } else {
    about_selected = true;
  }
  return (
    <Link
      to="/About"
      className={`${
        about_selected
          ? "bg-gray-200 border-gray-400 dark:bg-gray-500 dark:border-gray-300"
          : "hover:bg-gray-300"
      }
        flex mt-5 py-2 px-8 
        border-r-4 w-full
        text-gray-700
        items-center 
      `}
      onClick={() => props.change_sidebar_item_selected("about")}
    >
      <span className="mx-4 font-medium dark:text-white">About</span>
    </Link>
  );
});

export default Aboutbutton;
