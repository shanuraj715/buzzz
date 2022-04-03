import React from "react";
import "./contextmenu.scss";
import OutsideClickHandler from "react-outside-click-handler";
import Icon from "../../../../Components/FontAwesome/FontAwesome";

function ContextMenu(prop) {
  return (
    <>
      <div className="contextmenu" id="contextmenu">
        <OutsideClickHandler
          onOutsideClick={() => {
            prop.outsideClick();
          }}
        >
          {prop.btns?.map((item, index) => {
            return (
              <button className="contextmenu-btn" key={index}>
                <Icon classes={`${item.icon} pe-8 cm-btn-icon`} type="solid" />
                <span>{item.text}</span>
              </button>
            );
          })}
        </OutsideClickHandler>
      </div>
    </>
  );
}

export default ContextMenu;
