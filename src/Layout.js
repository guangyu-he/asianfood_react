import React, { useState, Fragment, useRef, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";

import Sidebar from "./components/Layout/Sidebar_Layout";
import Itemlist from "./components/Layout/Itemlist_Layout";
import Searchbar from "./components/Layout/Searchbar_Layout";

const API_URL_NAME =
  "https://asianfood.heguangyu.net/return_location_name_react.php";

const API_URL_GEO =
  "https://asianfood.heguangyu.net/return_location_geo_react.php";

const API_URL_TYPE =
  "https://asianfood.heguangyu.net/return_location_type_react.php";

const API_URL_REVIEW =
  "https://asianfood.heguangyu.net/return_location_review_react.php";

const API_URL_REVIEW_DETAILS =
  "https://asianfood.heguangyu.net/return_location_review_details_react.php";

const API_URL_NAME_OFTYPE =
  "https://asianfood.heguangyu.net/return_location_name_oftype_react.php";

const Layout = () => {
  //ANCHOR change title of the page
  useEffect(() => {
    document.title = "Asian Food in Berlin";
  }, []);

  //ANCHOR create ref for searchInput
  const searchInput = useRef();

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
  const [sidebar_state, set_sidebar_state] = useState(false);
  function change_sidebar_state() {
    setTimeout(() => {
      set_sidebar_state(!sidebar_state);
    }, 100);
  }
  //!SECTION 

  //SECTION control searchbar component state
  let sidebar_item_ini = {
    home: true,
    dashboard: false,
    about: false,
  };

  const [searchbar_state, set_searchbar_state] = useState(true);
  const [sidebar_item, set_sidebar_item] = useState(sidebar_item_ini);

  function change_searchbar_state(props, item) {
    sidebar_item_ini.home = false;
    sidebar_item_ini.dashboard = false;
    sidebar_item_ini.about = false;
    setTimeout(() => {
      set_searchbar_state(props);

      if (item === "home") {
        sidebar_item_ini.home = true;
      } else if (item === "dashboard") {
        sidebar_item_ini.dashboard = true;
      } else if (item === "about") {
        sidebar_item_ini.about = true;
      }
      set_sidebar_item(sidebar_item_ini);

      change_sidebar_state();
    }, 100);
  }
  //!SECTION

  //SECTION control listview component state
  const [listview_state, set_listview_state] = useState(false);
  function change_listview_state(props) {
    setTimeout(() => {
      set_listview_state(props);
    }, 100);
  }
  //!SECTION

  //SECTION set list items
  const [listitem, set_listitem] = useState([]);
  function change_listitem(props) {
    setTimeout(() => {
      set_listitem(props);
    }, 100);
  }
  //!SECTION

  //SECTION do when input has changed
  const handleInputChange = async (event) => {
    //ANCHOR open item listview
    change_listview_state(true);
    change_listitem(["loading..."]);

    let query = event.target.value;
    let results = [];
    let names = [];

    //ANCHOR require data from php
    if (query && query.length > 0) {
      if (query === "k" || query === "ko" || query === "kor") {
        names = [...names, "Korean Restaurants..."];
      } else if (query === "c" || query === "ch" || query === "chi") {
        names = [...names, "Chinese Restaurants..."];
      } else if (query === "j" || query === "ja" || query === "jap") {
        names = [...names, "Japanese Restaurants..."];
      } else if (query === "v" || query === "vi" || query === "vie") {
        names = [...names, "Vietnamese Restaurants..."];
      }
      await axios.get(`${API_URL_NAME}?n=${query}`).then(({ data }) => {
        results = data.split(",");
      });
      for (let i = 0; i < results.length - 1; i++) {
        if (results[i] === undefined) {
        } else {
          names = [...names, results[i]];
        }
      }
      change_listitem(names);
    } else if (!query) {
      change_listview_state(false);
    }
  };
  //!SECTION

  //SECTION open/close sidebar by clicking menu button
  const handelClick_button = (event) => {
    change_sidebar_state();
  };
  //!SECTION

  //SECTION do when clicking searchbar input
  const handelClick_input = (event) => {
    if (sidebar_state === true) {
      change_sidebar_state();
    }
  };
  //!SECTION

  //SECTION add marker on Home.js when clicking items from list
  //ANCHOR using useNavigate to pass props
  const navigate = useNavigate();

  const handelClick_item = async (query) => {

    let results = [],
      names = "",
      type = "",
      review = "",
      review_details = "";

    //ANCHOR close list view
    change_listitem(["loading..."]);


    if (query === "Korean Restaurants...") {
      await axios.get(`${API_URL_NAME_OFTYPE}?n=ko`).then(({ data }) => {
        results = data.split(",");
      });
      for (let i = 0; i < results.length - 1; i++) {
        if (results[i] === undefined) {
        } else {
          names = [...names, results[i]];
        }
      }
      //change_listview_state(true);
      change_listitem(names);
      return false;
    } else if (query === "Chinese Restaurants...") {
      await axios.get(`${API_URL_NAME_OFTYPE}?n=ch`).then(({ data }) => {
        results = data.split(",");
      });
      for (let i = 0; i < results.length - 1; i++) {
        if (results[i] === undefined) {
        } else {
          names = [...names, results[i]];
        }
      }
      //change_listview_state(true);
      change_listitem(names);
      return false;
    } else if (query === "Japanese Restaurants...") {
      await axios.get(`${API_URL_NAME_OFTYPE}?n=ja`).then(({ data }) => {
        results = data.split(",");
      });
      for (let i = 0; i < results.length - 1; i++) {
        if (results[i] === undefined) {
        } else {
          names = [...names, results[i]];
        }
      }
      //change_listview_state(true);
      change_listitem(names);
      return false;
    } else if (query === "Vietnamese Restaurants...") {
      await axios.get(`${API_URL_NAME_OFTYPE}?n=vi`).then(({ data }) => {
        results = data.split(",");
      });
      for (let i = 0; i < results.length - 1; i++) {
        if (results[i] === undefined) {
        } else {
          names = [...names, results[i]];
        }
      }
      //change_listview_state(true);
      change_listitem(names);
      return false;
    } else {
    }

    if (query && query.length > 0) {
        await axios.get(`${API_URL_GEO}?n=${query}`).then(({ data }) => {
        results = data.split(",");
      });
      for (let i = 0; i < results.length; i++) {
        if (results[i] === undefined) {
        } else {
          names = [...names, results[i]];
        }
      }
      await axios.get(`${API_URL_TYPE}?n=${query}`).then(({ data }) => {
        type = data;
      });
      await axios.get(`${API_URL_REVIEW}?n=${query}`).then(({ data }) => {
        review = data;
      });
      await axios
        .get(`${API_URL_REVIEW_DETAILS}?n=${query}`)
        .then(({ data }) => {
          review_details = data;
        });
      //ANCHOR build a object accepted by Marker in Home.js
      let geo = {
        lat: names[0],
        lng: names[1],
        geo_name: query,
        type_name: type,
        review_points: review,
        review_text: review_details,
      };
      //ANCHOR navigate to home.js with geo object
      //console.log(window.location.pathname);

      change_listview_state(false);//ANCHOR close list when loaded

      navigate(window.location.pathname, { state: geo });

      //ANCHOR clean searchbar input
      searchInput.current.value = "";
    } else if (!query) {
    }
  };
  //!SECTION

  return (
    <Fragment>
      <Searchbar
        handelClick_button={handelClick_button}
        searchbar_state={searchbar_state}
        sidebar_state={sidebar_state}
        searchInput={searchInput}
        handleInputChange={handleInputChange}
        handelClick_input={handelClick_input}
      />
      <Itemlist
        listview_state={listview_state}
        listitem={listitem}
        handelClick_item={handelClick_item}
      />
      <Sidebar
        sidebar_state={sidebar_state}
        change_searchbar_state={change_searchbar_state}
        sidebar_item={sidebar_item}
      />
      <Outlet />
    </Fragment>
  );
};
export default Layout;
