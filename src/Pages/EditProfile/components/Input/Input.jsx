import React from "react";
import "./input.scss";
import PropTypes from "prop-types";

function Input(props) {
  return (
    <div>
      <span className="text-light">{props.title}</span>
      <input
        type={props.type || "text"}
        placeholder={props.placeholder || ""}
        onClick={
          typeof props.click === "function" ? (e) => props.click(e) : () => {}
        }
        value={props.value}
        onChange={(e) => props.change(e)}
        autoComplete={props.autoComplete || ""}
      />
      {props.children}
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  click: PropTypes.func,
  change: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.bool,
  ]),
  title: PropTypes.string,
  autoComplete: PropTypes.string,
};

export default Input;
