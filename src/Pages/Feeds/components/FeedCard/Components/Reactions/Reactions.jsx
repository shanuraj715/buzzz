import React from 'react'
import Like from "../../../../../../assets/images/reaction-like.svg";
import Heart from "../../../../../../assets/images/reaction-heart.svg";

function Reactions(props) {
  return (
    <>
      <div className="feed-reactions text-light">
        <div className="feed-reaction-stat">
          <div>
            <img src={props.likereaction} alt="" />
            <span>512</span>
          </div>
          <div>
            <img src={props.heartreaction} alt="" />
            <span>106</span>
          </div>
        </div>
        <div className="feed-reaction-comment">
          <span>{`${props.comments} ${props.comments > 1 ? 'Comments' : 'Comment'}`}</span>
        </div>
      </div>
    </>
  )
}

export default Reactions
