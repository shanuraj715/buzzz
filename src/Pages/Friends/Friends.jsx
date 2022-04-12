import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import config from "../../config.json";
import "./friends.scss";
import FriendCard from "./components/FriendCard/FriendCard";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import toast from "react-hot-toast";
import Loading from "../../Components/Loading/Loading";

function Friends() {
  const [friends, setFriends] = useState([]);
  const [requests, setRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(0);

  useEffect(() => {
    getFriendList();
    getRequestList();
  }, []);

  const getRequestList = () => {
    fetch(`${config.API_URL}friend/list/requests`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authtoken: window.getAuthToken(),
      },
    })
      .then((res) => {
        if (!res.status === 200) {
          throw new Error();
        }
        return res.json();
      })
      .then((json) => {
        if (json.status) {
          setRequests(json.data);
        } else {
          toast.error(json.message);
        }
        setIsLoading(isLoading + 1);
      })
      .catch((err) => {
        console.log(err);

        setIsLoading(isLoading + 1);
      });
  };

  const getFriendList = () => {
    fetch(`${config.API_URL}friend/list/friends`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authtoken: window.getAuthToken(),
      },
    })
      .then((res) => {
        if (!res.status === 200) {
          throw new Error();
        }
        return res.json();
      })
      .then((json) => {
        if (json.status) {
          setFriends(json.data);
        } else {
          toast.error(json.message);
        }

        setIsLoading(isLoading + 1);
      })
      .catch((err) => {
        console.log(err);

        setIsLoading(isLoading + 1);
      });
  };

  const unfriend = (uid) => {
    setIsLoading(0);
    fetch(`${config.API_URL}friend/remove`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authtoken: window.getAuthToken(),
      },
      body: JSON.stringify({ uid: uid }),
    })
      .then((res) => {
        if (!res.status === 200) {
          throw new Error();
        }
        return res.json();
      })
      .then((json) => {
        if (json.status) {
          getFriendList();
        } else {
          toast.error(json.message);
        }

        setIsLoading(2);
      })
      .catch((err) => {
        console.log(err);

        setIsLoading(2);
      });
  };

  const accept = (uid) => {
    fetch(`${config.API_URL}friend/accept`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authtoken: window.getAuthToken(),
      },
      body: JSON.stringify({ uid: uid }),
    })
      .then((res) => {
        if (!res.status === 200) {
          throw new Error();
        }
        return res.json();
      })
      .then((json) => {
        if (json.status) {
          getRequestList();
          getFriendList();
        } else {
          toast.error(json.message);
        }

        setIsLoading(2);
      })
      .catch((err) => {
        console.log(err);

        setIsLoading(2);
      });
  };

  return (
    <>
      <Helmet>
        <title>Friends List | {config.APP_NAME}</title>
      </Helmet>
      <Header />
      <div className="container">
        {requests.length !== 0 ? (
          <>
            <p className="section-title">Pending Requests</p>
            <div className="friend-cards">
              {requests.map((item, index) => {
                return (
                  <FriendCard
                    key={index}
                    username={item.username}
                    userId={item.userId}
                    fname={item.fname}
                    lname={item.lname}
                    image={item.image}
                    contextMenuBtns={[
                      {
                        icon: "fa-user",
                        text: "View Profile",
                        type: "link",
                        to: "/profile/view/" + item.userId,
                        uid: item.userId,
                      },
                      {
                        icon: "fa-check",
                        text: "Accept Request",
                        type: "button",
                        click: accept,
                        uid: item.userId,
                      },
                      {
                        icon: "fa-ban",
                        text: "Reject Request",
                        type: "button",
                        click: () => {},
                        uid: item.userId,
                      },
                    ]}
                  />
                );
              })}
            </div>
          </>
        ) : null}
        <p className="section-title">My Friends</p>
        <div className="friend-cards">
          {friends.map((item, index) => {
            return (
              <FriendCard
                key={index}
                username={item.username}
                userId={item.userId}
                fname={item.fname}
                lname={item.lname}
                image={item.image}
                contextMenuBtns={[
                  {
                    icon: "fa-user",
                    text: "View Profile",
                    type: "link",
                    to: "/profile/view/" + item.userId,
                    uid: item.userId,
                  },
                  {
                    icon: "fa-ban",
                    text: "Unfriend Shanu",
                    type: "button",
                    click: unfriend,
                    uid: item.userId,
                  },
                ]}
              />
            );
          })}
        </div>
      </div>
      <Footer />
      {/* {isLoading < 2 ? <Loading /> : null} */}
    </>
  );
}

export default Friends;
