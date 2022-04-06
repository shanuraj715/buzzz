import React,{useState} from 'react';
import Icon from "../../../../Components/FontAwesome/FontAwesome";
function PhotosCard(props) {
    const [isImageSelected, setisImageSelected] = useState(false);
  return (
   
    <>
       <div className="photo-icon">
            {isImageSelected ? (
              <button className="circular-icon-btn ">
                <Icon type="solid" classes="fa-times" />
              </button>
            ) : null}
            <Icon type="solid" classes="fa-images" />
            <span>{props.text}</span>
          </div>
    </>
  );
}

export default PhotosCard;
