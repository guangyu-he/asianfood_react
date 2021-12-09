import React, { useState, Fragment, useCallback } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoBox,
} from "@react-google-maps/api";
import { useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStar_solid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStar_regular } from "@fortawesome/free-regular-svg-icons";

const containerStyle = {
  width: "100%",
  height: "100vh",
  position: "absolute",
};

const mapOptions = {
  zoom: 13,
  zoomControl: true,
  scaleControl: false,
  fullscreenControl: false,
  mapTypeControl: false,
  streetViewControl: false,
  gestureHandling: "greedy",
  maxZoom: 15 + 3,
  mapId: "e04d39f76af137b0",
};

function Home() {
  let marker_pos = "";
  let info_name = "";
  let info_state = false;
  let type = "";
  let review = 0;
  let review_details = "";

  const location = useLocation();
  if (location.state === null) {
    marker_pos = {
      lat: 52.517674728732054,
      lng: 13.393789389208452,
    };
    info_name = "Asian Food in Berlin";
    info_state = false;
    type = "";
    review = 0;
    review_details = "";
  } else {
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
  const review_points_display = (props) => {
    var doms = [];
    for (let i = 0; i < props; i++) {
      doms.push(
        <FontAwesomeIcon key={"faStar_solid" + i} icon={faStar_solid} />
      );
    }
    for (let j = 0; j < 5 - props; j++) {
      doms.push(
        <FontAwesomeIcon key={"faStar_regular" + j} icon={faStar_regular} />
      );
    }
    return doms;
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyD7eBZcwtUqmgeuYkWPjDK8d0uvU3Q1WrE&language=en",
  });

  // eslint-disable-next-line
  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <Fragment>
      <GoogleMap
        mapContainerStyle={containerStyle}
        options={mapOptions}
        center={marker_pos}
        onLoad={() => onLoad}
        onUnmount={() => onUnmount}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <Marker position={marker_pos} />
        <InfoBox
          position={marker_pos}
          options={{ closeBoxURL: "", enableEventPropagation: true }}
        >
          <div
            style={{
              backgroundColor: "lightgray",
              opacity: 0.8,
              padding: 12,
              width: "120px",
            }}
          >
            <div style={{ fontSize: 16, fontColor: `dark-black` }}>
              {info_name}
            </div>
          </div>
        </InfoBox>
      </GoogleMap>
      <div
        className={`${
          info_state ? "" : "hidden"
        } fixed z-30 bg-white rounded-lg bottom-6
        lg:left-1/4 lg:w-2/4 lg:h-32
        left-0 w-full h-32
        `}
      >
        <div className="inline-flex">
          <div className="content-center">
            <h2 className="text-purple-600 antialiased text-3xl">
              {info_name}
            </h2>
          </div>
          <div className="w-40">
            <h3 className="text-purple-400 antialiased text-1xl  items-end">
              {type}
            </h3>
            <a
              href={`https://maps.google.co.in/maps?q=${info_name}`}
              target="_blank"
              rel="noreferrer"
              className="text-purple-400 antialiased text-1xl  items-end"
            >
              <span className="text-blue-600">Open </span>
              <span className="text-red-600">in </span>
              <span className="text-yellow-600">Google</span>
            </a>
          </div>
        </div>
        <div>
          <div className="inline-flex">{review_points_display(review)}</div>
        </div>
        <div>
          <div>{review_details}</div>
        </div>
      </div>
    </Fragment>
  ) : (
    <></>
  );
}

export default Home;
