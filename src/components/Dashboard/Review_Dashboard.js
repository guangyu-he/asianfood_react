import React, { useState, useEffect } from "react";

const Review = (props) => {
  const [defaultValue, set_defaultValue] = useState("");
  useEffect(() => {
    set_defaultValue(props.review_points);
  }, [props.review_points]);
  const handleOnChange = (event) => {
    set_defaultValue(event.target.value);
  };
  return (
    <div className="flow-root p-1">
      <p>Review:</p>
      <input
        className={`${
          props.alert_review_input ? "border-2 border-red-500" : ""
        } w-80`}
        value={defaultValue}
        onChange={handleOnChange}
        ref={props.review_input}
      ></input>
    </div>
  );
};

export default React.memo(Review);
