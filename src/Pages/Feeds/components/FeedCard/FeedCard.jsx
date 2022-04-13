import React from "react";
import Icon from "../../../../Components/FontAwesome/FontAwesome";
import PostMeta from "./Components/PostMeta/PostMeta";
import PostMedia from "./Components/PostMedia/PostMedia";
import Reactions from "./Components/Reactions/Reactions";
import ReactionBtns from "../ReactionsBtn/ReactionBtn";
import Like from "../../../../assets/images/reaction-like.svg";
import Heart from "../../../../assets/images/reaction-heart.svg";

function FeedCard(props) {
  return (
    <div className="feed-card">
      <PostMeta
        text={props.text}
        authorImage={props.authorImage}
        date={props.date}
        description={props.description}
        deletePost={props.deletePost}
        postId={props.postId}
        owner={props.owner}
      />
      <PostMedia postimage={props.postimage} />
      <Reactions
        likes={props.likes}
        dislikes={props.dislikes}
        likereaction={Like}
        heartreaction={Like}
        comments={props.comments}
      />
      <ReactionBtns
        handler={props.reactionHandler}
        postId={props.postId}
        index={props.index}
      />
      <div className="feed-comment-cont">
        <div className="fc-user-img">
          <img src={props.authorImage} alt="" />
        </div>
        <div className="fc-inp">
          <input type="text" className="" placeholder="Write a comment..." />
          <button>
            <Icon classes="fa-paper-plane" type="regular" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeedCard;
