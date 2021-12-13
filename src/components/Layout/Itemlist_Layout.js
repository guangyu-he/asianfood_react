import React from "react";

const Itemlist = (props) => {
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
                  {item}
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
