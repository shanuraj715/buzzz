import React from "react";
import Icon from '../../../../../../Components/FontAwesome/FontAwesome'

function PostMeta(prop) {
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

        <button className="circular-icon-btn">
          <Icon type="solid" classes="fa-ellipsis-h" />
        </button>
      </div>
      <div className="feed-text-cont">
        <p>
         {prop.description}
        </p>
      </div>
    </>
  );
}

export default PostMeta;
