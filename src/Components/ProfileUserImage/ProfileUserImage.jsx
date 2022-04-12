import React from "react";
import Icon from "../../Components/FontAwesome/FontAwesome";
import "./profileuserimage.scss";

function ProfileUserImage({ image, cover, changeImage, isBtnVisible = true }) {
  const change = () => {
    changeImage(true);
  };

  return (
    <div className="profile-header">
      <div className="profile-cover-cont">
        <img src="https://picsum.photos/1000/200" alt="" />
      </div>
      <div className="profile-user-img-cont">
        <img src={image} alt="" />
        {isBtnVisible ? (
          <button className="" onClick={change}>
            <Icon classes="fa-camera" type="solid" />
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default ProfileUserImage;
