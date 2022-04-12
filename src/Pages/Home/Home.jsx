import React from "react";
import { Helmet } from "react-helmet-async";
import config from "../../config.json";
import Header from "../../Components/Header/Header";
import { Redirect } from "react-router-dom";

function Home({ isLoading, isLogged }) {
  console.log(isLoading, isLogged);
  return (
    <>
      {!isLoading ? <Redirect to={isLogged ? "/feeds" : "/login"} /> : null}
      {/* <Helmet>
        <title>Home Page | {config.APP_NAME}</title>
      </Helmet>
      <Header />
      <div className="container"></div> */}
    </>
  );
}

export default Home;
