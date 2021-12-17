import React, { useState, Fragment, useRef } from "react";
import Menubutton from "./components/Layout/Menubutton_Layout";
import Sidebar from "./components/Layout/Sidebar_Layout";

const Layout = React.memo((props) => {
  console.log("Layout: " + props);
  //SECTION control sidebar component state
  const [sidebar_state, set_sidebar_state] = useState(true);
  function change_sidebar_state() {
    setTimeout(() => {
      set_sidebar_state(!sidebar_state);
    }, 10);
  }
  //!SECTION

  return (
    <Fragment>
      <Sidebar sidebar_state={sidebar_state} change_sidebar_state={change_sidebar_state}/>
      {/*<Outlet />*/}
      <Menubutton change_sidebar_state={change_sidebar_state}></Menubutton>
    </Fragment>
  );
});

export default Layout;
