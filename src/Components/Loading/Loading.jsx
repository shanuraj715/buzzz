import React from "react";
import "./loading.scss";
import LoadingImage from "../../assets/images/loading.svg";

function Loading() {
  return (
    <div className="loading-bg">
      <div className="loading-img-container">
        <img src={LoadingImage} alt="" />
      </div>
    </div>
  );
}

export default Loading;
