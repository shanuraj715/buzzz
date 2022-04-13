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
        <h3>Shobit Khatri</h3>
        <p>Newly Recurit at TTN</p>
        <div className="profile">
          {/* <div className="views">
                    <span>234</span>
                    <span>Views</span>
                  </div> */}
          <div className="Number-of-post">
            <span>10</span>
            <span>Post</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserCard;
