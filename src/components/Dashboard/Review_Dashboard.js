import React from "react";

const Review = (props) => {
  return (
    <div className="flow-root p-1">
      <p>Review:</p>
      <input
        className={`${
          props.alert_review_input ? "border-2 border-red-500" : ""
        } w-80`}
        defaultValue={props.review_points}
        ref={props.review_input}
      ></input>
    </div>
  );
};

export default React.memo(Review);
