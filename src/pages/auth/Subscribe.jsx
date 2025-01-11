import React from 'react'

const Subscribe = () => {
  return (
    <div className="login-card">
          <h2>Subscribe to our Side</h2>
          {/* <img src={'https://picsum.photos/200'} alt="Player" className="player-image" /> */}
          <form>
            <div className="input-group">
              <input
                type="text"
                placeholder="Email Address"
                className="login-input"
              />
            </div>

            <p className='sm_text'>Get Notifications and Mails about match updates and Scores</p>

            <button type="submit" className="login-btn">
              Subscribe
            </button>
          </form>
        </div>
  )
}

export default Subscribe