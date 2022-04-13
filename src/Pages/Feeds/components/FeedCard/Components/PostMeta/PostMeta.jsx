import React, { useState } from "react";
import Icon from "../../../../../../Components/FontAwesome/FontAwesome";
import "./postmeta.scss";
import OutsideClickHandler from "react-outside-click-handler";

function PostMeta(prop) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggle = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const deletePost = () => {
    toggle();
    prop.deletePost(prop.postId);
  };

  return (
    <>
      <div className="feed-user-row">
        <div className="feed-user-info">
          <img src={prop.authorImage} alt="" className="feed-author-img" />
          <div className="feed-ui-data">
            <span className="feed-author text-bold">{prop.text}</span>
            <span className="feed-date text-light">{prop.date}</span>
          </div>
        </div>

        <div className="feed-opt-btn">
          <button className="circular-icon-btn" onClick={toggle}>
            <Icon type="solid" classes="fa-ellipsis-h" />
          </button>
          {isMenuVisible ? (
            <OutsideClickHandler
              onOutsideClick={() => {
                toggle();
              }}
            >
              <div className="feed-options-cont">
                {prop.owner ? (
                  <button className="feed-opt-mbtn" onClick={deletePost}>
                    <Icon type="solid" classes="fa-trash-alt" />
                    <span>Delete</span>
                  </button>
                ) : null}
                <button className="feed-opt-mbtn">
                  <Icon type="solid" classes="fa-flag-checkered" />
                  <span>Report</span>
                </button>
              </div>
            </OutsideClickHandler>
          ) : null}
        </div>
      </div>
      <div className="feed-text-cont">
        <p>{prop.description}</p>
      </div>
    </>
  );
}

export default PostMeta;
