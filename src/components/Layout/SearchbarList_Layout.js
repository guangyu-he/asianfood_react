import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStar_solid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStar_regular } from "@fortawesome/free-regular-svg-icons";

import SearchbarListClose from "./SearchbarListClose_Layout";

const SearchBarList = React.memo((props) => {
  const handelClick_button = props.handelClick_item.bind(this);

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
      ${props.listview_state ? "" : "hidden"}
       z-50 absolute 
       top-16 inset-x-4 lg:w-1/2 lg:inset-x-1/4`}
    >
      <div className="bg-white shadow-xl h-auto dark:bg-gray-900 rounded-lg">
        <ul className="divide-y overflow-y-scroll h-72 divide-gray-300">
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
      <div className="absolute right-0">
        <SearchbarListClose
          handelClick_button={handelClick_button}
        ></SearchbarListClose>
      </div>
    </div>
  );
});

export default SearchBarList;
