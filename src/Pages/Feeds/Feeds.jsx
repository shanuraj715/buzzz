import React from "react";
import "./feeds.css";
import { Helmet } from "react-helmet-async";
import config from "../../config.json";
import Background from "../../Components/PageBackground/PageBackground";
import FeedCard from "./components/FeedCard/FeedCard";


function Feeds() {
  return (
    <>
      <Helmet>
        <title>Feeds Page | {config.APP_NAME}</title>
      </Helmet>
      <Background />
      <div className="container feeds-container">
        <div className="feed-col1">Shanu Raj</div>
        <div className="feed-col2">
          
         <FeedCard />
        </div>
        <div className="feed-col3">Saksham Raj</div>
      </div>
    </>
  );
}

export default Feeds;
