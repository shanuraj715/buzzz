import React, { useState, useEffect } from "react";
import "./feeds.scss";
import { Redirect } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import config from "../../config.json";
import Background from "../../Components/PageBackground/PageBackground";
import FeedCard from "./components/FeedCard/FeedCard";
import NewPost from "./components/NewPost/NewPost";
import SeachWidget from "../../Components/SearchWidget/SearchWidget";
import WidgetCard from "../../Components/WidgetCard/WidgetCard";
import UserCard from "./components/UserCard/UserCard";
import toast from "react-hot-toast";
import Cookie from "universal-cookie";
import Header from "../../Components/Header/Header";

const cookies = new Cookie();

function Feeds({ isLogged }) {
  const [feeds, setFeeds] = useState([]);
  const [redirectTo, setRedirectTo] = useState("");
  const [userData, setUserData] = useState({});
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    if (!isLogged) {
      setRedirectTo("/login");
    } else {
      fetchFeeds();

      fetchContacts();
    }
  }, []);

  useEffect(() => {
    fetchPersonalProfileData();
  }, [feeds]);

  const fetchPersonalProfileData = () => {
    fetch(`${config.API_URL}profile/` + cookies.get("uid"), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authtoken: window.getAuthToken(),
      },
    })
      .then((res) => {
        if (!res.status) {
          throw new Error("");
        }
        return res.json();
      })
      .then((json) => {
        // console.log(json);
        if (json.status) {
          setUserData(json.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchFeeds = () => {
    fetch(`${config.API_URL}feeds`, {
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
        if (json.status) {
          setFeeds(json.data);
        }
      });
  };

  const postResponse = (type, pid, index) => {
    fetch(`${config.API_URL}feeds/response`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authtoken: window.getAuthToken(),
      },
      body: JSON.stringify({
        type: type,
        pid: pid,
      }),
    })
      .then((res) => {
        if (!res.status === 200) {
          throw new Error("");
        }
        return res.json();
      })
      .then((json) => {
        if (json.status) {
          getOnePost(pid, index);
        } else {
          toast.error(json.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const postDelete = (pid) => {
    fetch(`${config.API_URL}feeds/delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authtoken: window.getAuthToken(),
      },
      body: JSON.stringify({
        pid: pid,
      }),
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
          // console.log("")
          fetchFeeds();
        } else {
          toast.error(json.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getOnePost = (pid, index) => {
    fetch(`${config.API_URL}feeds/post/` + pid, {
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
        if (json.status) {
          modifyFeedsArray(json.data, index);
        } else {
          toast.error(json.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const modifyFeedsArray = (data, position) => {
    let myFeeds = [...feeds];
    let array = [];
    myFeeds.forEach((item, index) => {
      if (index === position) {
        array.push(data);
      } else {
        array.push(item);
      }
    });
    setFeeds(array);
  };

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

  return (
    <>
      {redirectTo !== "" ? <Redirect to={redirectTo} /> : null}
      <Helmet>
        <title>Feeds Page | {config.APP_NAME}</title>
      </Helmet>
      <Header image={userData.profileImage} uid={userData.userId} />
      <Background />
      <div className="container feeds-container">
        <div className="feed-col1">
          <UserCard
            img={userData.profileImage}
            bgImage="https://picsum.photos/400/160"
            posts={userData.postCount}
            name={userData.firstname + " " + userData.lastname}
          />
        </div>
        <div className="feed-col2">
          {window.innerWidth < 950 ? <SeachWidget /> : null}
          <NewPost
            refresh={fetchFeeds}
            userIcon={userData.profileImage}
            name={userData.firstname + " " + userData.lastname}
          />
          {feeds.map((item, index) => (
            <FeedCard
              index={index}
              key={index}
              text={item.postAuthor}
              authorImage={item.authorThumb}
              date={item.postDate}
              description={item.postText}
              postId={item.postId}
              postimage={item.postImage}
              likes={item.likes}
              dislikes={item.dislikes}
              comments={item.comments}
              reactionHandler={postResponse}
              deletePost={postDelete}
              owner={item.owner}
            />
          ))}
        </div>
        <div className="feed-col3">
          <SeachWidget />
          <WidgetCard data={contacts} title="Contacts" />
          {/* <WidgetCard
            data={myContacts}
            title="Suggestions"
            isBtnVisible="true"
            click={() => alert("Click ho gya")}
          /> */}
        </div>
      </div>
    </>
  );
}

export default Feeds;
