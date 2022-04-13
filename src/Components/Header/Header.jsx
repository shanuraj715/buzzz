import React, { useState, useEffect } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Icon from "../../Components/FontAwesome/FontAwesome";
import Img from "../../assets/images/logo.png";
import Cookie from "universal-cookie";
import config from "../../config.json";
import OutsideClickHandler from "react-outside-click-handler";

const cookies = new Cookie();

function Header() {
  const [userData, setUserData] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    fetchPersonalProfileData();
  }, []);

  const logOut = () => {
    cookies.remove("authToken");
    cookies.remove("uid");
    window.open("/login", "_self");
  };

  const toggle = () => {
    setIsVisible(!isVisible);
  };

  const fetchPersonalProfileData = () => {
    const userId = cookies.get("uid");
    if (!userId) return;
    fetch(`${config.API_URL}profile/` + userId, {
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
        setUserData(json.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <header className="container-fluid header">
        <div className="logo-img">
          <Link to="/">
            <img className="" src={Img} alt="" />
          </Link>
        </div>
        <div className="content">
          <ul>
            <li className="header-user-name">
              <div className="header-user-img">
                <img src={userData.profileImage} alt="" />
              </div>
              <span className="header-username">
                {userData.username ?? "User"}
              </span>
            </li>
            {/* <li>
              <button className="circular-icon-btn header-btn">
                <Icon classes="fa-comment" type="regular" />
              </button>
            </li> */}
            <li className="header-dropdown-btn">
              <button className="circular-icon-btn header-btn" onClick={toggle}>
                <Icon classes="fa-user-alt" type="solid" />
              </button>
              {isVisible ? (
                <OutsideClickHandler
                  onOutsideClick={() => {
                    toggle();
                  }}
                >
                  <div className="header-dropdown-cont open-anim-y">
                    <Link to="/feeds">Feeds</Link>
                    <Link to={`/profile/view/${userData.userId}`}>
                      View Profile
                    </Link>
                    <Link to="/profile/edit">Edit Profile</Link>
                    <Link to="/friends">Friends / Requests</Link>
                    <button onClick={logOut}>Logout</button>
                  </div>
                </OutsideClickHandler>
              ) : null}
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
