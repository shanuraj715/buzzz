import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import config from "../../config.json";
import "./friends.scss";
import FriendCard from "./components/FriendCard/FriendCard";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function Friends() {
  return (
    <>
      <Helmet>
        <title>Friends List | {config.APP_NAME}</title>
      </Helmet>
      <Header />
      <div className="container">
        <p className="section-title">Pending Requests</p>
        <div className="friend-cards">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => {
            return (
              <FriendCard
                key={index}
                username="shanuraj715"
                contextMenuBtns={[
                  {
                    icon: "fa-user",
                    text: "View Profile",
                    type: "link",
                    to: "/profile/shanuraj715",
                  },
                  {
                    icon: "fa-ban",
                    text: "Reject Request",
                    type: "button",
                    click: () => {
                      alert("Clicked");
                    },
                  },
                ]}
              />
            );
          })}
        </div>
        <p className="section-title">My Friends</p>
        <div className="friend-cards">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => {
            return (
              <FriendCard
                key={index}
                username="shanuraj715"
                contextMenuBtns={[
                  {
                    icon: "fa-user",
                    text: "View Profile",
                    type: "link",
                    to: "/profile/shanuraj715",
                  },
                  {
                    icon: "fa-ban",
                    text: "Unfriend Shanu",
                    type: "button",
                    click: () => {
                      alert("Clicked");
                    },
                  },
                ]}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Friends;
