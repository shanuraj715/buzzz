import React, { useState } from "react";
import Icon from "../../../../Components/FontAwesome/FontAwesome";
import "./friendcard.scss";
import ShanuPlaceholder from "../../../../assets/images/shanu-placeholder.jpg";
import { Link } from "react-router-dom";
import ContextMenu from "../ContextMenu/ContextMenu";

function FriendCard() {
  const [contextMenu, setContextMenu] = useState(false);

  return (
    <>
      <div className="friend-card">
        <div className="friend-card-img-cont">
          <img src={ShanuPlaceholder} alt="" />
        </div>
        <div className="friend-card-text">
          <p className="">Shanu Raj</p>
          <Link to="/" className="text-light">
            shanuraj715
          </Link>
        </div>
        <div className="friend-card-btn">
          <button
            className="circular-icon-btn"
            onClick={() => setContextMenu(!contextMenu)}
          >
            <Icon classes="fa-ellipsis-h" type="solid" />
          </button>
        </div>
        {contextMenu ? (
          <ContextMenu
            outsideClick={() => setContextMenu(false)}
            btns={[
              { icon: "fa-user", text: "View Profile" },
              { icon: "fa-ban", text: "Unfriend Shanu" },
            ]}
          />
        ) : null}
      </div>
    </>
  );
}

export default FriendCard;
