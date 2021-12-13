import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStar_solid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStar_regular } from "@fortawesome/free-regular-svg-icons";

const Info = (props) => {
  const review_points_display = (review) => {
    var doms = [];
    for (let i = 0; i < review; i++) {
      doms.push(
        <FontAwesomeIcon key={"faStar_solid" + i} icon={faStar_solid} />
      );
    }
    for (let j = 0; j < 5 - review; j++) {
      doms.push(
        <FontAwesomeIcon key={"faStar_regular" + j} icon={faStar_regular} />
      );
    }
    return doms;
  };
  return (
    <div
      className={`
      ${props.info_state ? "" : "hidden"} 
      fixed z-30 
      bg-white dark:bg-gray-900 
      rounded-lg shadow-lg
      bottom-6 inset-x-4 h-32 lg:left-1/4 lg:w-2/4
      overflow-hidden
      `}
    >
      <div className="inline-flex">
        <div className="content-center">
          <h2 className="text-purple-600 antialiased text-3xl">
            {props.info_name}
          </h2>
        </div>
        <div className="w-40">
          <h3 className="text-purple-400 antialiased text-1xl  items-end">
            {props.type}
          </h3>
          <a
            href={`https://maps.google.co.in/maps?q=${props.info_name}`}
            target="_blank"
            rel="noreferrer"
            className="text-purple-400 antialiased text-1xl items-end hover:bg-cyan-600"
          >
            <span className="text-blue-600 underline underline-offset-4">
              Open{" "}
            </span>
            <span className="text-red-600 underline underline-offset-4">
              in{" "}
            </span>
            <span className="text-yellow-600 underline underline-offset-4">
              Google
            </span>
          </a>
        </div>
      </div>
      <div>
        <div className="inline-flex dark:text-white">
          {review_points_display(props.review)}
        </div>
      </div>
      <div>
        <div className="dark:text-white">{props.review_details}</div>
      </div>
    </div>
  );
};

export default React.memo(Info);
