import React, { Component } from "react";

class Listview extends Component {
  constructor(props) {
    super(props);

    this.handleClick_li = this.handleClick_li.bind(this);
  }

  handleClick_li(value) {
    console.log(value);
  }

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
                    onClick={() => this.handleClick_li(item)}
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
