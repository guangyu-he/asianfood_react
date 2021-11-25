import Searchbar from "./components/Searchbar";
import Sidebar from "./components/Sidebar";

import React, { Component, Fragment } from "react";
import { Outlet } from "react-router-dom";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebar_state: false,
      searchbar_input: true,
      names: "",
    };

    this.change_sidebar_state = this.change_sidebar_state.bind(this);
    this.change_sidebar_by_input = this.change_sidebar_by_input.bind(this);
    this.change_searchbar_input_true =
      this.change_searchbar_input_true.bind(this);
    this.change_searchbar_input_false =
      this.change_searchbar_input_false.bind(this);
  }
  render() {
    return (
      <Fragment>
        <Searchbar
          change_sidebar_state={this.change_sidebar_state}
          change_sidebar_by_input={this.change_sidebar_by_input}
          display_input={this.state.searchbar_input}
        />
        <Sidebar
          display={this.state.sidebar_state}
          change_searchbar_input_false={this.change_searchbar_input_false}
          change_searchbar_input_true={this.change_searchbar_input_true}
        />

        <Outlet />
      </Fragment>
    );
  }
  change_sidebar_state() {
    this.setState(
      {
        sidebar_state: !this.state.sidebar_state,
      },
      () => {}
    );
  }
  change_sidebar_by_input() {
    if (this.state.sidebar_state) {
      this.setState({
        sidebar_state: false,
      });
    } else {
    }
  }

  change_searchbar_input_false() {
    this.setState(
      {
        searchbar_input: false,
      },
      () => {}
    );
  }
  change_searchbar_input_true() {
    this.setState(
      {
        searchbar_input: true,
      },
      () => {}
    );
  }
}

export default Layout;
