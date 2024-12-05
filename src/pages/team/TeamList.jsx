import React from 'react'
import { Link } from 'react-router-dom';


const teams = [
    {
      logo: "https://th.bing.com/th/id/OIP.a0x0C66_9dQvU2yNfMislwHaEK?rs=1&pid=ImgDetMain", 
      name: "Team A", 
      totalPlayers: 22, 
      sportsGenre: "Football"
    },
    {
      logo: "https://th.bing.com/th/id/OIP.SoS_0RektEmmvTCKgiApggHaEo?rs=1&pid=ImgDetMain", 
      name: "Team B", 
      totalPlayers: 18, 
      sportsGenre: "Basketball"
    },
    {
      logo: "https://th.bing.com/th/id/OIP.N3wnei12fZYg4yI504ZetgHaHa?rs=1&pid=ImgDetMain", 
      name: "Team C", 
      totalPlayers: 20, 
      sportsGenre: "Cricket"
    },

    {
        logo: "https://th.bing.com/th/id/R.3f651bec9c2779ea67121f123d71c11a?rik=P%2bwe67dLq8DdrQ&pid=ImgRaw&r=0", 
        name: "Team C", 
        totalPlayers: 20, 
        sportsGenre: "Cricket"
      },
      {
        logo: "https://th.bing.com/th/id/OIP.Y3_8ksyC3cn6yeQP2-zShQHaHa?rs=1&pid=ImgDetMain", 
        name: "Team C", 
        totalPlayers: 20, 
        sportsGenre: "Cricket"
      },
    // Add more teams here
  ];
  
  const TeamList = () => {
    return (
      <div className="team_page_container">
        <h2 className='txt-center mt-10'>Teams</h2>
        <div className="team-list">
        {teams.map((team, index) => (
          <div key={index} className="team-card">
            <div className="team-logo">
              <img src={team.logo} alt={team.name} />
            </div>
            <div className="team-details">
              <h3 className="team-name">{team.name}</h3>
              <p className="team-info">Total Players: {team.totalPlayers}</p>
              {/* <p className="team-info">Sports Genre: {team.sportsGenre}</p> */}
              <Link to="/jersey"><button className="leaderboard_button">Show More</button></Link>
            </div>
          </div>
        ))}
      </div>
      </div>
    );
  };
  
  export default TeamList;