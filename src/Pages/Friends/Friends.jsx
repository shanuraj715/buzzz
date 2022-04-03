import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import config from "../../config.json";
import "./friends.scss";
import FriendCard from "./components/FriendCard/FriendCard";

function Friends() {
  return (
    <>
      <Helmet>
        <title>Friends List | {config.APP_NAME}</title>
      </Helmet>
      <div className="container">
        <div className="friend-cards">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => {
            return <FriendCard key={index} />;
          })}
        </div>
      </div>
      ;
    </>
  );
}

export default Friends;
