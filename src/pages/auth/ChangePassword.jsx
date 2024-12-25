import React from 'react'

const ChangePassword = () => {
  return (
    <div className="login-card">
    <h2>Change Password</h2>
    {/* <img src={'https://picsum.photos/200'} alt="Player" className="player-image" /> */}
    <form>
      <div className="input-group">
        <input
          type="password"
          placeholder="Create New Password"
          className="login-input"
        />
        <span className="password-icon">👁️</span>
      </div>
      <div className="input-group">
        <input
          type="password"
          placeholder="Retype New Password"
          className="login-input"
        />
        <span className="password-icon">👁️</span>
      </div>
      <button type="submit" className="login-btn">
        Change Password
      </button>

      <a href="/join-now" className="forgot-password">
        Back to Login
      </a>
    </form>
  </div>
  )
}

export default ChangePassword