import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";

import Map from "../components/Home/Map_Home";
import Info from "../components/Home/Info_Home";

// 方法定义 lat,lng 
function GetDistance( lat1,  lng1,  lat2,  lng2){
  var radLat1 = lat1*Math.PI / 180.0;
  var radLat2 = lat2*Math.PI / 180.0;
  var a = radLat1 - radLat2;
  var  b = lng1*Math.PI / 180.0 - lng2*Math.PI / 180.0;
  var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a/2),2) +
  Math.cos(radLat1)*Math.cos(radLat2)*Math.pow(Math.sin(b/2),2)));
  s = s *6378.137 ;// EARTH_RADIUS;
  s = Math.round(s * 10000) / 10000;
  return s;
}

function Home(props) {
  //console.log("Home: " + props);

  //ANCHOR receive props using location
  const location = useLocation();

  //ANCHOR initialize container variables
  let marker_pos, info_name, info_state, type, distance, review, review_details;

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
    review_details = "Thanks for using! <br> Designed by Guangyu and Sisi.";
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

    /* distance_lat = (parseFloat(location.state.usr_lat) - parseFloat(location.state.lat)) * 110.574;
    distance_lng = (parseFloat(location.state.usr_lng) * Math.cos( parseFloat(location.state.usr_lat) * 0.017453) - parseFloat(location.state.lng) * Math.cos( parseFloat(location.state.lat) * 0.017453))  * 111.320; 
    distance = Math.sqrt(distance_lat ** 2 + distance_lng ** 2)/10; */

    distance = GetDistance(location.state.usr_lat,location.state.usr_lng,location.state.lat,location.state.lng);
    distance = distance.toFixed(2);

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
        distance={distance}
      ></Info>
    </Fragment>
  );
}

export default React.memo(Home);
