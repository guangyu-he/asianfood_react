import React, { useState, Fragment, useEffect, useRef } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL_NAME =
  "https://asianfood.heguangyu.net/return_location_name_react.php";

const API_URL_GEO =
  "https://asianfood.heguangyu.net/return_location_geo_react.php";

const Layout = () => {
  const searchInput = useRef();

  let [sidebar_state, set_sidebar_state] = useState(false);
  let [searchbar_state, set_searchbar_state] = useState(true);
  let [listview_state, set_listview_state] = useState(false);
  let [searchbar_button_state, set_searchbar_button_state] = useState(false);

  let [inputvalue, set_inputvalue] = useState("Search something...");

  let [listitem, set_listitem] = useState([]);

  let [geo_item, set_geo_item] = useState("");

  const handleInputChange = async (event) => {
    set_listview_state(true);
    let query = event.target.value;
    let results = [];
    if (query && query.length > 0) {
      await axios.get(`${API_URL_NAME}?n=${query}`).then(({ data }) => {
        results = data.split(",");
      });
      let names = [];
      for (let i = 0; i < results.length - 1; i++) {
        if (results[i] === undefined) {
        } else {
          names = [...names, results[i]];
        }
      }
      set_listitem(names);
    } else if (!query) {
    }
  };

  const handelClick_button = (event) => {
    set_sidebar_state(!sidebar_state);
  };

  const handelClick_input = (event) => {
    set_listview_state(!listview_state);
    searchInput.current.value = "";
  };

  const handelClick_item = async (query) => {
    set_listview_state(false);
    set_searchbar_button_state(true);
    let results = [];
    if (query && query.length > 0) {
      await axios.get(`${API_URL_GEO}?n=${query}`).then(({ data }) => {
        results = data.split(",");
      });
      let names = [];
      for (let i = 0; i < results.length - 1; i++) {
        if (results[i] === undefined) {
        } else {
          names = [...names, results[i]];
        }
      }
      let geo = {
        lat: "",
        lng: "",
      };
      geo.lat = names[0];
      geo.lng = names[1];
      set_geo_item(geo);
      set_inputvalue(query);
      searchInput.current.value = "";
    } else if (!query) {
    }
  };

  const navigate = useNavigate();

  const toHome = () => {
    set_searchbar_button_state(false);
    navigate("/", { state: geo_item });
  };

  useEffect(() => {}, [inputvalue]);

  return (
    <Fragment>
      <div className="fixed z-10 flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
        <button
          onClick={handelClick_button}
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
            searchbar_state ? "" : "hidden"
          } left-12 absolute peer h-full w-full outline-none text-sm text-gray-700 pr-2`}
          type="text"
          id="search"
          ref={searchInput}
          placeholder={inputvalue}
          onClick={handelClick_input}
          onChange={handleInputChange}
        />
        <button
          onClick={toHome}
          className={`right-0 absolute grid place-items-center h-full w-12 ${searchbar_button_state ? "text-black bg-gray-300" : "text-gray-300"}`}
        >
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

      <div
        className={`${
          listview_state ? "" : "hidden"
        } container min-w-full z-10 top-14 absolute`}
      >
        <div className="flex justify-center">
          <div className="bg-white shadow-xl rounded-lg w-1/2">
            <ul className="divide-y divide-gray-300">
              {listitem.map((item, index) => {
                return (
                  <li
                    className="p-4 hover:bg-gray-50 cursor-pointer"
                    key={item + index}
                    onClick={() => handelClick_item(item)}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div
        className={`${
          sidebar_state ? "" : "hidden"
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
            onClick={() => set_searchbar_state(true)}
          >
            <span className="mx-4 font-medium">Home</span>
          </Link>

          <Link
            to="/Dashboard"
            className="flex items-center mt-5 py-2 px-8 bg-gray-200 text-gray-700 border-r-4 border-gray-700"
            onClick={() => set_searchbar_state(true)}
          >
            <span className="mx-4 font-medium">Dashboard</span>
          </Link>

          <Link
            to="/About"
            className="flex items-center mt-5 py-2 px-8 bg-gray-200 text-gray-700 border-r-4 border-gray-700"
            onClick={() => set_searchbar_state(false)}
          >
            <span className="mx-4 font-medium">About</span>
          </Link>
        </nav>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Layout;
