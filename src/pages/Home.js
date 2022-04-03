import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";

import Map from "../components/Home/Map_Home";
import Info from "../components/Home/Info_Home";

function Home(props) {
  //console.log("Home: " + props);

  //ANCHOR receive props using location
  const location = useLocation();

  //ANCHOR initialize container variables
  let marker_pos, info_name, info_state, type, review, review_details;

  //SECTION initial variables if there is no props
  if (location.state === null) {
    marker_pos = {
      lat: 52.517674728732054,
      lng: 13.393789389208452,
    };
    info_name = "Asian Food in Berlin";
    info_state = false;
    type = "";
    review = 5;
    review_details = "Thanks for using! Designed by Guangyu and Sisi";
  } //!SECTION
  //SECTION distribute props
  else {
    marker_pos = {
      lat: parseFloat(location.state.lat),
      lng: parseFloat(location.state.lng),
    };
    info_name = location.state.geo_name;
    info_state = true;
    type = location.state.type_name;
    review = parseInt(location.state.review_points);
    review_details = location.state.review_text;
  }
  const geo = {
    lat: marker_pos.lat,
    lng: marker_pos.lng,
    geo_name: info_name,
  };
  //!SECTION

  return (
    <Fragment>
      <Map geo={geo}></Map>
      <Info
        info_state={info_state}
        info_name={info_name}
        type={type}
        review={review}
        review_details={review_details}
      ></Info>
    </Fragment>
  );
}

export default React.memo(Home);
