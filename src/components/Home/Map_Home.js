import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

const Map = (props) => {
  const [position, set_position] = useState([
    52.517674728732054, 13.393789389208452,
  ]);

  return (
    <MapContainer center={position} zoom={13} zoomControl={false}>
      <Marker position={position}>
        <Popup>{props.geo.geo_name}</Popup>
      </Marker>

      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default React.memo(Map);
