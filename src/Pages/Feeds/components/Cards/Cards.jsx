import React, { useState } from "react";
import Icon from "../../../../Components/FontAwesome/FontAwesome";
import "./cards.scss";
import images from "../../../../assets/images/shobit.jpg";
import CreatePost from "../CreatePost/CreatePost";
import Circular from "../Circular Image/Circular";
import PhotosCard from "../Photos Card/PhotosCard";
function Cards(props) {
  

  const chooseImage = () => {
    document.getElementById("feed-photo").click()

  };

  return (
    <div className="card-bg">
      <div className="main-card">
        <CreatePost text="Create Post" hide={props.hideCard} />
        <Circular text="Shobit khatri" img={images} />
        <input
          className="create-post-text"
          type="text"
          value={props.text}
          onChange={(e) => props.setText(e.target.value)}
        />
        <div className="photos-card">
          <PhotosCard text="Add Photo" />
        <div className="photos-card" onClick={chooseImage}>
          {props.fileToShow === '' ? (
            <PhotosCard text="Add Photo" />
          ) : (
            <img src={props.fileToShow} alt="" />
          )}
          
        </div>
        <div className="post-button">
          <button onClick={props.postData}>Post</button>
        </div>
        <input type="file" id="feed-photo" className="feed-photo-upload" onChange={(e) => props.onSelect(e)} />
      </div>
    </div>
  );
}

export default Cards;
