import React from 'react';
import Icon from "../../../../Components/FontAwesome/FontAwesome";

function CreatePost(props) {
  return (
    <>
        <div className="create">
          <span>{props.text}</span>

          <button onClick={props.hide} className="circular-icon-btn">
            <Icon type="solid" classes=" fa-times" />
          </button>
        </div>
    </>
  );
}

export default CreatePost;
