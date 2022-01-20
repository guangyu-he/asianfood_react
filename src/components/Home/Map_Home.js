import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";

import marker from "../../media/marker-icon-green.png";
const myIcon = new L.Icon({
  iconUrl: marker,
  iconRetinaUrl: marker,
  popupAnchor: [-0, -0],
});

const Golocation = (props) => {
  //ANCHOR initial position
  const [position, set_position] = useState(null);

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

  if (position === null) {
    return false;
  } else {
    map.flyTo(position, map.getZoom());

    return (
      <Marker position={position}>
        <Popup>{props.geo.geo_name}</Popup>
      </Marker>
    );
  }
};

function LocationMarker() {
  const [geo_position, set_geo_position] = useState(null);

  const map = useMap();

  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      set_geo_position(e.latlng);
    });
  }, [map]);

  return geo_position === null ? null : (
    <Marker position={geo_position} icon={myIcon}>
      <Popup>
        You are here. <br />
      </Popup>
    </Marker>
  );
}

const Map = (props) => {
  //console.log("Map: " + props);

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
        className="map-tiles"
      />
      <Golocation geo={props.geo}></Golocation>
      <LocationMarker></LocationMarker>
    </MapContainer>
  );
};

export default React.memo(Map);
