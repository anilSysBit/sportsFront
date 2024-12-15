import axios from 'axios';
import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom';


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

    const fetchTeamData=async(id)=>{
      try{
          const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/teams/`)
          setFetchedData({
              data:response.data,
              total_pages:1,
          })
          console.log('team response',response)
      }catch(error){
          console.log(error)
          
      }

  }

  useEffect(()=>{
    fetchTeamData()
  },[])

    return (
      <div className="team_page_container">
        <h2 className='txt-center mt-10'>Teams</h2>
        <div className="team-list">
        {fetchedData.data && fetchedData.data.map((team, index) => (
          <div key={index} className="team-card">
            <div className="team-logo">
              <img src={team?.logo || defaultNOImage} alt={team?.name} />
            </div>
            <div className="team-details">
              <h3 className="team-name">{team?.name}</h3>
              <p className="team-info">Total Players: {team?.total_players}</p>
              {/* <p className="team-info">Sports Genre: {team.sportsGenre}</p> */}
              <Link to={`/jersey/${team?.id}`}><button className="leaderboard_button">Show More</button></Link>
            </div>
          </div>
        ))}
      </div>
      </div>
    );
  };
  
  export default TeamList;