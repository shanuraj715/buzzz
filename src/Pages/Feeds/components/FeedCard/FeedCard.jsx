import React from "react";
import Icon from "../../../../Components/FontAwesome/FontAwesome";
import PostMeta from "./Components/PostMeta/PostMeta";
import PostMedia from "./Components/PostMedia/PostMedia";
import Reactions from "./Components/Reactions/Reactions";
import ReactionBtn from "../ReactionsBtn/ReactionBtn";

function FeedCard(props) {
  return (
    <div className="feed-card">
      <PostMeta
        text={props.text}
        authorImage={props.authorImage}
        date={props.date}
        description={props.description}
      />
      <PostMedia postimage = {props.postimage}/>
      <Reactions likereaction = {props.likereaction} heartreaction = {props.heartreaction} comments = {props.comments}/>
     <ReactionBtn like = {props.like} dislike = {props.dislike} comment = {props.comment}/>
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
