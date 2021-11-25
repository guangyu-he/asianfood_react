import { Link } from "react-router-dom";
import React, { Component } from "react";

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      class_link1:
        "flex items-center mt-5 py-2 px-8 bg-gray-200 text-gray-700 border-r-4 border-gray-700",
      class_link2:
        "flex items-center mt-5 py-2 px-8 text-gray-600 border-r-4 border-white hover:bg-gray-200 hover:text-gray-700 hover:border-gray-700",
      class_link3:
        "flex items-center mt-5 py-2 px-8 text-gray-600 border-r-4 border-white hover:bg-gray-200 hover:text-gray-700 hover:border-gray-700",
      class_highlighted:
        "flex items-center mt-5 py-2 px-8 bg-gray-200 text-gray-700 border-r-4 border-gray-700",
      class_non_highlighted:
        "flex items-center mt-5 py-2 px-8 text-gray-600 border-r-4 border-white hover:bg-gray-200 hover:text-gray-700 hover:border-gray-700",
    };
    this.handleClick_li1 = this.handleClick_li1.bind(this);
    this.handleClick_li2 = this.handleClick_li2.bind(this);
    this.handleClick_li3 = this.handleClick_li3.bind(this);
  }

  render() {
    return (
      <div
        className={`${
          this.props.display ? "" : "hidden"
        } absolute z-20 top-14 w-64 h-screen bg-white`}
      >
        <li className="inline-flex items-center p-2 mr-4 text-gray-700">
          <Link
            to="/"
            onClick={this.handleClick_li1}
            className="text-xl font-bold uppercase tracking-wide"
          >
            Asian Food in Berlin
          </Link>
        </li>

        <nav className="mt-10">
          <Link
            to="/"
            onClick={this.handleClick_li1}
            className={this.state.class_link1}
          >
            <span className="mx-4 font-medium">Home</span>
          </Link>

          <Link
            to="Dashboard"
            onClick={this.handleClick_li2}
            className={this.state.class_link2}
          >
            <span className="mx-4 font-medium">Dashboard</span>
          </Link>

          <Link
            to="About"
            onClick={this.handleClick_li3}
            className={this.state.class_link3}
          >
            <span className="mx-4 font-medium">About</span>
          </Link>
        </nav>
      </div>
    );
  }

  handleClick_li2() {
    this.props.change_searchbar_input_true();
    this.setState(
      {
        class_link2: this.state.class_highlighted,

        class_link1: this.state.class_non_highlighted,
        class_link3: this.state.class_non_highlighted,
      },
      () => {}
    );
  }
  handleClick_li1() {
    this.props.change_searchbar_input_true();
    this.setState(
      {
        class_link1: this.state.class_highlighted,

        class_link2: this.state.class_non_highlighted,
        class_link3: this.state.class_non_highlighted,
      },
      () => {}
    );
  }
  handleClick_li3() {
    this.props.change_searchbar_input_false();
    this.setState(
      {
        class_link3: this.state.class_highlighted,

        class_link1: this.state.class_non_highlighted,
        class_link2: this.state.class_non_highlighted,
      },
      () => {}
    );
  }
}

export default Sidebar;
