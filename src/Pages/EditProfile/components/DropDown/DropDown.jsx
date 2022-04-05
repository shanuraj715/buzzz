import React from "react";
import "./dropdown.scss";
import PropTypes from "prop-types";
import OutsideClickHandler from "react-outside-click-handler";

function DropDown(prop) {
  return (
    <div className="app-dropdown open-anim-y">
      <OutsideClickHandler onOutsideClick={() => prop.outClick()}>
        <div className="app-drop-cont scrollbar1">
          {prop.list?.map((item, index) => (
            <button
              key={index}
              className={`text-light ${item.classes || ""}`}
              onClick={item.click}
            >
              {item.btnText}
            </button>
          ))}
        </div>
      </OutsideClickHandler>
    </div>
  );
}

DropDown.propTypes = {
  list: PropTypes.array.isRequired,
  outClick: PropTypes.func.isRequired,
};

export default DropDown;
