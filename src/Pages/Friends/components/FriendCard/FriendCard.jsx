import React, { useState } from "react";
import Icon from "../../../../Components/FontAwesome/FontAwesome";
import "./friendcard.scss";
import ShanuPlaceholder from "../../../../assets/images/shanu-placeholder.jpg";
import { Link } from "react-router-dom";
import ContextMenu from "../ContextMenu/ContextMenu";
import config from "../../../../config.json";

function FriendCard({
  username,
  userId,
  fname,
  lname,
  image,
  contextMenuBtns,
}) {
  const [contextMenu, setContextMenu] = useState(false);

  return (
    <>
      <div className="friend-card">
        <div className="friend-card-img-cont">
          <Link to={`/profile/view/${userId}`}>
            <img src={image} alt="" />
          </Link>
        </div>
        <div className="friend-card-text">
          <p className="">
            {(fname ?? config.APP_NAME) + " " + (lname ?? "User")}
          </p>
          <Link to={`/profile/view/${userId}`} className="text-light">
            {username}
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
            data={contextMenuBtns}
          />
        ) : null}
      </div>
    </>
  );
}

export default FriendCard;
