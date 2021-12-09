import React, { useState, useEffect } from "react";

const Type = (props) => {
  const [defaultValue, set_defaultValue] = useState("");
  useEffect(() => {
    set_defaultValue(props.type_name);
  }, [props.type_name]);
  const handleOnChange = (event) => {
    set_defaultValue(event.target.value);
  };
  return (
    <div className="flow-root p-1">
      <p>Type:</p>
      <input
        className={`${
          props.alert_type_input ? "border-2 border-red-500" : ""
        } w-80`}
        value={defaultValue}
        onChange={handleOnChange}
        ref={props.type_input}
      ></input>
    </div>
  );
};

export default React.memo(Type);
