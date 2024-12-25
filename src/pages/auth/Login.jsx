import React from 'react'

const Login = () => {
  return (
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
            <a href="/join-now/forgot-password" className="forgot-password">
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
  )
}

export default Login