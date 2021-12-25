import React, { useState } from "react";
import { Link } from "react-router-dom";

import Homebutton from "./Homebutton_Layout";
import Dashboardbutton from "./Dashboardbutton_Layout";
import Aboutbutton from "./Aboutbutton_Layout";

import icon from "../../media/icon.png";
import icon_dark from "../../media/icon_dark.png";

const Title = React.memo((props) => {
  //console.log("Title: " + props);

  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return (
      <li
        className="inline-flex items-center p-2 mr-4 
        text-gray-700 dark:text-white"
      >
        <img
          src={icon_dark}
          className="relative rounded-lg p-4 h-20 w-20"
          alt=""
          loading="lazy"
        ></img>
        <Link to="/" className="text-xl font-bold uppercase tracking-wide">
          Asian Food in Berlin
        </Link>
      </li>
    );
  } else {
    return (
      <li
        className="inline-flex items-center p-2 mr-4 
        text-gray-700 dark:text-white"
      >
        <img
          src={icon}
          className="relative rounded-lg p-4 h-20 w-20"
          alt=""
          loading="lazy"
        ></img>
        <Link to="/" className="text-xl font-bold uppercase tracking-wide">
          Asian Food in Berlin
        </Link>
      </li>
    );
  }
});

const Sidebar = (props) => {
  console.log("Sidebar: " + props);

  const change_sidebar_state = props.change_sidebar_state.bind(this);
  let sidebar_state = props.sidebar_state;

  let item_selected_ini;
  if (window.location.pathname === "/") {
    item_selected_ini = "home";
  } else if (window.location.pathname === "/Dashboard") {
    item_selected_ini = "dashboard";
  } else if (window.location.pathname === "/About") {
    item_selected_ini = "about";
  } else {
    item_selected_ini = "home";
  }
  const [siderbar_item_selected, set_siderbar_item_selected] =
    useState(item_selected_ini);
  const change_sidebar_item_selected = (props) => {
    setTimeout(() => {
      set_siderbar_item_selected(props);
      change_sidebar_state();
    }, 10);
  };

  return (
    <div
      className={`
      ${sidebar_state ? "" : "hidden"}
      absolute z-40 fixed
      top-16 w-64 bottom-6 mx-4
      shadow-lg rounded-lg
      bg-white dark:bg-gray-900
      overflow-hidden
      `}
    >
      <Title></Title>
      <nav className="mt-10">
        <Homebutton
          siderbar_item_selected={siderbar_item_selected}
          change_sidebar_item_selected={change_sidebar_item_selected}
        ></Homebutton>

        <Aboutbutton
          siderbar_item_selected={siderbar_item_selected}
          change_sidebar_item_selected={change_sidebar_item_selected}
        ></Aboutbutton>

        <Dashboardbutton
          siderbar_item_selected={siderbar_item_selected}
          change_sidebar_item_selected={change_sidebar_item_selected}
        ></Dashboardbutton>
      </nav>
    </div>
  );
};

export default React.memo(Sidebar);
