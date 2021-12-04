import React, { useState, Fragment, useRef, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";

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

const Sidebar = (props) => {
  return (
    <div
      className={`${
        props.sidebar_state ? "" : "hidden"
      } absolute z-20 top-12 w-64 h-screen bg-white`}
    >
      <li className="inline-flex items-center p-2 mr-4 text-gray-700">
        <Link to="/" className="text-xl font-bold uppercase tracking-wide">
          Asian Food in Berlin
        </Link>
      </li>

      <nav className="mt-10">
        <Link
          to="/"
          className="flex items-center mt-5 py-2 px-8 bg-gray-200 text-gray-700 border-r-4 border-gray-700"
          onClick={() => props.change_searchbar_state(true)}
        >
          <span className="mx-4 font-medium">Home</span>
        </Link>

        <Link
          to="/Dashboard"
          className="flex items-center mt-5 py-2 px-8 bg-gray-200 text-gray-700 border-r-4 border-gray-700"
          onClick={() => props.change_searchbar_state(true)}
        >
          <span className="mx-4 font-medium">Dashboard</span>
        </Link>

        <Link
          to="/About"
          className="flex items-center mt-5 py-2 px-8 bg-gray-200 text-gray-700 border-r-4 border-gray-700"
          onClick={() => props.change_searchbar_state(false)}
        >
          <span className="mx-4 font-medium">About</span>
        </Link>
      </nav>
    </div>
  );
};

const Itemlist = (props) => {
  return (
    <div
      className={`${
        props.listview_state ? "" : "hidden"
      } container min-w-full z-50 top-14 absolute`}
    >
      <div className="flex justify-center">
        <div className="bg-white shadow-xl rounded-lg w-1/2">
          <ul className="divide-y divide-gray-300">
            {props.listitem.map((item, index) => {
              return (
                <li
                  className="p-4 hover:bg-gray-50 cursor-pointer"
                  key={item + index}
                  onClick={() => props.handelClick_item(item)}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Searchbar = (props) => {
  return (
    <div className="fixed z-10 flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
      <button
        onClick={props.handelClick_button}
        className="left-0 absolute inline-flex p-3 rounded text-white ml-auto text-gray-700 outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <input
        className={`${
          props.searchbar_state ? "" : "hidden"
        } left-12 absolute peer h-full w-full outline-none text-sm text-gray-700 pr-2`}
        type="text"
        id="search"
        ref={props.searchInput}
        placeholder={"Search something..."}
        onClick={props.handelClick_input}
        onChange={props.handleInputChange}
      />
      <button className="right-0 absolute grid place-items-center h-full w-12 text-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  );
};

const Layout = () => {
  //ANCHOR create ref for searchInput
  const searchInput = useRef();

  //SECTION custom async useState hooks
  //SECTION control sidebar component state
  const [sidebar_state, set_sidebar_state] = useState(false);
  const intervalRef_sidebar_state = useRef();
  function change_sidebar_state() {
    setTimeout(() => {
      set_sidebar_state(!intervalRef_sidebar_state.current);
    }, 100);
  }
  useEffect(() => {
    intervalRef_sidebar_state.current = sidebar_state;
  }, [sidebar_state]);
  //!SECTION

  //SECTION control searchbar component state
  const [searchbar_state, set_searchbar_state] = useState(true);
  const intervalRef_searchbar_state = useRef();
  function change_searchbar_state(props) {
    setTimeout(() => {
      set_searchbar_state(props);
    }, 100);
  }
  useEffect(() => {
    intervalRef_searchbar_state.current = searchbar_state;
  }, [searchbar_state]);
  //!SECTION

  //SECTION control listview component state
  const [listview_state, set_listview_state] = useState(false);
  const intervalRef_listview_state = useRef();
  function change_listview_state(props) {
    setTimeout(() => {
      set_listview_state(props);
    }, 100);
  }
  useEffect(() => {
    intervalRef_listview_state.current = listview_state;
  }, [listview_state]);
  //!SECTION

  //SECTION set list items
  const [listitem, set_listitem] = useState([]);
  const intervalRef_listitem = useRef();
  function change_listitem(props) {
    setTimeout(() => {
      set_listitem(props);
    }, 100);
  }
  useEffect(() => {
    intervalRef_listitem.current = listitem;
  }, [listitem]);
  //!SECTION
  //!SECTION

  //SECTION do when input has changed
  const handleInputChange = async (event) => {
    //ANCHOR open item listview
    change_listview_state(true);

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
    }
  };
  //!SECTION

  //SECTION open/close sidebar by clicking menu button
  const handelClick_button = (event) => {
    change_sidebar_state();
  };
  //!SECTION

  //SECTION do when clicking searchbar input
  const handelClick_input = (event) => {};
  //!SECTION

  //SECTION add marker on Home.js when clicking items from list
  //ANCHOR using useNavigate to pass props
  const navigate = useNavigate();

  const handelClick_item = async (query) => {
    //ANCHOR close list view
    change_listview_state(false);

    let results = [],
      names = "",
      type = "",
      review = "",
      review_details = "";

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
      change_listview_state(true);
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
      change_listview_state(true);
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
      change_listview_state(true);
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
      change_listview_state(true);
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
      navigate("/", { state: geo });

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
      />
      <Outlet />
    </Fragment>
  );
};
export default Layout;
