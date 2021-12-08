import React, { useRef, useEffect, useState, Fragment } from "react";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const userInput = useRef();
  const passInput = useRef();

  const name_input = useRef();
  const geo_input = useRef();
  const type_input = useRef();
  const review_input = useRef();
  const review_details_input = useRef();

  //SECTION control sidebar component state
  const [correct_display, set_correct_display] = useState(false);
  const intervalRef_correct_display = useRef();
  function change_correct_display(props) {
    setTimeout(() => {
      set_correct_display(props);
    }, 100);
  }
  useEffect(() => {
    intervalRef_correct_display.current = correct_display;
  }, [correct_display]);
  //!SECTION
  let correct_text = "wrong!";

  const handelClick_login = (event) => {
    if (
      userInput.current.value === "admin" &&
      passInput.current.value === "950611"
    ) {
      change_correct_display(false);
      //window.open('https://www.google.com', '_blank');
      /*window.location.replace(
        "https://asianfood.heguangyu.net/data_manage.html"
      );*/
    } else {
      change_correct_display(true);
    }
  };

  let marker_pos = "";
  let info_name = "";
  let type = "";
  let review = 0;
  let review_details = "";

  const location = useLocation();
  if (location.state === null) {
  } else {
    marker_pos = {
      lat: parseFloat(location.state.lat),
      lng: parseFloat(location.state.lng),
    };
    info_name = location.state.geo_name;
    type = location.state.type_name;
    review = parseInt(location.state.review_points);
    review_details = location.state.review_text;
  }

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

  //SECTION work with open in google
  const [gmap_link_name, set_gmap_link_name] = useState("");
  const intervalRef_gmap_link_name = useRef();
  function change_gmap_link_name(props) {
    setTimeout(() => {
      set_gmap_link_name(props);
    }, 100);
  }
  useEffect(() => {
    intervalRef_gmap_link_name.current = gmap_link_name;
  }, [gmap_link_name]);
  const handelChange_name_input = (event) => {
    change_gmap_link_name(event.target.value);
  };
  //!SECTION

  const handelClick_submit = (event) => {
    console.log(name_input.current.value);
    if (name_input.current.value === "") {
      change_alert_name_input(true);
    } else {
      change_alert_name_input(false);
    }
    if (geo_input.current.value === "") {
      change_alert_geo_input(true);
    } else {
      change_alert_geo_input(false);
    }
    if (type_input.current.value === "") {
      change_alert_type_input(true);
    } else {
      change_alert_type_input(false);
    }
    if (review_input.current.value === "") {
      change_alert_review_input(true);
    } else {
      change_alert_review_input(false);
    }
  };

  const handelClick_clear = (event) => {
    change_gmap_link_name("");
    name_input.current.value = "";
    geo_input.current.value = "";
    type_input.current.value = "";
    review_input.current.value = "";
    review_details_input.current.value = "";
  };

  return (
    <Fragment>
      <div className={`${correct_display ? "" : "hidden"} absolute inset-96`}>
        <h2>Dashboard</h2>
        <div>
          <div>
            <label className="sr-only">User Name</label>
            <input
              type="text"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="User Name"
              ref={userInput}
            ></input>
          </div>
          <div>
            <label className="sr-only">Password</label>
            <input
              type="password"
              autoComplete="current-password"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
              ref={passInput}
            ></input>
          </div>
        </div>
        <div>
          <button
            type="submit"
            onClick={handelClick_login}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign in
          </button>
        </div>
        <p className={`${correct_display ? "" : "hidden"} text-red-600`}>
          {" "}
          {correct_text}{" "}
        </p>
      </div>
      <div
        className={`${
          correct_display ? "hidden" : ""
        } fixed bg-gray-100 inset-x-0 inset-y-12`}
      >
        <div className="flow-root p-1">
          <p className="inline">Name:</p>
          <a
            href={`https://maps.google.co.in/maps?q=${gmap_link_name}`}
            target="_blank"
            rel="noreferrer"
            className="text-purple-400 antialiased inline items-end"
          >
            <span className="text-blue-600">Open </span>
            <span className="text-red-600">in </span>
            <span className="text-yellow-600">Google</span>
          </a>
          <input
            className={`${
              alert_name_input ? "border-2 border-red-500" : ""
            } w-80 block`}
            defaultValue={info_name}
            ref={name_input}
            onInput={handelChange_name_input}
          ></input>
        </div>
        <div className="flow-root p-1">
          <p>Geo Info:</p>
          <input
            className={`${
              alert_geo_input ? "border-2 border-red-500" : ""
            } w-80`}
            defaultValue={marker_pos.lat + "," + marker_pos.lat}
            ref={geo_input}
          ></input>
        </div>
        <div className="flow-root p-1">
          <p>Type:</p>
          <input
            className={`${
              alert_type_input ? "border-2 border-red-500" : ""
            } w-80`}
            defaultValue={type}
            ref={type_input}
          ></input>
        </div>
        <div className="flow-root p-1">
          <p>Review:</p>
          <input
            className={`${
              alert_review_input ? "border-2 border-red-500" : ""
            } w-80`}
            defaultValue={review}
            ref={review_input}
          ></input>
        </div>
        <div className="flow-root p-1">
          <p>Review details:</p>
          <input
            className={`w-80 h-12`}
            defaultValue={review_details}
            ref={review_details_input}
          ></input>
        </div>
        <div className="py-2">
          <button
            type="submit"
            onClick={handelClick_submit}
            className="group relative w-80 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            submit
          </button>
        </div>
        <div>
          <button
            type="submit"
            onClick={handelClick_clear}
            className="group relative w-80 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            clear
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
