import React from "react";
import { Link } from "react-router-dom";

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
          <Link to="/" className="text-xl font-bold uppercase tracking-wide" onClick={() => props.change_sidebar_item_selected("home")}>
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
          <Link to="/" className="text-xl font-bold uppercase tracking-wide" onClick={() => props.change_sidebar_item_selected("home")}>
            Asian Food in Berlin
          </Link>
        </li>
      );
    }
  });

export default Title;
