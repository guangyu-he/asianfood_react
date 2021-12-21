import React, { useState, Fragment } from "react";
import { Outlet } from "react-router-dom";

import Menubutton from "./components/Layout/Menubutton_Layout";
import Sidebar from "./components/Layout/Sidebar_Layout";
import Searchbar from "./components/Layout/Searchbar_Layout";

const Layout = React.memo((props) => {
  console.log("Layout: " + props);
  //SECTION control sidebar component state
  const [sidebar_state, set_sidebar_state] = useState(false);
  function change_sidebar_state(props) {
    setTimeout(() => {
      if (props === false) {
        set_sidebar_state(false);
      } else {
        set_sidebar_state(!sidebar_state);
      }
    }, 10);
  }
  //!SECTION

  return (
    <Fragment>
      <Searchbar></Searchbar>
      <Sidebar
        sidebar_state={sidebar_state}
        change_sidebar_state={change_sidebar_state}
      />
      <Menubutton change_sidebar_state={change_sidebar_state}></Menubutton>{" "}
      <Outlet />
    </Fragment>
  );
});

export default Layout;
