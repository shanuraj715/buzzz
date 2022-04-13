import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import ProfileUserImage from "../../Components/ProfileUserImage/ProfileUserImage";
import "./viewprofile.scss";
import Icon from "../../Components/FontAwesome/FontAwesome";
import WidgetCard from "../../Components/WidgetCard/WidgetCard";
import config from "../../config.json";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import { Redirect } from "react-router-dom";

function ViewProfile({ isLogged }) {
  const [data, setData] = useState({});
  const [contacts, setContacts] = useState([]);
  const [redirectTo, setRedirectTo] = useState(null);

  useEffect(() => {
    if (isLogged) {
      fetchContacts();
      getProfileData();
    } else {
      setRedirectTo("/login");
    }
  }, []);

  const fetchContacts = () => {
    fetch(`${config.API_URL}friend/list/friends`, {
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
        if (json.status) {
          const contacts = json.data.map((item) => {
            return {
              name: item.fname + " " + item.lname,
              image: item.image,
            };
          });
          setContacts(contacts);
        } else {
          toast.error(json.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
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

  const getProfileData = () => {
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
        if (json.status) setData(json.data);
        else setRedirectTo("/feeds");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {redirectTo !== null ? <Redirect to={redirectTo} /> : null}
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
          <WidgetCard data={contacts} title="Contacts" />
        </div>
      </div>
    </>
  );
}

export default ViewProfile;
