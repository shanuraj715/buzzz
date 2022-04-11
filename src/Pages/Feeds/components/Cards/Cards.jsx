import React, { useState } from "react";
import Icon from "../../../../Components/FontAwesome/FontAwesome";
import "./cards.scss";
import images from "../../../../assets/images/shobit.jpg";
import CreatePost from "../CreatePost/CreatePost";
import Circular from "../Circular Image/Circular";
import PhotosCard from "../Photos Card/PhotosCard";
function Cards(props) {
  const [isImageSelected, setisImageSelected] = useState(false);
  return (
    <div className="card-bg">
      <div className="main-card">
    <CreatePost text="Create Post" hide={props.hideCard} />
        <Circular text = "Shobit khatri" img = {images}/>
        <input type="text" value={props.text} onChange={e => props.setText(e.target.value)} />
        <div className="photos-card">
         <PhotosCard text = "Add Photo"/>
        </div>
        <div className="post-button">
          <button onClick={props.postData}>Post</button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
