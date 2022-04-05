import React, { useState } from "react";
import "./editprofile.scss";
import { Helmet } from "react-helmet-async";
import PageBackground from "../../Components/PageBackground/PageBackground";
import config from "../../config.json";
import Header from "../../Components/Header/Header";
import Icon from "../../Components/FontAwesome/FontAwesome";
import DropDown from "./components/DropDown/DropDown";
import Input from "./components/Input/Input";

function EditProfile() {
  const [statesVisible, setStatesVisible] = useState(false);
  const [designationVisible, setDesignationVisible] = useState(false);

  // FORM DATA
  const [gender, setGender] = useState("m");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [designation, setDesgnation] = useState("");

  const [website, setWebsite] = useState("");
  const [birthday, setBirthday] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  const dropDownStatesClickHandler = (value) => {
    setState(value);
    setStatesVisible(false);
  };

  const dropDownDesignationClickHandler = (value) => {
    setDesgnation(value);
    setDesignationVisible(false);
  };

  const states = [
    {
      btnText: "Punjab",
      click: function () {
        dropDownStatesClickHandler(this.btnText);
      },
    },
    {
      btnText: "Haryana",
      click: function () {
        dropDownStatesClickHandler(this.btnText);
      },
    },
    {
      btnText: "Uttar Pradesh",
      click: function () {
        dropDownStatesClickHandler(this.btnText);
      },
    },
    {
      btnText: "Himachal Pradesh",
      click: function () {
        dropDownStatesClickHandler(this.btnText);
      },
    },
    {
      btnText: "Bihar",
      click: function () {
        dropDownStatesClickHandler(this.btnText);
      },
    },
    {
      btnText: "Assam",
      click: function () {
        dropDownStatesClickHandler(this.btnText);
      },
    },
    {
      btnText: "Maharastra",
      click: function () {
        dropDownStatesClickHandler(this.btnText);
      },
    },
    {
      btnText: "Rajsthan",
      click: function () {
        dropDownStatesClickHandler(this.btnText);
      },
    },
    {
      btnText: "Uttrakhand",
      click: function () {
        dropDownStatesClickHandler(this.btnText);
      },
    },
    {
      btnText: "Jharkhand",
      click: function () {
        dropDownStatesClickHandler(this.btnText);
      },
    },
    {
      btnText: "Kerla",
      click: function () {
        dropDownStatesClickHandler(this.btnText);
      },
    },
    {
      btnText: "Jammu & Kashmir",
      click: function () {
        dropDownStatesClickHandler(this.btnText);
      },
    },
  ];

  const designations = [
    {
      btnText: "Co-founder",
      click: function () {
        dropDownDesignationClickHandler(this.btnText);
      },
    },
    {
      btnText: "Manager",
      click: function () {
        dropDownDesignationClickHandler(this.btnText);
      },
    },
    {
      btnText: "CEO",
      click: function () {
        dropDownDesignationClickHandler(this.btnText);
      },
    },
    {
      btnText: "Intern",
      click: function () {
        dropDownDesignationClickHandler(this.btnText);
      },
    },
    {
      btnText: "Trainee",
      click: function () {
        dropDownDesignationClickHandler(this.btnText);
      },
    },
  ];

  return (
    <>
      <Helmet>
        <title>Edit Profile | {config.APP_NAME}</title>
      </Helmet>
      <PageBackground />
      <Header />
      <div className="container feeds-container">
        <div className="feed-col2 white-bg">
          <div className="profile-header">
            <div className="profile-cover-cont">
              <img src="https://picsum.photos/1000/200" alt="" />
            </div>
            <div className="profile-user-img-cont">
              <img src="https://picsum.photos/200/200" alt="" />
              <button className="">
                <Icon classes="fa-camera" type="solid" />
              </button>
            </div>
          </div>
          <div className="profile-data-cont">
            <div className="profile-text-data">
              <h2>Shanu Raj</h2>
            </div>

            <div className="profile-edit-row">
              <Input
                title="First Name"
                change={(e) => setFname(e.target.value)}
                placeholder=""
                autoComplete=""
                value={fname}
              />
              <Input
                title="Last Name"
                type=""
                change={(e) => setLname(e.target.value)}
                placeholder=""
                autoComplete=""
                value={lname}
              />
            </div>
            <div className="profile-edit-row">
              <Input
                title="Designation"
                type=""
                click={() => setDesignationVisible(true)}
                change={(e) => {}}
                placeholder=""
                autoComplete="app-designation"
                value={designation}
              >
                {designationVisible ? (
                  <DropDown
                    list={designations}
                    outClick={() => setDesignationVisible(false)}
                  />
                ) : null}
              </Input>
              <Input
                title="My Website"
                type=""
                click={() => {}}
                change={(e) => setWebsite(e.target.value)}
                placeholder="mywebsite.com"
                autoComplete=""
                value={website}
              />
            </div>

            <div className="profile-edit-row">
              <div>
                <span className="text-light">Gender</span>
                <div className="edit-profile-btn-cont">
                  <button
                    className={gender === "f" ? "active" : null}
                    onClick={() => setGender("f")}
                  >
                    Female
                  </button>
                  <button
                    className={gender === "m" ? "active" : null}
                    onClick={() => setGender("m")}
                  >
                    Male
                  </button>
                </div>
              </div>
              <Input
                title="Birthday"
                type=""
                click={() => {}}
                change={(e) => setBirthday(e.target.value)}
                placeholder="31-03-1997"
                autoComplete=""
                value={birthday}
              />
            </div>

            <div className="profile-edit-row">
              <Input
                title="City"
                type=""
                click={() => {}}
                change={(e) => setCity(e.target.value)}
                placeholder="New Delhi"
                autoComplete=""
                value={city}
              />
              <div className="profile-edit-row-2">
                <Input
                  title="State"
                  type=""
                  click={() => setStatesVisible(true)}
                  change={(e) => {}}
                  placeholder="Delhi"
                  autoComplete="app-state"
                  value={state}
                >
                  {statesVisible ? (
                    <DropDown
                      list={states}
                      outClick={() => setStatesVisible(false)}
                    />
                  ) : null}
                </Input>

                <Input
                  title="Zip"
                  type=""
                  click={() => {}}
                  change={(e) =>
                    setZip(isNaN(e.target.value) ? zip : e.target.value.trim())
                  }
                  placeholder="110092"
                  autoComplete=""
                  value={zip}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="feed-col3">Saksham Raj</div>
      </div>
    </>
  );
}

export default EditProfile;
