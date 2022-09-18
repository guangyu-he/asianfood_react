import React from "react";
import { Link } from "react-router-dom";

const Dashboardbutton = React.memo((props) => {
  //console.log("Dashboardbutton: " + props.siderbar_item_selected);

  let dashboard_selected = true;
  if (props.siderbar_item_selected !== "dashboard") {
    dashboard_selected = false;
  } else {
    dashboard_selected = true;
  }
  return (
      <Link
        to="/Dashboard"
        className={`${
          dashboard_selected
            ? "bg-gray-200 border-gray-400 dark:bg-gray-500 dark:border-gray-300"
            : "hover:bg-gray-300"
        }
        flex mt-5 py-2 px-8 
        border-r-4 w-full
        text-gray-700
        items-center 
      `}
        onClick={() => props.change_sidebar_item_selected("dashboard")}
      >
        <span className="mx-4 font-medium dark:text-white">Admin</span>
      </Link>
  );
});

export default Dashboardbutton;
