import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";

import Searchbar from "./Searchbar";
import Sidebar from "./Sidebar";
import Listview from "./Listview";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebar_state: false,
      listmenu_state: false,
    };

    this.change_sidebar_state = this.change_sidebar_state.bind(this);
    this.change_listview_state = this.change_listview_state.bind(this);
  }

  render() {
    console.log(this.state.sidebar_state);
    return (
      <Router>
        <Fragment>
          <Searchbar change_sidebar_state={this.change_sidebar_state} change_listview_state={this.change_listview_state}/>
          <Sidebar content={this.state.sidebar_state} />
          <Listview />
          <Routes path="./" component={<App />} />
        </Fragment>
      </Router>
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
  change_listview_state() {
    this.setState(
      {
        listmenu_state: !this.listmenu_state,
      },
      () => {}
    );
  }
}
export default App;
