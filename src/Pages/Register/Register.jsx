import React, { useState, useEffect } from "react";
import PageBackground from "../../Components/PageBackground/PageBackground";
import { Link } from "react-router-dom";
import Button from "../../Components/Buttons/Buttons2";
import Logo from "../../assets/images/logo.png";
import Input from "../../Components/Inputs/InputText";
import { isLength } from "validator";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import config from "../../config.json";

function Register() {
  // STATES OF THIS COMPONENT
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
  };
  return (
    <>
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
                  placeholder="Enter your full name"
                  value={name}
                  change={(value) => setName(value)}
                  classes="lr-inp"
                />
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
      ;
    </>
  );
}

export default Register;
