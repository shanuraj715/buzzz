import React from "react";
import "./usercard.scss";

function UserCard(props) {
  return (
    <>
      <div className="user-card">
        <div className="cover-image">
          <img src={props.bgImage} alt="" />
          <img className="user-card-image" src={props.img} alt="" />
        </div>
        <h3>{props.name}</h3>
        <p>TTN Newer</p>
        <div className="profile">
          <div className="number-of-post">
            <span>{props.posts}</span>
            <span>Post</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserCard;
