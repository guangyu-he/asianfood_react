import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose as faClose_solid } from "@fortawesome/free-solid-svg-icons";
import { faWindowClose as faClose_reg } from "@fortawesome/free-regular-svg-icons";

const SearchbarListClose = React.memo((props) => {
  const closeicon = (props) => {
    var doms = [];
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      doms.push(
        <FontAwesomeIcon
          key={"faWindowClosesolid"}
          icon={faClose_solid}
          size="2x"
        />
      );
    } else {
      doms.push(
        <FontAwesomeIcon
          key={"faWindowCloseregular"}
          icon={faClose_reg}
          size="2x"
        />
      );
    }
    return doms;
  };
  return (
    <button
      onClick={() => props.handelClick_button("")}
    >
      {closeicon()}
    </button>
  );
});

export default SearchbarListClose;
