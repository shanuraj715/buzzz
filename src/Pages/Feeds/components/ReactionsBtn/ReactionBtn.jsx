import React from 'react';
import Icon from "../../../../Components/FontAwesome/FontAwesome";

function ReactionBtn(props) {
  return (
    <>
       <div className="feed-reaction-btns">
        <button>
          <Icon classes="fa-thumbs-up pe-8" type="regular" />
          {props.like}
        </button>
        <button>
          <Icon classes="fa-thumbs-down pe-8" type="regular" />
          {props.dislike}
        </button>
        <button>
          <Icon classes="fa-comment-alt pe-8" type="regular" />
          {props.comment}
        </button>
      </div>
    </>
  );
}

export default ReactionBtn;
