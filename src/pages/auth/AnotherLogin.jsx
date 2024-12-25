import React from "react";
// import "./Login.scss";
// import playerImage from "./player.png"; // Replace with the actual path of the image

import LoginBackground from '../../assets/images/loginteam.png'
import { Outlet } from "react-router-dom";

const AnotherLogin = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="logo"> {/* Replace with your logo */}
          <img src={LoginBackground} alt="Logo" />
        </div>
        <Outlet/>
      </div>
    </div>
  );
};

export default AnotherLogin;
