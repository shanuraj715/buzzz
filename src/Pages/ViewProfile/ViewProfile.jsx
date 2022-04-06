import React from "react";
import Header from '../../Components/Header/Header'
import ProfileUserImage from "../../Components/ProfileUserImage/ProfileUserImage";

function ViewProfile() {
  return (
    <>
      <Header />
      <div className="container feeds-container">
        <div className="feed-col2 white-bg">
          <ProfileUserImage />
          <div className="profile-data-cont">
            <div className="profile-text-data">
              <h2>Shobit Khatri</h2>
            </div>


            {/* Your Code Here */}
          </div>
        </div>
        <div className="feed-col3">
            Shobit khatri
        </div>
      </div>
    </>
  );
}

export default ViewProfile;
