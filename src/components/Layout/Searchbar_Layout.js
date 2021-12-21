import React, { Fragment, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import SearchbarInput from "./SearchbarInput_Layout";
import SearchBarList from "./SearchbarList_Layout";

const API_URL_GEO =
  "https://asianfood.heguangyu.net/return_location_geo_react.php";

const API_URL_TYPE =
  "https://asianfood.heguangyu.net/return_location_type_react.php";

const API_URL_REVIEW_DETAILS =
  "https://asianfood.heguangyu.net/return_location_review_details_react.php";

const API_URL_NAME_OFTYPE =
  "https://asianfood.heguangyu.net/return_location_name_oftype_react.php";

const API_URL_NAME_ANDTYPE =
  "https://asianfood.heguangyu.net/return_location_name_andtype_react.php";

const type_input_text1 =
  "type your appetite from Chinese/Japaneses/Korean/Vietnamese";
const type_input_text2 = "or the name of your interested restaurant";

const Searchbar = React.memo((props) => {
  //ANCHOR create ref for searchInput
  const searchInput = useRef();

  //SECTION do when input has changed
  const handleInputChange = async (event) => {
    //ANCHOR open item listview and say loading
    change_listview_state(true);
    change_listitem(["loading..."]);

    //ANCHOR query from input change
    let query = event.target.value;

    //ANCHOR a query list for potential searching through type
    let kor_name_list = ["k", "K", "ko", "Ko", "kor", "Kor"];
    let chi_name_list = ["c", "C", "ch", "Ch", "chi", "Chi"];
    let jap_name_list = ["j", "J", "ja", "Ja", "jap", "Jap"];
    let vie_name_list = ["v", "V", "vi", "Vi", "vie", "Vie"];

    if (query && query.length > 0) {
      //ANCHOR show option for searching by type
      let names = [];
      if (kor_name_list.indexOf(query) >= 0) {
        names = [...names, "Korean Restaurants..."];
      } else if (chi_name_list.indexOf(query) >= 0) {
        names = [...names, "Chinese Restaurants..."];
      } else if (jap_name_list.indexOf(query) >= 0) {
        names = [...names, "Japanese Restaurants..."];
      } else if (vie_name_list.indexOf(query) >= 0) {
        names = [...names, "Vietnamese Restaurants..."];
      }

      //ANCHOR require data from php
      //ANCHOR display both name and review
      let results = [];
      await axios.get(`${API_URL_NAME_ANDTYPE}?n=${query}`).then(({ data }) => {
        results = data.split(",");
      });
      //ANCHOR handle data into arrays
      for (let i = 0; i < results.length - 1; i++) {
        if (results[i] === undefined) {
        } else {
          names = [...names, results[i]];
        }
      }
      //ANCHOR display arrays in list
      change_listitem(names);
    } else if (!query) {
      //ANCHOR if nothing there, close the list view
      //change_listview_state(false);
      change_listitem([type_input_text1, type_input_text2]);
    }
  };
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

  //SECTION add marker on Map_Home.js when clicking items from list
  //ANCHOR using useNavigate to pass props
  const navigate = useNavigate();

  const handelClick_item = async (query) => {
    if (query === type_input_text1 || query === type_input_text2) {
      change_listview_state(false);
      return false;
    }

    //ANCHOR initial a result container
    let results = [],
      names = "",
      type = "",
      review_details = "";

    //ANCHOR say loading when querying data form server
    change_listitem(["loading..."]);

    //SECTION query data using type
    let type_query = "";
    if (query === "Korean Restaurants...") {
      type_query = "ko";
    } else if (query === "Chinese Restaurants...") {
      type_query = "ch";
    } else if (query === "Japanese Restaurants...") {
      type_query = "ja";
    } else if (query === "Vietnamese Restaurants...") {
      type_query = "vi";
    } else {
    }
    if (type_query === "") {
    } else {
      await axios
        .get(`${API_URL_NAME_OFTYPE}?n=${type_query}`)
        .then(({ data }) => {
          results = data.split(",");
        });
      for (let i = 0; i < results.length - 1; i++) {
        if (results[i] === undefined) {
        } else {
          names = [...names, results[i]];
        }
      }
      change_listitem(names);
      return false;
    }
    //!SECTION

    //ANCHOR separate name and review, only use name in query here and review later
    let name_query = query.split(";")[0];
    if (name_query && name_query.length > 0) {
      await axios.get(`${API_URL_GEO}?n=${name_query}`).then(({ data }) => {
        results = data.split(",");
      });
      for (let i = 0; i < results.length; i++) {
        if (results[i] === undefined) {
        } else {
          names = [...names, results[i]];
        }
      }
      await axios.get(`${API_URL_TYPE}?n=${name_query}`).then(({ data }) => {
        type = data;
      });
      await axios
        .get(`${API_URL_REVIEW_DETAILS}?n=${name_query}`)
        .then(({ data }) => {
          review_details = data;
        });

      //ANCHOR navigate to home.js with geo object
      //console.log(window.location.pathname);

      change_listview_state(false); //ANCHOR close list when loaded

      navigate(window.location.pathname, {
        state: {
          info_state: true,
          lat: names[0],
          lng: names[1],
          geo_name: name_query,
          type_name: type,
          review_points: query.split(";")[1],
          review_text: review_details,
        },
      });

      //ANCHOR clean searchbar input
      searchInput.current.value = "";
    } else if (!query) {
      change_listitem([type_input_text1, type_input_text2]);
    }
  };
  //!SECTION

  const handleClick_input = (event) => {
    change_listview_state(true);
    change_listitem([type_input_text1, type_input_text2]);
  };

  return (
    <Fragment>
      <SearchbarInput
        handleClick_input={handleClick_input}
        searchInput={searchInput}
        handleInputChange={handleInputChange}
      ></SearchbarInput>
      <SearchBarList
        listview_state={listview_state}
        listitem={listitem}
        handelClick_item={handelClick_item}
      ></SearchBarList>
    </Fragment>
  );
});

export default Searchbar;
