import React, { Component } from "react";
import Search from "./Search"

class Home extends Component {
  render() {
    return (
      <div className="absolute m-56">
        <h2>Home</h2>
        <Search />
      </div>
    );
  }
}

export default Home;
