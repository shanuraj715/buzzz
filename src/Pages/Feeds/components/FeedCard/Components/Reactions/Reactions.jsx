import React from "react";
import "./reactions.scss";

function Reactions(props) {
  return (
    <>
      <div className="feed-reactions text-light">
        <div className="feed-reaction-stat">
          <div>
            <img src={props.likereaction} alt="" />
            <span>{props.likes}</span>
          </div>
          <div>
            <img className="like-btn-180" src={props.heartreaction} alt="" />
            <span>{props.dislikes}</span>
          </div>
        </div>
        <div className="feed-reaction-comment">
          <span>{`${props.comments} ${
            props.comments > 1 ? "Comments" : "Comment"
          }`}</span>
        </div>
      </div>
    </>
  );
}

export default Reactions;
