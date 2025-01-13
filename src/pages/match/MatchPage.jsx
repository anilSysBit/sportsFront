import React, { useEffect, useState } from "react";
import MatchCard from "./MatchCard";
import axios from "axios";

const MatchesTable = () => {

  const [fetchedData,setFetchedData] = useState({
    data:null,
    total_pages:1,
})
    const matches = [
        {
            team1: {
              name: "Football Club Barcelona",
              logo: "https://th.bing.com/th/id/OIP.a0x0C66_9dQvU2yNfMislwHaEK?rs=1&pid=ImgDetMain"
            },
            team2: {
              name: "Real Madrid",
              logo: "https://th.bing.com/th/id/OIP.SoS_0RektEmmvTCKgiApggHaEo?rs=1&pid=ImgDetMain"
            },
            matchDate: "2024-12-10",
            location: "Stadium XYZ"
          },
          {
            team1: {
              name: "Football Club Barcelona",
              logo: "https://th.bing.com/th/id/OIP.N3wnei12fZYg4yI504ZetgHaHa?rs=1&pid=ImgDetMain"
            },
            team2: {
              name: "Real Madrid",
              logo: "https://th.bing.com/th/id/R.3f651bec9c2779ea67121f123d71c11a?rik=P%2bwe67dLq8DdrQ&pid=ImgRaw&r=0"
            },
            matchDate: "2024-12-10",
            location: "Stadium XYZ"
          },
          {
            team1: {
              name: "Football Club Barcelona",
              logo: "https://th.bing.com/th/id/OIP.SoS_0RektEmmvTCKgiApggHaEo?rs=1&pid=ImgDetMain"

            },
            team2: {
              name: "Real Madrid",
              logo: "https://th.bing.com/th/id/OIP.Y3_8ksyC3cn6yeQP2-zShQHaHa?rs=1&pid=ImgDetMain"

            },
            matchDate: "2024-12-10",
            location: "Stadium XYZ"
          }
    ]
  const match = {
    team1: {
      name: "Football Club Barcelona",
      logo: "https://th.bing.com/th/id/OIP.a0x0C66_9dQvU2yNfMislwHaEK?rs=1&pid=ImgDetMain"
    },
    team2: {
      name: "Real Madrid",
      logo: "https://th.bing.com/th/id/OIP.SoS_0RektEmmvTCKgiApggHaEo?rs=1&pid=ImgDetMain"
    },
    matchDate: "2024-12-10",
    location: "Stadium XYZ"
  }


  const fetchMatchList =async(id)=>{
    try{
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/matches/`)
        setFetchedData({
            data:response.data,
            total_pages:1,
        })
        console.log('Match Response',response)
    }catch(error){
        console.log(error)
        
    }

}

useEffect(()=>{
        fetchMatchList()
    
},[])
  return (
    <div className="match_listing page_container">
        <h2 className="txt-center">Matches</h2>
        {fetchedData.data && fetchedData.data.map((match,index)=>{
            return(
                <MatchCard match={match} key={index}/>
            )
        })}
    </div>
  );
};

export default MatchesTable;
