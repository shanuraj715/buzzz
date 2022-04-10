import React, { useState, useEffect } from "react";
import PageBackground from "../../Components/PageBackground/PageBackground";
import { Link, Redirect } from "react-router-dom";
import Button from "../../Components/Buttons/Buttons2";
import Logo from "../../assets/images/logo.png";
import Input from "../../Components/Inputs/InputText";
import { isLength } from "validator";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import config from "../../config.json";
import Icon from "../../Components/FontAwesome/FontAwesome";
import Loading from "../../Components/Loading/Loading";
import validator from "validator";

function Register() {
  // STATES OF THIS COMPONENT
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [isUsernameAvailable, setIsUsernameAvailable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [redirectTo, setRedirectTo] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    if (!validator.isLength(fname, { min: 2, max: 32 })) {
      toast.error("Invalid first name");
      return;
    }

    if (!validator.isLength(username, { min: 6, max: 16 })) {
      toast.error("Invalid username");
      return;
    }

    if (!validator.isLength(password, { min: 6, max: 64 })) {
      toast.error("Invalid password");
      return;
    }

    if (password !== password2) {
      toast.error("Password do not match.");
      return;
    }

    if (!validator.isEmail(email)) {
      toast.error("Invalid email address.");
      return;
    }

    if (!isUsernameAvailable) {
      toast.error("Username not available.");
      return;
    }
    register();
  };

  useEffect(() => {
    if (username.length >= 6 && username.length <= 16) {
      checkUsername();
      // console.log("Gya na request.");
    }
  }, [username]);

  const checkUsername = () => {
    fetch(`${config.API_URL}register/username/check/${username}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        throw new Error("");
      })
      .then((json) => {
        if (json.status === true) {
          setIsUsernameAvailable(json.availability);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const register = () => {
    setIsLoading(true);
    fetch(`${config.API_URL}register`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username,
        fname,
        lname,
        email,
        password,
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        throw new Error("");
      })
      .then((json) => {
        console.log(json);
        if (json.status) {
          toast.success("Successfully registered");
          setRedirectTo("/login");
        } else {
          toast.error(json.message);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  return (
    <>
      {redirectTo !== "" ? <Redirect to={redirectTo} /> : null}
      <Helmet>
        <title>Create account | {config.APP_NAME}</title>
      </Helmet>
      <PageBackground />
      <div className="container to-center">
        <div className="login-register">
          <div className="custom-lr">
            <div className="lr-logo-cont1">
              <img src={Logo} alt="" />
            </div>
            <h3 className="lr-form-title">Create Your Account</h3>
            <form onSubmit={(e) => submitForm(e)}>
              <div className="lr-inp-row">
                <Input
                  placeholder="Enter your first name"
                  value={fname}
                  change={(value) => setFName(value)}
                  classes="lr-inp"
                />

                <Input
                  placeholder="Enter your last name"
                  value={lname}
                  change={(value) => setLName(value)}
                  classes="lr-inp"
                />
              </div>
              <div className="lr-inp-row">
                <Input
                  placeholder="Enter your username"
                  value={username}
                  type="text"
                  change={(value) => setUsername(value)}
                  classes="lr-inp"
                />
                {username.length >= 6 && username.length <= 32 ? (
                  <Icon
                    classes={`fa-${
                      isUsernameAvailable
                        ? "check text-green"
                        : "times text-red"
                    }`}
                    type="solid"
                  />
                ) : null}
              </div>
              <div className="lr-inp-row">
                <Input
                  placeholder="Enter your email address"
                  value={email}
                  type="email"
                  change={(value) => setEmail(value)}
                  classes="lr-inp"
                />
              </div>
              <div className="lr-inp-row">
                <Input
                  placeholder="Password"
                  type="password"
                  value={password}
                  change={(value) => setPassword(value)}
                  classes="lr-inp"
                />
              </div>
              <div className="lr-inp-row">
                <Input
                  placeholder="Confirm Password"
                  type="password"
                  value={password2}
                  change={(value) => setPassword2(value)}
                  classes="lr-inp"
                />
              </div>

              <div className="lr-btns">
                <Button text="Sign Up" type="type1" click={() => {}} />
              </div>
            </form>
          </div>
          <div className="google-lr">
            <div className="lr-logo-cont2">
              <img src={Logo} alt="" />
            </div>
            <div className="lr-text1">
              <p>Enter your details to Start your journey with us.</p>
              <p className="text-light">Don't stop until you're proud.</p>
            </div>
            <div className="lr-btns">
              <Button type="type2" click={() => {}}>
                Sign Up With Google
              </Button>
            </div>
            <div>
              <span>Already have an account? </span>
              <Link to="/login">Sign In</Link>
            </div>
          </div>
        </div>
      </div>
      {isLoading ? <Loading /> : null}
    </>
  );
}

export default Register;
