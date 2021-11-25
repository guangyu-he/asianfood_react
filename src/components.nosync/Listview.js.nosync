import React, { Component, Fragment} from "react";

import Home from "../pages/Home"

import axios from "axios";

const API_URL = "https://asianfood.heguangyu.net/return_location_geo_react.php";

class Listview extends Component {
  constructor(props) {
    super(props);

    this.handleClick_li = this.handleClick_li.bind(this);
    this.getInfo = this.getInfo.bind(this);

    this.state = {
      lat: "",
      lng: "",
    };
  }

  handleClick_li(value) {
    this.getInfo(value);
  }

  getInfo(value) {
    axios.get(`${API_URL}?n=${value}`).then(({ data }) => {
      let lat = data.split(",")[0];
      let lng = data.split(",")[1];
      this.setState(
        {
          lat: lat,
          lng: lng,
        },
        () => {
          console.log(this.state);
        }
      );
    });
  }

  render() {
    return (
      <Fragment>
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
      </Fragment>
    );
  }
}

export default Listview;
