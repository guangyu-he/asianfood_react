import React, { useState, useEffect } from "react";

const Name = (props) => {
  const [defaultValue, set_defaultValue] = useState("");
  useEffect(() => {
    set_defaultValue(props.geo_name);
  }, [props.geo_name]);
  const handleOnChange = (event) => {
    set_defaultValue(event.target.value);
  };
  return (
    <div className="flow-root p-1">
      <p className="inline">Name:</p>
      <button
        onClick={props.handelOnclick_name_button}
        className="antialiased inline items-end"
      >
        <span className="text-blue-600">Open </span>
        <span className="text-red-600">in </span>
        <span className="text-yellow-600">Google</span>
      </button>
      <input
        className={`${
          props.alert_name_input ? "border-2 border-red-500" : ""
        } w-80 block`}
        value={defaultValue}
        ref={props.name_input}
        onInput={props.handelChange_name_input}
        onChange={handleOnChange}
      ></input>
    </div>
  );
};

export default React.memo(Name);
