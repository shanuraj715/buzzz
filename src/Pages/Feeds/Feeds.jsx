import React, { useState, useEffect } from "react";
import "./feeds.scss";
import { Redirect } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import config from "../../config.json";
import Background from "../../Components/PageBackground/PageBackground";
import FeedCard from "./components/FeedCard/FeedCard";
import NewPost from "./components/NewPost/NewPost";
import Image from "../../assets/images/shobit.jpg";
import WidgetCard from "../../Components/WidgetCard/WidgetCard";
import Placeholder from "../../assets/images/shobit.jpg";
import CardPlaceholder from "../../assets/images/1280x720.jpg";
import UserCard from "./components/UserCard/UserCard";
import toast from "react-hot-toast";

function Feeds({ isLogged }) {
  const [feeds, setFeeds] = useState([]);
  const [redirectTo, setRedirectTo] = useState("");

  useEffect(() => {
    fetchFeeds();
    if (!isLogged) setRedirectTo("/login");
  }, []);

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
        console.log(json);
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
    console.log(data, position);
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
      {redirectTo !== "" ? <Redirect to={redirectTo} /> : null}
      <Helmet>
        <title>Feeds Page | {config.APP_NAME}</title>
      </Helmet>
      <Background />
      <div className="container feeds-container">
        <div className="feed-col1">
          <UserCard img={Image} bgImage="https://picsum.photos/400/160" />
        </div>
        <div className="feed-col2">
          <NewPost refresh={fetchFeeds} />

          {feeds.map((item, index) => (
            <FeedCard
              index={index}
              key={index}
              text={item.postAuthor}
              authorImage={Placeholder}
              date={item.postDate}
              description={item.postText}
              postId={item.postId}
              postimage={item.postImage}
              likes={item.likes}
              dislikes={item.dislikes}
              comments={item.comments}
              reactionHandler={postResponse}
              deletePost={postDelete}
            />
          ))}
        </div>
        <div className="feed-col3">
          <WidgetCard data={myContacts} title="Contacts" />
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

export default Feeds;
