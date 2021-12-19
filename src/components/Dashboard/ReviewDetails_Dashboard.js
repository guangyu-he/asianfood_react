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
      <textarea
        className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
        rows="3"
        value={defaultValue}
        onChange={handleOnChange}
        ref={props.review_details_input}
      ></textarea>
    </div>
  );
};

export default React.memo(ReviewDetails);
