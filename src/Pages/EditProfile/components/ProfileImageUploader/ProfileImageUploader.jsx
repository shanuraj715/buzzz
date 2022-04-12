import React, { useState } from "react";
import "./profileimageuploader.scss";
import Icon from "../../../../Components/FontAwesome/FontAwesome";
import toast from "react-hot-toast";
import config from "../../../../config.json";
import OutsideClick from "react-outside-click-handler";
import Loading from "../../../../Components/Loading/Loading";

function ProfileImageUploader({ setImage, hide }) {
  const [filePath, setFilePath] = useState("");
  const [file, setFile] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const func = () => {
    document.getElementById("ep-file-selector").click();
  };

  const removeFile = () => {
    console.log("Lo main chal pda");
    document.getElementById("ep-file-selector").value = "";
    setFilePath("");
  };

  const fileSelectHandler = (e) => {
    setFile(e.target.files[0]);
    setFilePath(URL.createObjectURL(e.target.files[0]));
  };

  const hideUploader = () => {
    hide(false);
  };

  const saveImage = () => {
    if (filePath === "") {
      toast.error("Please select an image");
    }

    let formData = new FormData();

    formData.append("file", file);
    // formData.append("filename", file.name);
    console.log(formData);
    setIsLoading(true);
    fetch(config.API_URL + "profile/image/main", {
      method: "POST",
      headers: {
        // "Content-Type": "application/json",
        authToken: window.getAuthToken(),
      },
      body: formData,
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
          toast.success("Profile image updated successfully");
          console.log(json.profileImage);
          setImage(json.profileImage);
          hideUploader();
        }
        setIsLoading(true);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(true);
      });
  };

  return (
    <div className="popup-bg">
      <OutsideClick
        onOutsideClick={() => {
          hideUploader();
        }}
      >
        <div className="open-anim-y  profile-img-upload-cont ">
          <div className="ep-btns-cont">
            <input
              type="file"
              className="ep-file-selector"
              id="ep-file-selector"
              onChange={(e) => fileSelectHandler(e)}
              name="S"
            />
            <button className="ep-img-upload-btn" onClick={func}>
              <Icon classes="fa-image" type="solid" />{" "}
              {filePath === "" ? "Select" : "Change"} Image
            </button>
            <button className="ep-img-remove-btn" onClick={removeFile}>
              <Icon type="solid" classes="fa-times text-red" />
            </button>
          </div>
          <p className="text-light">Please use square images</p>
          {filePath !== "" ? (
            <div className="ep-img-pre-cont">
              <img src={filePath} alt="" />
            </div>
          ) : null}
          <div className="ep-upload-btns">
            <button onClick={saveImage}>
              <Icon classes="fa-paper-plane" type="solid" /> Upload
            </button>
          </div>
        </div>
      </OutsideClick>
      {isLoading ? <Loading /> : null}
    </div>
  );
}

export default ProfileImageUploader;
