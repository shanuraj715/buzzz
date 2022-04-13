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

  const [filePath, setFilePath] = useState("");
  const [file, setFile] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const postFeed = () => {
    setIsLoading(true);
    let formData = new FormData();

    formData.append("file", file);

    formData.append("text", text);

    fetch(`${config.API_URL}feeds`, {
      method: "POST",
      headers: {
        // "Content-Type": 'application/json',
        authtoken: window.getAuthToken(),
      },
      body: formData,
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
          setText("");
          toggleVisible(false);
        } else {
          console.log(json.message);
          toast.error(json.message);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  const fileSelectHandler = (e) => {
    setFile(e.target.files[0]);
    setFilePath(URL.createObjectURL(e.target.files[0]));
  };

  const toggleVisible = (value) => {
    setFile({});
    setFilePath("");
    setIsVisible(value);
  };

  return (
    <>
      <div className="post-section-row">
        <div>
          <img src={props.userIcon} alt="" />
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
          <button onClick={() => toggleVisible(true)}>
            <Icon type="regular" classes="fa-images" />
            <span>Photos</span>
          </button>
        </div>
      </div>
      {isVisible ? (
        <Cards
          text={text}
          hideCard={() => toggleVisible(false)}
          setText={setText}
          postData={postFeed}
          onSelect={fileSelectHandler}
          fileToShow={filePath}
          isLoading={isLoading}
          name={props.name}
          userIcon={props.userIcon}
        />
      ) : null}
    </>
  );
}

export default NewPost;
