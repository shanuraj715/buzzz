import React, { useState, useEffect } from "react";
import "./editprofile.scss";
import { Helmet } from "react-helmet-async";
import PageBackground from "../../Components/PageBackground/PageBackground";
import config from "../../config.json";
import Header from "../../Components/Header/Header";
import DropDown from "./components/DropDown/DropDown";
import Input from "./components/Input/Input";
import ProfileUserImage from "../../Components/ProfileUserImage/ProfileUserImage";
import WidgetCard from "../../Components/WidgetCard/WidgetCard";
import options from "./options.json";
import Cookie from "universal-cookie";
import toast from "react-hot-toast";
import Buttons from "../../Components/Buttons/Classic";
import Loading from "../../Components/Loading/Loading";
import ProfileImageUploader from "./components/ProfileImageUploader/ProfileImageUploader";

const cookie = new Cookie();

function EditProfile() {
  const [isLoading, setIsLoading] = useState(false);
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

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const authToken = window.getAuthToken();
    if (!authToken) {
      toast.error("Something error happened. Please refresh the page");
      return;
    }
    setIsLoading(true);
    fetch(`${config.API_URL}profile/${cookie.get("uid")}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authToken: authToken,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        throw new Error("");
      })
      .then((json) => {
        if (json.status) {
          // SET STATES
          setGender(json.data.gender);
          setFname(json.data.firstname);
          setLname(json.data.lastname);
          setDesgnation(json.data.designation);
          setBirthday(json.data.birthday);
          setCity(json.data.city);
          setState(json.data.state);
          setWebsite(json.data.website);
          setZip(json.data.zip);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        toast.error("Something wrong happened. Please reload the page.");
        setIsLoading(false);
      });
  };

  const updateData = () => {
    const authToken = window.getAuthToken();
    if (!authToken) {
      toast.error("Something error happened. Please refresh the page");
      return;
    }
    setIsLoading(true);
    fetch(`${config.API_URL}profile/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authToken: authToken,
      },
      body: JSON.stringify({
        fname: fname,
        lname: lname,
        designation: designation,
        website: website,
        gender: gender,
        birthday: birthday,
        city: city,
        state: state,
        zip: zip,
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        throw new Error("");
      })
      .then((json) => {
        if (json.status) {
          toast.success("Profile Updated");
        } else {
          toast.error(json.message ?? "");
        }
        setIsLoading(false);
      })
      .catch((err) => {
        toast.error("Something wrong happened. Please reload the page.");
        setIsLoading(false);
      });
  };

  return (
    <>
      <Helmet>
        <title>Edit Profile | {config.APP_NAME}</title>
      </Helmet>
      <PageBackground />
      {/* <ProfileImageUploader /> */}
      <Header />
      <div className="container feeds-container">
        <div className="feed-col2 white-bg">
          <ProfileUserImage />
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
                    onSelect={dropDownDesignationClickHandler}
                    list={options.designations}
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
                placeholder="1997-03-31"
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
                      onSelect={dropDownStatesClickHandler}
                      list={options.states}
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
            <div className="profile-update-btn-cont">
              <Buttons type="primary" click={updateData}>
                Cancel
              </Buttons>
              <Buttons type="secondary" click={updateData}>
                Update
              </Buttons>
            </div>
          </div>
        </div>
        <div className="feed-col3">
          <WidgetCard title="Suggestions" data={[]} />
        </div>
      </div>
      {isLoading ? <Loading /> : null}
    </>
  );
}

export default EditProfile;
