import React, { useRef, useEffect, useState, Fragment } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const API_URL_CREATE =
  "https://asianfood.heguangyu.net/create_location_react.php";

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

  const location = useLocation();
  if (location.state === null) {
    location.state = {
      type_name: "",
      lat: "",
      lng: "",
      geo_name: "",
      review_points: "",
      review_text: "",
    };
  } else {
  }

  const [type_name, set_type_name] = useState("");
  useEffect(() => {
    set_type_name(location.state.type_name);
  }, [location.state.type_name]);
  const Type = React.memo((props) => {
    //console.log(props.type_name);
    return (
      <div className="flow-root p-1">
        <p>Type:</p>
        <input
          className={`${
            props.alert_type_input ? "border-2 border-red-500" : ""
          } w-80`}
          defaultValue={props.type_name}
          ref={type_input}
        ></input>
      </div>
    );
  });

  const [lat, set_lat] = useState(0);
  const [lng, set_lng] = useState(0);
  useEffect(() => {
    set_lat(location.state.lat);
  }, [location.state.lat]);
  useEffect(() => {
    set_lng(location.state.lng);
  }, [location.state.lng]);
  const GeoInfo = React.memo((props) => {
    let defaultValue = "";
    if (props.lat === "") {
    } else {
      defaultValue = props.lat + "," + props.lng;
    }
    return (
      <div className="flow-root p-1">
        <p>Geo Info:</p>
        <input
          className={`${
            props.alert_geo_input ? "border-2 border-red-500" : ""
          } w-80`}
          defaultValue={defaultValue}
          ref={geo_input}
        ></input>
      </div>
    );
  });

  const [geo_name, set_geo_name] = useState("");
  useEffect(() => {
    set_geo_name(location.state.geo_name);
  }, [location.state.geo_name]);
  let gmap_link_name = "";
  const handelChange_name_input = (event) => {
    gmap_link_name = event.target.value;
    console.log(gmap_link_name);
  };
  const handelOnclick_name_button = (event) => {
    window.open("https://maps.google.co.in/maps?q=" + gmap_link_name, "_blank");
  };
  const Name = React.memo((props) => {
    return (
      <div className="flow-root p-1">
        <p className="inline">Name:</p>
        <button
          onClick={props.handelOnclick_name_button}
          className="antialiased inline items-end"
        >
          <span className="text-blue-600">Open </span>
          <span className="text-red-600">in </span>
          <span className="text-yellow-600">Google</span>
        </button>
        <input
          className={`${
            props.alert_name_input ? "border-2 border-red-500" : ""
          } w-80 block`}
          defaultValue={props.geo_name}
          ref={name_input}
          onInput={props.handelChange_name_input}
        ></input>
      </div>
    );
  });

  const [review_points, set_review_points] = useState(0);
  useEffect(() => {
    set_review_points(location.state.review_points);
  }, [location.state.review_points]);
  const Review = React.memo((props) => {
    return (
      <div className="flow-root p-1">
        <p>Review:</p>
        <input
          className={`${
            props.alert_review_input ? "border-2 border-red-500" : ""
          } w-80`}
          defaultValue={props.review_points}
          ref={review_input}
        ></input>
      </div>
    );
  });

  const [review_text, set_review_text] = useState("");
  useEffect(() => {
    set_review_text(location.state.review_text);
  }, [location.state.review_text]);
  const ReviewDetails = React.memo((props) => {
    return (
      <div className="flow-root p-1">
        <p>Review details:</p>
        <input
          className={`w-80 h-12`}
          defaultValue={props.review_text}
          ref={review_details_input}
        ></input>
      </div>
    );
  });

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

  const [submit_response, set_submit_response] = useState("");
  const handelClick_submit = (event) => {
    //console.log(name_input.current.value);
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
        `${API_URL_CREATE}?n=${name_input.current.value}&lat=${lat}&lng=${lng}&type=${type_input.current.value}&r=${review_input.current.value}&rd=${review_details_input.current.value}`
      )
      .then(({ data }) => {
        console.log(data);
        set_submit_response(data);
      });
  };

  const handelClick_clear = (event) => {
    name_input.current.value = "";
    set_geo_name("");
    geo_input.current.value = "";
    set_lng("");
    set_lat("");
    type_input.current.value = "";
    set_type_name("");
    review_input.current.value = "";
    set_review_points("");
    review_details_input.current.value = "";
    set_review_text("");

    set_submit_response("");
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
        <Name
          alert_name_input={alert_name_input}
          geo_name={geo_name}
          handelChange_name_input={handelChange_name_input}
          handelOnclick_name_button={handelOnclick_name_button}
          gmap_link_name={gmap_link_name}
        ></Name>
        <GeoInfo
          alert_geo_input={alert_geo_input}
          lng={lng}
          lat={lat}
        ></GeoInfo>
        <Type alert_type_input={alert_type_input} type_name={type_name}></Type>
        <Review
          alert_review_input={alert_review_input}
          review_points={review_points}
        ></Review>
        <ReviewDetails review_text={review_text}></ReviewDetails>
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
        <p>{submit_response}</p>
      </div>
    </Fragment>
  );
};

export default Dashboard;
