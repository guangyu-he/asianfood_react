import React, { useState, useCallback } from "react";
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
  const location = useLocation();
  if (location.state === null) {
    marker_pos = {
      lat: 52.517674728732054,
      lng: 13.393789389208452,
    };
    info_name = "";
  } else {
    marker_pos = {
      lat: parseFloat(location.state.lat),
      lng: parseFloat(location.state.lng),
    };
    info_name = location.state.geo_name;
  }

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyD7eBZcwtUqmgeuYkWPjDK8d0uvU3Q1WrE",
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
          style={{ backgroundColor: "lightgray", opacity: 0.8, padding: 12 }}
        >
          <div style={{ fontSize: 16, fontColor: `dark-black`, backgroundSize: "auto"}}>
            {info_name}
          </div>
        </div>
      </InfoBox>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default Home;
