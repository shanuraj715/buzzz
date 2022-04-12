import React from "react";
import "./contextmenu.scss";
import OutsideClickHandler from "react-outside-click-handler";
import Icon from "../../../../Components/FontAwesome/FontAwesome";
import { Link } from "react-router-dom";

function ContextMenu(prop) {
  return (
    <>
      <div className="contextmenu" id="contextmenu">
        <OutsideClickHandler
          onOutsideClick={() => {
            prop.outsideClick();
          }}
        >
          {prop.data?.map((item, index) => {
            if (item.type === "link")
              return (
                <Link className="contextmenu-btn" key={index} to={item.to}>
                  <Icon
                    classes={`${item.icon} pe-8 cm-btn-icon`}
                    type="solid"
                  />
                  <span>{item.text}</span>
                </Link>
              );
            if (item.type === "button") {
              console.log(item);
              return (
                <button
                  className="contextmenu-btn"
                  key={index}
                  onClick={() => item.click(item.uid)}
                >
                  <Icon
                    classes={`${item.icon} pe-8 cm-btn-icon`}
                    type="solid"
                  />
                  <span>{item.text}</span>
                </button>
              );
            }
          })}
        </OutsideClickHandler>
      </div>
    </>
  );
}

export default ContextMenu;
