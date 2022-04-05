import React from "react";
import PropTypes from "prop-types";
import "./classic.scss";

function Classic(prop) {
  return (
    <button
      className={`btn btn-${
        (prop.type || "primary") + prop.classes + prop.theme
      }`}
      onClick={prop.click}
    >
      {prop.children}
    </button>
  );
}

Classic.propTypes = {
  classes: PropTypes.string,
  click: PropTypes.func.isRequired,
};

export default Classic;
