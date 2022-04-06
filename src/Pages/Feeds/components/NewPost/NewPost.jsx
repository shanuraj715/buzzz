import React, {useState} from "react";
import "./newpost.css"
import Icon from "../../../../Components/FontAwesome/FontAwesome";
import Image from "../../../../assets/images/50x50.png";
import Cards from "../../components/Cards/Cards";

function NewPost() {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <>
      <div className="post-section-row">
        <div>
          <img src={Image} alt="" />
        </div>
        <div>
          <input className="input-box" type="text" placeholder="start a post" />
        </div>
        <div>
          <button onClick={()=> setIsVisible(true)}>
            <Icon type="regular" classes="fa-images" />
            <span>Photos</span>
          </button>
        </div>
      </div>
      { isVisible ? <Cards hideCard={() => setIsVisible(false)} /> : null}
    </>
  ); 
}

export default NewPost;
