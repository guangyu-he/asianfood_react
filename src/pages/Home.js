import React, { useState, Fragment, useCallback } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoBox,
} from "@react-google-maps/api";
import { useLocation } from "react-router-dom";

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
  } else {
    marker_pos = {
      lat: parseFloat(location.state.lat),
      lng: parseFloat(location.state.lng),
    };
    info_name = location.state.geo_name;
    info_state = true;
    type = location.state.type_name;
    review = parseInt(location.state.review_points);
  }
  const review_points_display = (props) => {
    var doms = [];
    for (var i = 0; i < props; i++) {
      doms.push(<p key={"star" + props + i}>star!</p>);
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
        } fixed z-30 bottom-6 h-32 inset-x-0 flex`}
      >
        <div className="w-1/4 "></div>
        <div className="w-2/4 bg-white rounded-lg h-full">
          <div className="inline-flex">
            <h2 className="text-purple-600 antialiased text-3xl">
              {info_name}{" "}
            </h2>{" "}
            <h3 className="text-purple-400 antialiased text-1xl  items-end">
              {type}
            </h3>
          </div>
          <div>
            <div className="inline-flex">{review_points_display(review)}</div>
          </div>
        </div>
        <div className="w-1/4 "></div>
      </div>
    </Fragment>
  ) : (
    <></>
  );
}

export default Home;
