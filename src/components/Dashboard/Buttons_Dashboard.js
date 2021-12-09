import React from "react";

const Buttons = (props) => {
  return (
    <div>
      {" "}
      <div className="py-2">
        <button
          type="submit"
          onClick={props.handelClick_submit}
          className={`group relative w-80 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
        >
          submit
        </button>
      </div>
      <div>
        <button
          type="submit"
          onClick={props.handelButton_clear}
          className="group relative w-80 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          clear
        </button>
      </div>
    </div>
  );
};

export default React.memo(Buttons);
