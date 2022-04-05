import React from "react";

function PostMedia(props) {
  return (
    <>
      <div className="feed-media-cont">
        <img src={props.postimage} alt="" />
      </div>
    </>
  );
}

export default PostMedia;
