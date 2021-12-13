import React, { useState, Fragment, useCallback } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoBox,
} from "@react-google-maps/api";
import { useLocation } from "react-router-dom";

import Info from "../components/Home/Info_Home";

const containerStyle = {
  width: "100%",
  height: "100vh",
  position: "absolute",
};

function Home() {
  let mapOptions = {
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
  
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    console.log("dark mode on");
    mapOptions.mapId = "da23336c10c105b2";
  }

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
      <Info
        info_state={info_state}
        info_name={info_name}
        type={type}
        review={review}
        review_details={review_details}
      ></Info>
    </Fragment>
  ) : (
    <></>
  );
}

export default Home;
