import React from "react";
import "./cards.scss";
import CreatePost from "../CreatePost/CreatePost";
import Circular from "../Circular Image/Circular";
import PhotosCard from "../Photos Card/PhotosCard";
import Loading from "../../../../Components/Loading/Loading";

function Cards(props) {
  const chooseImage = () => {
    document.getElementById("feed-photo").click();
  };

  return (
    <>
      <div className="card-bg">
        <div className="main-card">
          <CreatePost text="Create Post" hide={props.hideCard} />
          <Circular text={props.name} img={props.userIcon} />
          <input
            className="create-post-text"
            type="text"
            value={props.text}
            onChange={(e) => props.setText(e.target.value)}
          />
          <div className="photos-card" onClick={chooseImage}>
            {props.fileToShow === "" ? (
              <PhotosCard text="Add Photo" />
            ) : (
              <img src={props.fileToShow} alt="" />
            )}
          </div>
          <div className="post-button">
            <button onClick={props.postData}>Post</button>
          </div>
          <input
            type="file"
            id="feed-photo"
            className="feed-photo-upload"
            onChange={(e) => props.onSelect(e)}
          />
        </div>
      </div>
      {props.isLoading ? <Loading /> : null}
    </>
  );
}

export default Cards;
