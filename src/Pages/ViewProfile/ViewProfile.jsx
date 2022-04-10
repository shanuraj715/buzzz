import React from "react";
import Header from '../../Components/Header/Header'
import ProfileUserImage from "../../Components/ProfileUserImage/ProfileUserImage";
import Image from "../../assets/images/shobit.jpg";
import './viewprofile.scss';
import Icon from "../../Components/FontAwesome/FontAwesome";
import WidgetCard from "../../Components/WidgetCard/WidgetCard";

function ViewProfile() {
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
      <Header />
      <div className="container feeds-container">
        <div className="feed-col2 white-bg">
          <ProfileUserImage />
          <div className="profile-data-cont">
          <h1>Shobit Khatri</h1>
          <span>Shobit Khatri is a co-founder and COO of video and Tech Company</span>
          <span>London.England.United Kindom.234 Friends</span>
          <div className="Add-visit">
            <button><Icon type="solid" classes="fa-user-plus"/> Add Friend</button>
            <button><Icon type ="solid" classes="fa-chart-line"/> Visit Website</button>
          </div>

           
          </div>
        </div>
        <div className="feed-col3">
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

export default ViewProfile;
