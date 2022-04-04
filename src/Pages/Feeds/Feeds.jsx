import React from "react";
import "./feeds.css";
import { Helmet } from "react-helmet-async";
import config from "../../config.json";
import Background from "../../Components/PageBackground/PageBackground";
import FeedCard from "./components/FeedCard/FeedCard";
import NewPost from "./components/NewPost/NewPost";
import Image from "../../assets/images/shobit.jpg";
import WidgetCard from '../../Components/WidgetCard/WidgetCard'

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
          <NewPost />

          <FeedCard />
          {/* <Cards /> */}
        </div>
        <div className="feed-col3">
          <WidgetCard data={myContacts} title="Contacts" />
          <WidgetCard data={myContacts} title="Suggestions" isBtnVisible="true" click={() => alert("Click ho gya")} />
          
        </div>
      </div>
    </>
  );
}

export default Feeds;
