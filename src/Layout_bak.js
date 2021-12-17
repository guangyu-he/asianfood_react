import React, { useState, Fragment, useRef } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Sidebar from "./components/Layout/Sidebar_Layout";
import Itemlist from "./components/Layout/Itemlist_Layout";
import Searchbar from "./components/Layout/Searchbar_Layout";

import Menubutton from "./components/Layout/Menubutton_Layout";

const Layout = () => {
  //ANCHOR change title of the page
  /*useEffect(() => {
    document.title = "Asian Food in Berlin";
  }, []);*/

  //ANCHOR an async realization of useState;
  /*const [sidebar_state, set_sidebar_state] = useState(false);
  const intervalRef_sidebar_state = useRef();
  function change_sidebar_state() {
    setTimeout(() => {
      set_sidebar_state(!intervalRef_sidebar_state.current);
    }, 100);
  }
  useEffect(() => {
    intervalRef_sidebar_state.current = sidebar_state;
  }, [sidebar_state]);*/

  //SECTION control sidebar component state
  const [sidebar_state, set_sidebar_state] = useState(true);
  function change_sidebar_state() {
    setTimeout(() => {
      set_sidebar_state(!sidebar_state);
    }, 100);
  }
  //!SECTION

  //SECTION control searchbar input display state
  //ANCHOR the initial hover state in sidebar
  let sidebar_item_ini = {
    home: true,
    dashboard: false,
    about: false,
  };

  //ANCHOR initial input display state to true
  const [searchbar_state, set_searchbar_state] = useState(true);
  //ANCHOR the initial hover state in sidebar
  const [sidebar_item, set_sidebar_item] = useState(sidebar_item_ini);

  function change_searchbar_state(props, item) {
    //ANCHOR change hover state in sidebar
    sidebar_item_ini.home = false;
    sidebar_item_ini.dashboard = false;
    sidebar_item_ini.about = false;
    setTimeout(() => {
      if (item === "home") {
        sidebar_item_ini.home = true;
      } else if (item === "dashboard") {
        sidebar_item_ini.dashboard = true;
      } else if (item === "about") {
        sidebar_item_ini.about = true;
      }
      set_sidebar_item(sidebar_item_ini);

      //ANCHOR change input component state according to items
      set_searchbar_state(props);

      //ANCHOR should close side bar after clicking items
      change_sidebar_state();
    }, 100);
  }
  //!SECTION

  //SECTION do when clicking searchbar input
  const handelClick_input = (event) => {
    if (sidebar_state === true) {
      change_sidebar_state();
    }
  };
  //!SECTION

  return (
    <Fragment>
      <Sidebar
        sidebar_state={sidebar_state}
        change_searchbar_state={change_searchbar_state}
        sidebar_item={sidebar_item}
      />
      {/*<Outlet />*/}
      <Menubutton></Menubutton>
    </Fragment>
  );
};
export default Layout;
