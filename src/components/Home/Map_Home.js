import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

const Golocation = (props) => {
  //ANCHOR initial position
  const [position, set_position] = useState({
    lat: 52.517674728732054,
    lng: 13.393789389208452,
  });

  //ANCHOR set position when props changed
  useEffect(() => {
    if (props.geo.lat === 0) {
    } else {
      let new_position = {
        lat: parseFloat(props.geo.lat),
        lng: parseFloat(props.geo.lng),
      };
      //console.log(new_position);
      set_position(new_position);
    }
  }, [props.geo]);

  //ANCHOR fly to location
  const map = useMap();
  map.flyTo(position, map.getZoom());

  return (
    <Marker position={position}>
      <Popup>{props.geo.geo_name}</Popup>
    </Marker>
  );
};

const Map = (props) => {
  console.log("Map: " + props);

  return (
    <MapContainer
      center={{
        lat: 52.517674728732054,
        lng: 13.393789389208452,
      }}
      zoom={13}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        className= 'map-tiles'
      />
      <Golocation geo={props.geo}></Golocation>
    </MapContainer>
  );
};

export default React.memo(Map);
