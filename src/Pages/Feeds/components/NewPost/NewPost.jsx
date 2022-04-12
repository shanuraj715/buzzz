import React, { useState, useEffect } from "react";
import "./newpost.css";
import Icon from "../../../../Components/FontAwesome/FontAwesome";
import Image from "../../../../assets/images/50x50.png";
import Cards from "../../components/Cards/Cards";
import config from "../../../../config.json";
import toast from "react-hot-toast";

function NewPost(props) {
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState("");

  const postFeed = () => {
    if (text === "") {
      toast.error("Please type something");
      return;
    }
    fetch(`${config.API_URL}feeds`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authtoken: window.getAuthToken(),
      },
      body: JSON.stringify({ postText: text }),
    })
      .then((res) => {
        if (!res.status) {
          throw new Error("");
        }
        return res.json();
      })
      .then((json) => {
        if (json.status) {
          toast.success(json.message);
          props.refresh();
          setIsVisible(false);
        } else {
          console.log(json.message);
          toast.error(json.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="post-section-row">
        <div>
          <img src={Image} alt="" />
        </div>
        <div>
          <input
            value={text}
            className="input-box"
            type="text"
            placeholder="start a post"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <button onClick={() => setIsVisible(true)}>
            <Icon type="regular" classes="fa-images" />
            <span>Photos</span>
          </button>
        </div>
      </div>
      {isVisible ? (
        <Cards
          text={text}
          hideCard={() => setIsVisible(false)}
          setText={setText}
          postData={postFeed}
        />
      ) : null}
    </>
  );
}

export default NewPost;
