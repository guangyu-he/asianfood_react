import React, { Component, Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import NoMatch from "./pages/NoMatch";
import Layout from "./Layout";

class App extends Component {
  render() {
    return (
      <Fragment>
        {/* Routes nest inside one another. Nested route paths build upon
                parent route paths, and nested route elements render inside
                parent route elements. See the note about <Outlet> below. */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Dashboard" element={<Dashboard />} />

            {/* Using path="*"" means "match anything", so this route
                      acts like a catch-all for URLs that we don't have explicit
                      routes for. */}
            <Route path="/NoMatch" element={<NoMatch />} />
          </Route>
        </Routes>
      </Fragment>
    );
  }
}
export default App;
