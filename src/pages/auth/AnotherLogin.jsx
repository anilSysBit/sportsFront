import React from "react";
// import "./Login.scss";
// import playerImage from "./player.png"; // Replace with the actual path of the image

import LoginBackground from '../../assets/images/loginteam.png'

const AnotherLogin = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="logo"> {/* Replace with your logo */}
          <img src={LoginBackground} alt="Logo" />
        </div>
        <div className="login-card">
          <h2>Login as Team</h2>
          {/* <img src={'https://picsum.photos/200'} alt="Player" className="player-image" /> */}
          <form>
            <div className="input-group">
              <input
                type="text"
                placeholder="Username or Email"
                className="login-input"
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                placeholder="Password"
                className="login-input"
              />
              <span className="password-icon">👁️</span>
            </div>
            <a href="/forgot-password" className="forgot-password">
              Forgot Password? Click to reset.
            </a>
            <button type="submit" className="login-btn">
              Login
            </button>

            <a href="/forgot-password" className="forgot-password">
              New Team ! Register as New Team
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AnotherLogin;
