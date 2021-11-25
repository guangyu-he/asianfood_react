import React from "react";
import { useLocation } from "react-router-dom";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapOptions = {
  zoom: 13,
  center: { lat: 52.517674728732054, lng: 13.393789389208452 },
  zoomControl: true,
  scaleControl: false,
  fullscreenControl: false,
  mapTypeControl: false,
  streetViewControl: false,
  gestureHandling: "greedy",
  maxZoom: 15 + 3,
  mapId: "e04d39f76af137b0",
};

const onLoad = (marker) => {};

const Home = () => {
  const location = useLocation();
  let marker_pos="";
  if (location.state === null) {
    marker_pos = mapOptions.center;
  } else {
    marker_pos = {
      lat: parseFloat(location.state.lat),
      lng: parseFloat(location.state.lng),
    };
  }

  return (
    <LoadScript googleMapsApiKey="AIzaSyD7eBZcwtUqmgeuYkWPjDK8d0uvU3Q1WrE">
      <GoogleMap mapContainerClassName="w-screen h-screen" options={mapOptions}>
        {/* Child components, such as markers, info windows, etc. */}
        <Marker onLoad={onLoad} position={marker_pos} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Home;
