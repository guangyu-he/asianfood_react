import React from "react";
import { Link } from "react-router-dom";

const Homebutton = React.memo((props) => {
  //console.log("Homebutton: " + props.siderbar_item_selected);

  let home_selected = true;
  if (props.siderbar_item_selected !== "home") {
    home_selected = false;
  } else {
    home_selected = true;
  }
  return (
    <Link
      to="/"
      lassName={`${
        home_selected
          ? "bg-gray-200 border-gray-400 dark:bg-gray-500 dark:border-gray-300"
          : "hover:bg-gray-300"
      }
          flex mt-5 py-2 px-8 
          border-r-4 w-full
          text-gray-700
          items-center 
        `}
      onClick={() => props.change_sidebar_item_selected("home")}
    >
      <span className="mx-4 font-medium dark:text-white">Home</span>
    </Link>
  );
});

export default Homebutton;
