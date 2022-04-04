import React from "react";
import "./newpost.css"
import Icon from "../../../../Components/FontAwesome/FontAwesome";
import Image from "../../../../assets/images/50x50.png";

function NewPost() {
  return (
    <>
      <div className="post-section-row">
        <div>
          <img src={Image} alt="" />
        </div>
        <div>
          <input className="input-box" type="text" placeholder="start a post" />
        </div>
        <div>
          <button>
            <Icon type="regular" classes="fa-images" />
            <span>Photos</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default NewPost;
