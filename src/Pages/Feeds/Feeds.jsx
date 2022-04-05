import React from "react";
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
import Like from "../../assets/images/reaction-like.svg";
import Heart from "../../assets/images/reaction-heart.svg";
import Cards from "./components/Cards/Cards"

function Feeds() {
  const myContacts = [
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
        <div className="feed-col1">Shobit khatri</div>
        <div className="feed-col2">
<<<<<<< HEAD
          <NewPost />

          <FeedCard
            text="Shobit khatri"
            authorImage={Placeholder}
            date="05-December-2022"
            description="It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It gives a way to pass data from one component to other components. It is similar to function arguments. "
            postimage={CardPlaceholder}
            likereaction={Like}
            heartreaction={Heart}
            comments="12 Comments"
            like="Like"
            dislike="Dislike"
            comment="comment"
          />
          <Cards />
        </div>
        <div className="feed-col3">
          <WidgetCard data={myContacts} title="Contacts" />
          <WidgetCard
            data={myContacts}
            title="Suggestions"
            isBtnVisible="true"
            click={() => alert("Click ho gya")}
          />
=======
          <FeedCard />
>>>>>>> 5e51176f7b7da56205df12091bc2cc5a36ad7bef
        </div>
      </div>
    </>
  );
}

export default Feeds;
