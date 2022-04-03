import React from "react";
import "./buttons2.scss";
import PropTypes from "prop-types";

function Buttons2(prop) {
  switch (prop.type) {
    case "type1":
      return (
        <button
          className="button2-t1"
          onClick={prop.click}
          style={{
            "--text-color": prop.textColor || "#234567",
            "--backgroundColor": prop.backgroundColor || "#b1dae7",
          }}
        >
          <span>{prop.text || prop.children || "Click Here"}</span>
          <svg viewBox="0 0 13 10" height="10px" width="15px">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </button>
      );
    case "type2":
      return (
        <button className="button2-t2" onClick={prop.click}>
          {prop.text || prop.children || "Click Here"}
        </button>
      );
  }
}

Buttons2.propTypes = {
  type: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
  text: PropTypes.string,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default Buttons2;
