import React from "react";
import "./input.scss";
import PropTypes from "prop-types";

function InputText(prop) {
  return (
    <input
      type={prop.type || "text"}
      className={prop.classes || ""}
      placeholder={prop.placeholder}
      value={prop.value}
      onChange={(e) => prop.change(e.target.value)}
    />
  );
}

InputText.propTypes = {
  type: PropTypes.string,
  classes: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  change: PropTypes.func.isRequired,
};

export default InputText;
