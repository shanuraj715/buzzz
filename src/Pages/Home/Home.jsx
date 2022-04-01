import React from "react";
import { Helmet } from "react-helmet-async";
import config from "../../config.json";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home Page | {config.APP_NAME}</title>
      </Helmet>
      {/* Import Header here */}

      {/* Main page div container */}
      <div className="container"></div>
    </>
  );
}

export default Home;
