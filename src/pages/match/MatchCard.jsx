import React from "react";
import { useNavigate } from "react-router-dom";
// import "./MatchCard.scss";

const MatchCard = ({ match }) => {
  const { team1, team2, match_date,match_time, place,event } = match;
  const defaultNOImage = "https://th.bing.com/th/id/OIP.Y3_8ksyC3cn6yeQP2-zShQHaHa?rs=1&pid=ImgDetMain"

  const navigate = useNavigate();
  return (
    <div className="match-card">
        <div className="left side team-box">
        <div className="team-details">
            <img src={team1?.logo || defaultNOImage} alt={team1?.name} className="team-logo" />
            <p className="team-name">{team1.name}</p>
          </div>

        </div>
        <div className="middle side">
          <p>{event?.title}</p>
            <h2>Vs</h2>
            <div className="match-details">
            <p> Match on {match_date} at {match_time}</p>
            <p><strong>Location:</strong> {place}</p>
            </div>
            <div>
            <button className="leaderboard_button" onClick={()=>navigate(`/match/${match?.id}`)}>View Match</button>
            {/* <button className="leaderboard_button outline">View Details</button> */}
            </div>

        </div>


        <div className="right side team-box">

        <div className="team-details">
            <img src={team2?.logo || defaultNOImage} alt={team2?.name} className="team-logo" />
            <p className="team-name">{team2?.name}</p>
          </div>
        </div>

    </div>
  );
};

export default MatchCard;
