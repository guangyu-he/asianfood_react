import React, { Fragment, useRef, useState, useEffect } from "react";
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

const API_URL_NAME_ANDTYPE_WITHLATLNG =
  "https://asianfood.heguangyu.net/return_location_name_andtype_withlatlng_react.php";

const type_input_text1 = "<b>Check restaurants nearby</b>";
const type_input_text2 = "<i>or the name of your interested restaurant</i>";
const type_input_text3 = "there is no restaurants in our database nearby";
const type_input_text4 = "can not get your location, please try again";

const chinese_input = "Chinese Restaurants...";
const japanese_input = "Japanese Restaurants...";
const korean_input = "Korean Restaurants...";
const vietnamese_input = "Vietnamese Restaurants...";

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
        names = [...names, korean_input];
      } else if (chi_name_list.indexOf(query) >= 0) {
        names = [...names, chinese_input];
      } else if (jap_name_list.indexOf(query) >= 0) {
        names = [...names, japanese_input];
      } else if (vie_name_list.indexOf(query) >= 0) {
        names = [...names, vietnamese_input];
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
      change_listitem([
        chinese_input,
        japanese_input,
        korean_input,
        vietnamese_input,
        type_input_text1,
        type_input_text2,
      ]);
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

  //ANCHOR get user location
  const [user_location, set_user_location] = useState({ lat: 0, lng: 0 });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      if (position.coords === null) {
        return false;
      }
      let user_location_obj = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      set_user_location(user_location_obj);
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  }, []);

  const handelClick_item = async (query) => {
    if (
      query === type_input_text2 ||
      query === "" ||
      query === type_input_text3
    ) {
      change_listview_state(false);
      return false;
    } else if (query === type_input_text1) {
      console.log(user_location);
      //return false;
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
    if (query === korean_input) {
      type_query = "ko";
    } else if (query === chinese_input) {
      type_query = "ch";
    } else if (query === japanese_input) {
      type_query = "ja";
    } else if (query === vietnamese_input) {
      type_query = "vi";
    } else if (query === type_input_text1) {
      type_query = "geo";
    } else {
    }
    if (type_query === "") {
    } else if (type_query === "geo") {
      /*console.log(
        `${API_URL_NAME_ANDTYPE_WITHLATLNG}?lat=${user_location.lat}&lng=${user_location.lng}`
      );*/
      if (user_location.lat === 0 && user_location.lng === 0) {
        change_listitem([type_input_text4]);
        return false;
      }
      await axios
        .get(
          `${API_URL_NAME_ANDTYPE_WITHLATLNG}?lat=${user_location.lat}&lng=${user_location.lng}`
        )
        .then(({ data }) => {
          results = data.split(",");
        });
      for (let i = 0; i < results.length - 1; i++) {
        if (results[i] === undefined) {
        } else {
          names = [...names, results[i]];
        }
      }

      if (names === "") {
        change_listitem([type_input_text3]);
      } else {
        change_listitem(names);
      }
      return false;
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
          usr_lat: user_location.lat,
          usr_lng: user_location.lng,
        },
      });

      //ANCHOR clean searchbar input
      searchInput.current.value = "";
    } else if (!query) {
      change_listitem([
        chinese_input,
        japanese_input,
        korean_input,
        vietnamese_input,
        type_input_text1,
        type_input_text2,
      ]);
    }
  };
  //!SECTION

  //ANCHOR type input to show instructions
  const handleClick_input = (event) => {
    change_listview_state(true);
    change_listitem([
      chinese_input,
      japanese_input,
      korean_input,
      vietnamese_input,
      type_input_text1,
      type_input_text2,
    ]);
  };

  const enterkeydown = (e) => {
    if (e.keyCode === 13) {
      handelClick_item(listitem[0]);
      searchInput.current.value = "";
    }
  };

  return (
    <Fragment>
      <SearchbarInput
        handleClick_input={handleClick_input}
        searchInput={searchInput}
        handleInputChange={handleInputChange}
        enterkeydown={enterkeydown}
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
