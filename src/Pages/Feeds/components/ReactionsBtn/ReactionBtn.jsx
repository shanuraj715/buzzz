import React, { useState } from 'react';
import Icon from "../../../../Components/FontAwesome/FontAwesome";

function ReactionBtn({handler, postId, index}) {

  const like = () => {
    handler('like', postId, index)
  }

  const dislike = () => {
    handler('dislike', postId, index)
  }
  return (
    <>
       <div className="feed-reaction-btns">
        <button onClick={like}>
          <Icon classes="fa-thumbs-up pe-8" type="regular" />
          Like
        </button>
        <button onClick={dislike}>
          <Icon classes="fa-thumbs-down pe-8" type="regular" />
          Dislike
        </button>
        <button>
          <Icon classes="fa-comment-alt pe-8" type="regular" />
          Comment
        </button>
      </div>
    </>
  )
  }

export default ReactionBtn
