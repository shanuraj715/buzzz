import React from "react";
import Icon from "../../Components/FontAwesome/FontAwesome";
import "./profileuserimage.scss";

function ProfileUserImage() {
  return (
    <div className="profile-header">
      <div className="profile-cover-cont">
        <img src="https://picsum.photos/1000/200" alt="" />
      </div>
      <div className="profile-user-img-cont">
        <img src="https://picsum.photos/200/200" alt="" />
        <button className="">
          <Icon classes="fa-camera" type="solid" />
        </button>
      </div>
    </div>
  );
}

export default ProfileUserImage;
