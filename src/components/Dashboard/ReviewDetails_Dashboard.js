import React, { useState, useEffect } from "react";

const ReviewDetails = (props) => {
  const [defaultValue, set_defaultValue] = useState("");
  useEffect(() => {
    set_defaultValue(props.review_text);
  }, [props.review_text]);
  const handleOnChange = (event) => {
    set_defaultValue(event.target.value);
  };
  return (
    <div className="flow-root p-1">
      <p>Review details:</p>
      <input
        className={`w-80 h-12`}
        value={defaultValue}
        onChange={handleOnChange}
        ref={props.review_details_input}
      ></input>
    </div>
  );
};

export default React.memo(ReviewDetails);
