import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStar_solid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStar_regular } from "@fortawesome/free-regular-svg-icons";

const Itemlist = (props) => {
  const review_points_display = (review) => {
    var doms = [];
    for (let i = 0; i < review; i++) {
      doms.push(
        <FontAwesomeIcon key={"faStar_solid" + i} icon={faStar_solid}/>
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
      ${props.listview_state ? "" : "hidden"}
       container z-50 absolute
       min-w-full top-16 `}
    >
      <div className="flex justify-center">
        <div className="bg-white shadow-xl dark:bg-gray-900 rounded-lg w-1/2">
          <ul className="divide-y divide-gray-300">
            {props.listitem.map((item, index) => {
              return (
                <li
                  className="
                  p-4
                  hover:bg-gray-50 dark:hover:bg-gray-500 
                  dark:text-white 
                  cursor-pointer"
                  key={item + index}
                  onClick={() => props.handelClick_item(item)}
                >
                  {item.split(";")[0]} {"  "}
                  {review_points_display(item.split(";")[1])}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Itemlist);
