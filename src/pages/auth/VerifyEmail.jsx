import React from 'react'
import { useNavigate } from 'react-router-dom'

const VerifyEmail = () => {

    const navigate = useNavigate();
    const handleSubmitEmailVerification =(event)=>{
        event.preventDefault()
        navigate("/join-now/otp-validation")
    }
  return (
    <div className="login-card">
    <h2>Email to send verification</h2>
    {/* <img src={'https://picsum.photos/200'} alt="Player" className="player-image" /> */}
    <form onSubmit={handleSubmitEmailVerification}>
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter your Email"
          className="login-input"
        />
      </div>
      <button type="submit" className="login-btn">
        Send
      </button>

      <a href="/forgot-password" className="forgot-password">
        Back to Login
      </a>
    </form>
  </div>
  )
}

export default VerifyEmail