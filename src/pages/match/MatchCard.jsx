import React from "react";
// import "./MatchCard.scss";

const MatchCard = ({ match }) => {
  const { team1, team2, matchDate, location } = match;

  return (
    <div className="match-card">
        <div className="left side team-box">
        <div className="team-details">
            <img src={team1.logo} alt={team1.name} className="team-logo" />
            <p className="team-name">{team1.name}</p>
          </div>

        </div>
        <div className="middle side">
            <h2>Vs</h2>
            <div className="match-details">
            <p> Match on {matchDate} at 11:45 AM</p>
            <p><strong>Location:</strong> {location}</p>
            </div>
            <div>
            <button className="leaderboard_button">View Match</button>
            {/* <button className="leaderboard_button outline">View Details</button> */}
            </div>

        </div>


        <div className="right side team-box">

        <div className="team-details">
            <img src={team2.logo} alt={team2.name} className="team-logo" />
            <p className="team-name">{team2.name}</p>
          </div>
        </div>

    </div>
  );
};

export default MatchCard;
