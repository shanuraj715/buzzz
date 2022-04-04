import React from "react";
import Icon from "../../../../Components/FontAwesome/FontAwesome";
import Placeholder from "../../../../assets/images/shobit.jpg";
import CardPlaceholder from "../../../../assets/images/1280x720.jpg";
import Like from "../../../../assets/images/reaction-like.svg";
import Heart from "../../../../assets/images/reaction-heart.svg";

function FeedCard() {
  return (
    <div className="feed-card">
      <div className="feed-user-row">
        <div className="feed-user-info">
          <img src={Placeholder} alt="" className="feed-author-img" />
          <div className="feed-ui-data">
            <span className="feed-author text-bold">Shobit Khatri</span>
            <span className="feed-date text-light">December 5, 1996</span>
          </div>
        </div>

       
        <button className="circular-icon-btn">
          <Icon type="solid" classes="fa-ellipsis-h" />
        </button>
      </div>
      <div className="feed-text-cont">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
          maxime molestiae doloribus accusantium repudiandae quidem iste maiores
          sit.
        </p>
      </div>
      <div className="feed-media-cont">
        <img src={CardPlaceholder} alt="" />
      </div>
      <div className="feed-reactions text-light">
        <div className="feed-reaction-stat">
          <div>
            <img src={Like} alt="" />
            <span>512</span>
          </div>
          <div>
            <img src={Heart} alt="" />
            <span>106</span>
          </div>
        </div>
        <div className="feed-reaction-comment">
          <span>12 Comments</span>
        </div>
      </div>
      <div className="feed-reaction-btns">
        <button>
          <Icon classes="fa-thumbs-up pe-8" type="regular" />
          Like
        </button>
        <button>
          <Icon classes="fa-thumbs-down pe-8" type="regular" />
          Dislike
        </button>
        <button>
          <Icon classes="fa-comment-alt pe-8" type="regular" />
          Comment
        </button>
      </div>
      <div className="feed-comment-cont">
        <div className="fc-user-img">
          <img src={Placeholder} alt="" />
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
