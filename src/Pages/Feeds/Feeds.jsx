import React from "react";
import "./feeds.css";
import { Helmet } from "react-helmet-async";
import config from "../../config.json";
import Background from "../../Components/PageBackground/PageBackground";
import Icon from "../../Components/FontAwesome/FontAwesome";
import Placeholder from "../../assets/images/shanu-placeholder.jpg";
import CardPlaceholder from "../../assets/images/1280x720.jpg";
import Like from "../../assets/images/reaction-like.svg";
import Heart from "../../assets/images/reaction-heart.svg";
// import LikeIcon from "../../assets/images/like.png";
// import Dislike from "../../assets/images/dislike.png";

function Feeds() {
  return (
    <>
      <Helmet>
        <title>Feeds Page | {config.APP_NAME}</title>
      </Helmet>
      <Background />
      <div className="container feeds-container">
        <div className="feed-col1">Shanu Raj</div>
        <div className="feed-col2">
          <div className="feed-card">
            <div className="feed-user-row">
              <div className="feed-user-info">
                <img src={Placeholder} alt="" className="feed-author-img" />
                <div className="feed-ui-data">
                  <span className="feed-author text-bold">Shanu Raj</span>
                  <span className="feed-date text-light">December 5, 1996</span>
                </div>
              </div>
              <button className="circular-icon-btn">
                <Icon type="solid" classes="fa-ellipsis-h" />
              </button>
            </div>
            <div className="feed-text-cont">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolores maxime molestiae doloribus accusantium repudiandae
                quidem iste maiores sit.
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
                <input
                  type="text"
                  className=""
                  placeholder="Write a comment..."
                />
                <button>
                  <Icon classes="fa-paper-plane" type="regular" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="feed-col3">Saksham Raj</div>
      </div>
    </>
  );
}

export default Feeds;
