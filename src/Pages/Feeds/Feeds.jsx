import React, { useState, useEffect } from "react";
import "./feeds.scss";
import { Helmet } from "react-helmet-async";
import config from "../../config.json";
import Background from "../../Components/PageBackground/PageBackground";
import FeedCard from "./components/FeedCard/FeedCard";
import NewPost from "./components/NewPost/NewPost";
import Image from "../../assets/images/shobit.jpg";
import WidgetCard from "../../Components/WidgetCard/WidgetCard";
import Placeholder from "../../assets/images/shobit.jpg";
import CardPlaceholder from "../../assets/images/1280x720.jpg";
import UserCard from "./components/UserCard/UserCard";
import Like from "../../assets/images/reaction-like.svg";
import Heart from "../../assets/images/reaction-heart.svg";

function Feeds() {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    fetchFeeds()
    // console.log(window.getAuthToken())
    
  }, []);

  const fetchFeeds = () => {
    fetch(`${config.API_URL}feeds`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authtoken: window.getAuthToken(),
      },
    })
      .then((res) => {
        if (!res.status === 200) {
          throw new Error("");
        }
        return res.json();
      })
      .then((json) => {
        if (json.status) {
          setFeeds(json.data);
        }
      });
  }

  const myContacts = [
    {
      name: "Shobit khatri",
      image: Image,
    },
    { name: "Shanu raj", image: Image },
    {
      name: "Shobit khatri",
      image: Image,
    },
    { name: "Shanu raj", image: Image },
    {
      name: "Shobit khatri",
      image: Image,
    },
    { name: "Shanu raj", image: Image },
    {
      name: "Shobit khatri",
      image: Image,
    },
    { name: "Shanu raj", image: Image },
  ];
  return (
    <>
      <Helmet>
        <title>Feeds Page | {config.APP_NAME}</title>
      </Helmet>
      <Background />
      <div className="container feeds-container">
        <div className="feed-col1">
          <UserCard img={Image} bgImage="https://picsum.photos/400/160" />
        </div>
        <div className="feed-col2">
          <NewPost refresh={fetchFeeds} />

          {feeds.map((item, index) => (
            <FeedCard
              key={index}
              text="Shobit khatri"
              authorImage={Placeholder}
              date="05-December-2022"
              description={item.postText}
              postimage={CardPlaceholder}
              likereaction={Like}
              heartreaction={Heart}
              comments={2}
            />
          ))}
        </div>
        <div className="feed-col3">
          <WidgetCard data={myContacts} title="Contacts" />
          <WidgetCard
            data={myContacts}
            title="Suggestions"
            isBtnVisible="true"
            click={() => alert("Click ho gya")}
          />
        </div>
      </div>
    </>
  );
}

export default Feeds;
