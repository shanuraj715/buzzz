import React from "react";
import "./Header.css";
import Icon from "../../Components/FontAwesome/FontAwesome";
import Image from "../../assets/images/50x50.png";
import Img from "../../assets/images/logo-text.png";

function Header() {
  return (
    <>
      <header className="container-fluid header">
        <div>
          <img classname="logo-img" src={Img} alt="" />
        </div>
        <div className="content">
          <ul>
            <li className="header-user-name">
              <div className="header-user-img">
                <img src={Image} alt="" />
              </div>
              <span>Shobit Khannatri</span>
            </li>
            <li>
              <button className="circular-icon-btn header-btn">
                <Icon classes="fa-comment" type="regular" />
              </button>
            </li>
            <li>
              <button className="circular-icon-btn header-btn">
                <Icon classes="fa-user-alt" type="solid" />
              </button>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
