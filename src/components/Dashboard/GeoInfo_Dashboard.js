import React, { useState, useEffect } from "react";

const GeoInfo = (props) => {
  const [defaultValue, set_defaultValue] = useState("");
  useEffect(() => {
    set_defaultValue(props.lat + "," + props.lng);
  }, [props.lat, props.lng]);
  const handleOnChange = (event) => {
    set_defaultValue(event.target.value);
  };
  return (
    <div className="flow-root p-1">
      <p>Geo Info:</p>
      <input
        className={`${
          props.alert_geo_input ? "border-2 border-red-500" : ""
        } w-80`}
        value={defaultValue}
        onChange={handleOnChange}
        ref={props.geo_input}
      ></input>
    </div>
  );
};

export default React.memo(GeoInfo);
