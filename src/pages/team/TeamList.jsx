import axios from 'axios';
import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import LoadingPageLayout from '../../layouts/LoadingPageLayout';


const teams = [
    {
      logo: "https://th.bing.com/th/id/OIP.a0x0C66_9dQvU2yNfMislwHaEK?rs=1&pid=ImgDetMain", 
      name: "Team A",
      id:16,
      totalPlayers: 22,   
      sportsGenre: "Football"
    },
    {
      logo: "https://th.bing.com/th/id/OIP.SoS_0RektEmmvTCKgiApggHaEo?rs=1&pid=ImgDetMain", 
      name: "Team B", 
      totalPlayers: 18, 
      id:17,
      sportsGenre: "Basketball"
    },
    {
      logo: "https://th.bing.com/th/id/OIP.N3wnei12fZYg4yI504ZetgHaHa?rs=1&pid=ImgDetMain", 
      name: "Team C", 
      totalPlayers: 18,
      id:18,
      sportsGenre: "Cricket"
    },

    {
        logo: "https://th.bing.com/th/id/R.3f651bec9c2779ea67121f123d71c11a?rik=P%2bwe67dLq8DdrQ&pid=ImgRaw&r=0", 
        name: "Team C", 
        totalPlayers: 23, 
        id:30,
        sportsGenre: "Cricket"
      },
      {
        logo: "https://th.bing.com/th/id/OIP.Y3_8ksyC3cn6yeQP2-zShQHaHa?rs=1&pid=ImgDetMain", 
        name: "Team C", 
        totalPlayers: 24, 
        id:24,
        sportsGenre: "Cricket"
      },
    // Add more teams here
  ];

  const defaultNOImage = "https://th.bing.com/th/id/OIP.Y3_8ksyC3cn6yeQP2-zShQHaHa?rs=1&pid=ImgDetMain"
  
  const TeamList = () => {


    const [fetchedData,setFetchedData] = useState({
      data:null,
      total_pages:1,
    })



  const apiData = {
    url : `${import.meta.env.VITE_API_URL}/api/teams/`,
  }
    return (
      <LoadingPageLayout apiUrl={apiData.url} isResponseArray setFetchedData={setFetchedData}>
        <div className="team_page_container">
        <h2 className='txt-center mt-10'>Teams</h2>
        <div className="team-list">
        {fetchedData.data && fetchedData.data.map((team, index) => (
          <Link to={`/jersey/${team.id}`} key={index} className="team-card">
            <div className="team-logo">
              <img src={team?.logo || defaultNOImage} alt={team?.name} />
            </div>
            <p className='short_name'>{team.short_name}</p>

            <div className="team-details">
              <p className='team-name'>{team?.name}</p>
              <p className='sm_text mt-5'>Location - {team?.address}</p>
              <p className='sm_text mt-5'>Total Players {team?.total_players}</p>
              <p className='sm_text mt-5'>Click to View More</p>
            </div>
          </Link>
        ))}
      </div>
      </div>
      </LoadingPageLayout>
    );
  };
  
  export default TeamList;