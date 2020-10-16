import React, { useState, useEffect } from "react";
import { message, Icon, Input, Button } from "antd";
import { adminSignup } from "../src/actions";
import history from "./history";

import "antd/dist/antd.css";
import { UserOutlined, LockOutlined, LoginOutlined } from "@ant-design/icons";

const SignUp = (props) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onUserNameChange = (e) => {
    //console.log(e.target.value);
    setUserName(e.target.value);
  };

  const onEmailChange = (e) => {
    //console.log(e.target.value);
    setEmail(e.target.value);
  };

  const onPassChange = (e) => {
    //console.log(e.target.value);
    setPassword(e.target.value);
  };

  const handleSignUp = async () => {
    if (userName === "" || userName === null || userName === undefined) {
      message.warning("Please Enter userName");
      return;
    }

    if (email === "" || email === null || email === undefined) {
      message.warning("Please Enter Email");
      return;
    }
    if (password === "" || password === null || password === undefined) {
      message.warning("Please Enter password");
      return;
    }

    let user_type = "user";

    let formValues = {
      email,
      password,
      username: userName,
      user_type,
    };

    try {
      const response = await adminSignup(formValues);
      console.log(response);
      if (response.status === 201) {
        message.success("user Signed up successfully");
        props.setScreenType("login");
      }
    } catch (error) {
      message.warning(error.response.data.error.message);
    }
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <img
          src="https://cdn.onlinewebfonts.com/svg/img_511289.png"
          width="100px"
        />
      </div>
      <div style={{ margin: "30px" }}>
        <label>Username</label>
        <Input
          onChange={onUserNameChange}
          prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="username "
        />
      </div>
      <div style={{ margin: "30px" }}>
        <label>Email Address</label>
        <Input
          onChange={onEmailChange}
          prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="Email Address "
        />
      </div>
      <div style={{ margin: "30px" }}>
        <label>Password</label>
        <Input
          onChange={onPassChange}
          prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          type="password"
          placeholder="Password"
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <Button
          onClick={handleSignUp}
          type="primary"
          className="login-form-btn"
        >
          <LoginOutlined />
          Sign up
        </Button>
      </div>
      <div style={{ textAlign: "center", marginTop: "40px", fontSize: "16px" }}>
        <span style={{ textAlign: "center", marginTop: "40px" }}>
          <h6>OR</h6>
        </span>
      </div>
    </div>
  );
};
export default SignUp;
