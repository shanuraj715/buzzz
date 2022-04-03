import React from "react";
import "./page404.scss";
import BrokenLink from "../../assets/images/broken-link.svg";
import PageBackground from "../../Components/PageBackground/PageBackground";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Page404() {
  return (
    <>
      <Helmet>
        <title>404 | Page Not Found</title>
      </Helmet>
      {/* ADD HEADER */}
      <PageBackground />
      <div className="container err-404">
        <div className="err404-box">
          <img src={BrokenLink} alt="" />
          <span className="text-bold">This page isn't available</span>
          <p>
            The link may be broken, or the page may have been removed. Check to
            see if the link you're trying to open is correct.
          </p>
          <Link to="/feeds" className="btn btn-primary">
            Go to feeds
          </Link>
        </div>
      </div>
    </>
  );
}

export default Page404;
