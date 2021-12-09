import React, { useRef, useEffect, useState, Fragment } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import Login from "../components/Dashboard/Login_Dashboard";
import Type from "../components/Dashboard/Type_Dashboard";
import Name from "../components/Dashboard/Name_Dashboard";
import GeoInfo from "../components/Dashboard/GeoInfo_Dashboard";
import Review from "../components/Dashboard/Review_Dashboard";
import ReviewDetails from "../components/Dashboard/ReviewDetails_Dashboard";
import Buttons from "../components/Dashboard/Buttons_Dashboard";

/*const API_URL_CREATE =
  "https://asianfood.heguangyu.net/create_location_react.php";*/
const API_URL_UPDATE =
  "https://asianfood.heguangyu.net/update_location_react.php";

const Dashboard = () => {
  const userInput = useRef();
  const passInput = useRef();

  const name_input = useRef();
  const geo_input = useRef();
  const type_input = useRef();
  const review_input = useRef();
  const review_details_input = useRef();

  const [login_display, set_login_display] = useState(true);

  const handelClick_login = (event) => {
    if (
      userInput.current.value === "admin" &&
      passInput.current.value === "950611"
    ) {
      setTimeout(() => {
        set_login_display(false);
      }, 100);
    } else {
    }
  };

  //SECTION handle props from Layout
  const location = useLocation(); //ANCHOR get props use location

  //SECTION if props location is null, set some default values to display components
  if (location.state === null) {
    location.state = {
      type_name: "",
      lat: "",
      lng: "",
      geo_name: "",
      review_points: "",
      review_text: "",
    };
  }
  //!SECTION

  //SECTION initialize variables
  const [geo_name, set_geo_name] = useState("");
  const [lat, set_lat] = useState("");
  const [lng, set_lng] = useState("");
  const [type_name, set_type_name] = useState("");
  const [review_points, set_review_points] = useState("");
  const [review_text, set_review_text] = useState("");
  //!SECTION

  //SECTION set variables using hook
  useEffect(() => {
    set_type_name(location.state.type_name);
  }, [location.state.type_name]);
  useEffect(() => {
    set_lat(location.state.lat);
  }, [location.state.lat]);
  useEffect(() => {
    set_lng(location.state.lng);
  }, [location.state.lng]);
  useEffect(() => {
    set_geo_name(location.state.geo_name);
  }, [location.state.geo_name]);
  useEffect(() => {
    set_review_points(location.state.review_points);
  }, [location.state.review_points]);
  useEffect(() => {
    set_review_text(location.state.review_text);
  }, [location.state.review_text]);
  //!SECTION
  //!SECTION

  //SECTION open in google function
  let gmap_link_name = geo_name; //ANCHOR set default link to geo_name
  const handelChange_name_input = (event) => {
    gmap_link_name = event.target.value;
  };
  const handelOnclick_name_button = (event) => {
    window.open("https://maps.google.co.in/maps?q=" + gmap_link_name, "_blank");
  };
  //!SECTION

  //ANCHOR control a text respond after click button
  const [submit_response, set_submit_response] = useState("");

  //SECTION control clear button state
  const handelButton_clear = (event) => {
    setTimeout(() => {
      set_geo_name("");
      set_lng("");
      set_lat("");
      set_type_name("");
      set_review_points("");
      set_review_text("");
      set_submit_response("");
    }, 100);
    name_input.current.defaultValue = "";
    geo_input.current.defaultValue = "";
    type_input.current.defaultValue = "";
    review_input.current.defaultValue = "";
    review_details_input.current.defaultValue = "";
  };
  //!SECTION

  //SECTION control sidebar component state
  const [alert_name_input, set_alert_name_input] = useState(false);
  const intervalRef_alert_name_input = useRef();
  function change_alert_name_input(props) {
    setTimeout(() => {
      set_alert_name_input(props);
    }, 100);
  }
  useEffect(() => {
    intervalRef_alert_name_input.current = alert_name_input;
  }, [alert_name_input]);
  //!SECTION

  //SECTION control sidebar component state
  const [alert_geo_input, set_alert_geo_input] = useState(false);
  const intervalRef_alert_geo_input = useRef();
  function change_alert_geo_input(props) {
    setTimeout(() => {
      set_alert_geo_input(props);
    }, 100);
  }
  useEffect(() => {
    intervalRef_alert_geo_input.current = alert_geo_input;
  }, [alert_geo_input]);
  //!SECTION

  //SECTION control sidebar component state
  const [alert_type_input, set_alert_type_input] = useState(false);
  const intervalRef_alert_type_input = useRef();
  function change_alert_type_input(props) {
    setTimeout(() => {
      set_alert_type_input(props);
    }, 100);
  }
  useEffect(() => {
    intervalRef_alert_type_input.current = alert_type_input;
  }, [alert_type_input]);
  //!SECTION

  //SECTION control sidebar component state
  const [alert_review_input, set_alert_review_input] = useState(false);
  const intervalRef_alert_review_input = useRef();
  function change_alert_review_input(props) {
    setTimeout(() => {
      set_alert_review_input(props);
    }, 100);
  }
  useEffect(() => {
    intervalRef_alert_review_input.current = alert_review_input;
  }, [alert_review_input]);
  //!SECTION

  const handelClick_submit = (event) => {
    set_submit_response("submitting");
    let latlng, lat, lng;
    if (name_input.current.value === "") {
      change_alert_name_input(true);
      return false;
    } else {
      change_alert_name_input(false);
    }
    if (geo_input.current.value === "") {
      change_alert_geo_input(true);
      return false;
    } else {
      change_alert_geo_input(false);
      latlng = geo_input.current.value.split(",");
      lat = latlng[0];
      lng = latlng[1];
    }
    if (type_input.current.value === "") {
      change_alert_type_input(true);
      return false;
    } else {
      change_alert_type_input(false);
    }
    if (review_input.current.value === "") {
      change_alert_review_input(true);
      return false;
    } else {
      change_alert_review_input(false);
    }
    if (review_details_input.current.value === "") {
    } else {
    }
    axios
      .get(
        `${API_URL_UPDATE}?n=${name_input.current.value}&lat=${lat}&lng=${lng}&type=${type_input.current.value}&r=${review_input.current.value}&rd=${review_details_input.current.value}`
      )
      .then(({ data }) => {
        set_submit_response(data);
        setTimeout(() => {
          handelButton_clear();
          //window.location.reload(false);
        }, 1500);
      });
  };

  return (
    <Fragment>
      <div
        className={`${
          login_display ? "" : "hidden"
        } fixed w-full inset-y-1/4 lg:w-1/3 lg:inset-x-1/3 lg:inset-y-1/4`}
      >
        <Login
          userInput={userInput}
          passInput={passInput}
          handelClick_login={handelClick_login}
        ></Login>
      </div>
      <div
        className={`${
          login_display ? "hidden" : ""
        } fixed w-full inset-y-1/4 lg:w-1/3 lg:inset-x-1/3 lg:inset-y-1/4`}
      >
        <Name
          alert_name_input={alert_name_input}
          geo_name={geo_name}
          handelChange_name_input={handelChange_name_input}
          handelOnclick_name_button={handelOnclick_name_button}
          gmap_link_name={gmap_link_name}
          name_input={name_input}
        ></Name>
        <GeoInfo
          alert_geo_input={alert_geo_input}
          lng={lng}
          lat={lat}
          geo_input={geo_input}
        ></GeoInfo>
        <Type
          alert_type_input={alert_type_input}
          type_name={type_name}
          type_input={type_input}
        ></Type>
        <Review
          alert_review_input={alert_review_input}
          review_points={review_points}
          review_input={review_input}
        ></Review>
        <ReviewDetails
          review_text={review_text}
          review_details_input={review_details_input}
        ></ReviewDetails>
        <Buttons
          handelClick_submit={handelClick_submit}
          handelButton_clear={handelButton_clear}
        ></Buttons>
        <p>{submit_response}</p>
      </div>
    </Fragment>
  );
};

export default Dashboard;
