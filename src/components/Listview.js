import React, { Component } from "react";

class Listview extends Component {
  render() {
    return (
      <div
        className={`${
          this.props.display ? "" : "hidden"
        } container min-w-full z-10 top-14 absolute`}
      >
        <div className="flex justify-center">
          <div className="bg-white shadow-xl rounded-lg w-1/2">
            <ul className="divide-y divide-gray-300">
              {this.props.results.map((item, index) => {
                return (
                  <li
                    className="p-4 hover:bg-gray-50 cursor-pointer"
                    key={item + index}
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
  }
}

export default Listview;
