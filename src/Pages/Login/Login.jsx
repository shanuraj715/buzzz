import React, { useState, useEffect } from "react";
import PageBackground from "../../Components/PageBackground/PageBackground";
import "./login-register.scss";
import { Link, Redirect } from "react-router-dom";
import Button from "../../Components/Buttons/Buttons2";
import Logo from "../../assets/images/logo.png";
import Input from "../../Components/Inputs/InputText";
import { reactLocalStorage as ls } from "reactjs-localstorage";
import { isLength } from "validator";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import config from "../../config.json";

function Login({ isLogged }) {
  const [username, setUsername] = useState(
    ls.getObject("login-cred").username || ""
  );
  const [password, setPassword] = useState(
    ls.getObject("login-cred").password || ""
  );
  const [isChecked, setIsChecked] = useState(
    ls.getObject("login-cred").isChecked || false
  );

  const [redirectTo, setRedirectTo] = useState("");

  const rememberLoginInfo = () => {
    ls.setObject("login-cred", { username, password, isChecked });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    // VALIDATE USER DATA
    if (!isLength(username, { min: 6, max: 32 })) {
      toast.error("Please enter a valid username.");
      return;
    }

    if (!isLength(password, { min: 6, max: 32 })) {
      toast.error("Please enter a valid password.");
      return;
    }

    isChecked ? rememberLoginInfo() : ls.remove("login-cred");

    // SEND DATA TO SERVER
    fetch(config.API_URL + "login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
      credentials: "include", // this will allow cookies to store in cross origin requests
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("");
        }

        return res.json();
      })
      .then((json) => {
        console.log(json);
        if (json.status) {
          toast.success("Successfully logged in");
          window.location.reload();
        } else {
          toast.error(json.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (isLogged) setRedirectTo("/feeds");
  }, []);

  return (
    <>
      {redirectTo !== "" ? <Redirect to={redirectTo} /> : null}
      <Helmet>
        <title>Login to your account | {config.APP_NAME}</title>
      </Helmet>
      <PageBackground />
      <div className="container to-center">
        <div className="login-register">
          <div className="custom-lr">
            <div className="lr-logo-cont1">
              <Link to="/">
                <img src={Logo} alt="" />
              </Link>
            </div>
            <h3 className="lr-form-title">Login To Your Account</h3>
            <form onSubmit={(e) => submitForm(e)}>
              <div className="lr-inp-row">
                <Input
                  placeholder="TTN Username"
                  value={username}
                  change={(value) => setUsername(value)}
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
              <div className="login-rf">
                <div>
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                  />
                  <span>Remember Me</span>
                </div>
                <div>
                  <Link to="/forgot-password">Forgot Password?</Link>
                </div>
              </div>
              <div className="lr-btns">
                <Button text="Sign In" type="type1" click={() => {}} />
              </div>
            </form>
          </div>
          <div className="google-lr">
            <div className="lr-logo-cont2">
              <Link to="/">
                <img src={Logo} alt="" />
              </Link>
            </div>
            <div className="lr-text1">
              <p>Enter your details to Start your journey with us.</p>
              <p className="text-light">Don't stop until you're proud.</p>
            </div>
            <div className="lr-btns">
              <Button type="type2" click={() => {}}>
                Sign In With Google
              </Button>
            </div>
            <div>
              <span>Don't have an account? </span>
              <Link to="/register">Create Account</Link>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default Login;
