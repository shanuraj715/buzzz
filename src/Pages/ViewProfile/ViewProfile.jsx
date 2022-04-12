import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import ProfileUserImage from "../../Components/ProfileUserImage/ProfileUserImage";
import Image from "../../assets/images/shobit.jpg";
import "./viewprofile.scss";
import Icon from "../../Components/FontAwesome/FontAwesome";
import WidgetCard from "../../Components/WidgetCard/WidgetCard";
import config from "../../config.json";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

function ViewProfile() {
  const [data, setData] = useState({});
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

  const sendFriendRequest = () => {
    const uid = window.location.href.split("/").at(-1);

    fetch(`${config.API_URL}friend/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authToken: window.getAuthToken(),
      },
      body: JSON.stringify({ uid: uid }),
    })
      .then((res) => {
        if (!res.status === 200) {
          throw new Error("");
        }
        return res.json();
      })
      .then((json) => {
        console.log(json);
        if (json.status) {
          toast.success("Friend Request Sent");
        } else {
          toast.error(json.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getUid = () => {
    let uid = window.location.href.split("/").at(-1);
    console.log(uid);
    return uid;
  };

  useEffect(() => {
    fetch(`${config.API_URL}profile/${getUid()}`, {
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
        console.log(json);
        setData(json.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Helmet>
        <title>
          {data?.username ?? ""} | {config.APP_NAME}
        </title>
      </Helmet>
      <Header />
      <div className="container feeds-container">
        <div className="feed-col2 white-bg">
          <ProfileUserImage isBtnVisible={false} image={data.profileImage} />
          <div className="profile-data-cont">
            <h1>{data.firstname + " " + data.lastname}</h1>
            <span>{data.bio ?? ""}</span>
            <span>{data.city + ", " + data.state}</span>
            <div className="add-visit">
              {!data.isFriend ? (
                <button onClick={sendFriendRequest}>
                  <Icon type="solid" classes="fa-user-plus" /> Add Friend
                </button>
              ) : null}
              <a
                href={data.website !== "" ? data.website : "#"}
                target="_blank"
              >
                <Icon type="solid" classes="fa-chart-line" /> Visit Website
              </a>
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
