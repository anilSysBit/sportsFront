import React from 'react';
import { Link } from 'react-router-dom';
import LandImage from '/images/landimage.png'


const LandingPage = () => {
  return (
    <>
    <div className="homepage">
      <section>
        <h1>
          <div className="wrapper">
            <div className="circle"></div>
            <div className="shadow"></div>
          </div>
          2025<br /><span>Game Plan Nepal</span>
        </h1>
        <p>
          Champions' empowerment, excellence nurtured <br />
          - Welcome to Game Plan Nepal, where dedication leads to success.
        </p>

        <Link to="/events?type=1">
          <button className="leaderboard_button">View Ongoing Events</button>
        </Link>
      </section>

      <div className="goal_img">
        <img src={LandImage} alt="Football" />
      </div>

    </div>
</>
  );
};

export default LandingPage;
