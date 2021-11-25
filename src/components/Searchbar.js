import React, { Component, Fragment } from "react";
import Listview from "./Listview";
import axios from "axios";

const API_URL = "https://asianfood.heguangyu.net/return_location_react.php";

class Searchbar extends Component {
  constructor(props) {
    super(props);

    this.handleClick_button = this.handleClick_button.bind(this);
    this.handleClick_input = this.handleClick_input.bind(this);

    this.state = {
      query: "",
      results: [],
      display_list: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.getInfo = this.getInfo.bind(this);
  }

  getInfo = () => {
    axios.get(`${API_URL}?n=${this.state.query}`).then(({ data }) => {
      this.setState({
        results: data.split("<br>"),
      });
    });
  };

  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value,
      },
      () => {
        if (this.state.query && this.state.query.length >= 1) {
          this.getInfo();
        } else if (!this.state.query) {
        }
      }
    );
  };

  render() {
    let names = [];
    for (let i = 0; i < this.state.results.length - 1; i++) {
      if (this.state.results[i] === undefined) {
      } else {
        names = [...names, this.state.results[i].split(",")[0]];
      }
    }
    return (
      <Fragment>
        <div className="fixed z-10 flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
          <button
            onClick={this.handleClick_button}
            className="left-0 absolute inline-flex p-3 rounded text-white ml-auto text-gray-700 outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <input
            className={`${
              this.props.display_input ? "" : "hidden"
            } left-12 absolute peer h-full w-full outline-none text-sm text-gray-700 pr-2`}
            type="text"
            id="search"
            placeholder="Search something.."
            onClick={this.handleClick_input}
            ref={(input) => (this.search = input)}
            onChange={this.handleInputChange}
          />
          <div className="right-0 absolute grid place-items-center h-full w-12 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <Listview results={names} display={this.state.display_list} />
      </Fragment>
    );
  }

  handleClick_button() {
    this.props.change_sidebar_state();
    this.setState({
      display_list: false,
    });
  }

  handleClick_input() {
    this.props.change_sidebar_by_input();
    this.setState({
      display_list: !this.state.display_list,
    });
  }
}

export default Searchbar;
