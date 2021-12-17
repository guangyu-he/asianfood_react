import React from "react";
import { GoogleMap, LoadScript, Marker, InfoBox } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100vh",
  position: "absolute",
};

const InfoBoxStyle = {
  opacity: "0.8",
};

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
  //console.log("dark mode on");
  mapOptions.mapId = "da23336c10c105b2";
}

const Map = (props) => {
  console.log("render");
  let marker_pos;
  if (props.geo.lat === 0) {
    marker_pos = {
      lat: 52.517674728732054,
      lng: 13.393789389208452,
    };
  } else {
    marker_pos = {
      lat: parseFloat(props.geo.lat),
      lng: parseFloat(props.geo.lng),
    };
  }
  let info_name = props.geo.geo_name;
  let type = props.geo.type_name;
  let review = props.geo.review_points;
  let review_details = props.geo.review_text;

  return (
    <LoadScript googleMapsApiKey="AIzaSyD7eBZcwtUqmgeuYkWPjDK8d0uvU3Q1WrE&language=en">
      <GoogleMap
        mapContainerStyle={containerStyle}
        options={mapOptions}
        center={marker_pos}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <Marker position={marker_pos} />
        <InfoBox
          position={marker_pos}
          options={{ closeBoxURL: "", enableEventPropagation: true }}
        >
          <div
            className="
            grid
          p-2 w-24
          shadow-lg rounded-lg
          bg-white dark:bg-gray-500
          place-content-center
          "
            style={InfoBoxStyle}
          >
            <div
              className="
            text-base
            dark:text-white 
            "
            >
              {info_name}
            </div>
          </div>
        </InfoBox>
        <></>
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(Map);
