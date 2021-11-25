import Searchbar from "./components/Searchbar";
import Sidebar from "./components/Sidebar";
import Listview from "./components/Listview";

import React, { Component, Fragment } from "react";
import { Outlet } from "react-router-dom";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebar_state: false,
      listmenu_state: false,
      searchbar_input: true,
    };

    this.change_sidebar_state = this.change_sidebar_state.bind(this);
    this.change_listview_state = this.change_listview_state.bind(this);
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
          change_listview_state={this.change_listview_state}
          display_input={this.state.searchbar_input}
        />
        <Sidebar
          display={this.state.sidebar_state}
          change_searchbar_input_false={this.change_searchbar_input_false}
          change_searchbar_input_true={this.change_searchbar_input_true}
        />
        <Listview display={this.state.listmenu_state} />

        <Outlet />
      </Fragment>
    );
  }
  change_sidebar_state() {
    this.setState(
      {
        sidebar_state: !this.state.sidebar_state,
        listmenu_state: false,
      },
      () => {}
    );
  }
  change_listview_state() {
    this.setState(
      {
        sidebar_state: false,
        listmenu_state: !this.state.listmenu_state,
      },
      () => {}
    );
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
