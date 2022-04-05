import React, { useState } from "react";
import Icon from "../../../../Components/FontAwesome/FontAwesome";
import "./friendcard.scss";
import ShanuPlaceholder from "../../../../assets/images/shanu-placeholder.jpg";
import { Link } from "react-router-dom";
import ContextMenu from "../ContextMenu/ContextMenu";

function FriendCard(prop) {
  const [contextMenu, setContextMenu] = useState(false);

  return (
    <>
      <div className="friend-card">
        <div className="friend-card-img-cont">
          <Link to={`/profile/${prop.username}`}>
            <img src="https://picsum.photos/200/200" alt="" />
          </Link>
        </div>
        <div className="friend-card-text">
          <p className="">Shanu Raj</p>
          <Link to={`/profile/${prop.username}`} className="text-light">
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
            data={prop.contextMenuBtns}
          />
        ) : null}
      </div>
    </>
  );
}

export default FriendCard;
