import React from "react";
import Icon from "../../../../Components/FontAwesome/FontAwesome";
import "./cards.css";

function Cards() {
  return (
    <div className="card-bg">
      <div className="main-card">
        <div className="create">
          <span>Create Post</span>

          <button className="circular-icon-btn">
            <Icon type="solid" classes=" fa-times" />
          </button>
        </div>
        {/* sfdagfsda
        <p>sfdgfsjda</p> */}
      </div>
    </div>
  );
}

export default Cards;
