import React from "react";

const ReviewDetails = (props) => {
  return (
    <div className="flow-root p-1">
      <p>Review details:</p>
      <input
        className={`w-80 h-12`}
        defaultValue={props.review_text}
        ref={props.review_details_input}
      ></input>
    </div>
  );
};

export default React.memo(ReviewDetails);
