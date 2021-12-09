import React from "react";
const Type = (props) => {
  //console.log(props.type_name);
  return (
    <div className="flow-root p-1">
      <p>Type:</p>
      <input
        className={`${
          props.alert_type_input ? "border-2 border-red-500" : ""
        } w-80`}
        defaultValue={props.type_name}
        ref={props.type_input}
      ></input>
    </div>
  );
};

export default React.memo(Type);
