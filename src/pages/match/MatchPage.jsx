import React, { useEffect, useState } from "react";
import MatchCard from "./MatchCard";
import axios from "axios";
import NoData from "../../components/global/NoData";
import LoadingPageLayout from "../../layouts/LoadingPageLayout";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Search } from "@mui/icons-material";

const MatchesTable = () => {

  const [fetchedData,setFetchedData] = useState({
    data:null,
    total_pages:1,
    error:{}
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

  const apiData = {
    url:`${import.meta.env.VITE_API_URL}/api/matches/`,
  }
  
  const [refresh,setRefresh] = useState(true);
  const [searchTerm,setSearchTerm] = useState('');

  const navigate = useNavigate();
  const handleSearch =()=>{
    if(searchTerm){
      navigate(`/matches?search=${searchTerm}`)
    }else{
      navigate('/matches');
    }
    setRefresh(!refresh)

  }
  
  return (
    <LoadingPageLayout apiUrl={apiData?.url} reload={refresh} isResponseArray setFetchedData={setFetchedData}>
      <div className="match_listing">
        <h2 className="txt-center">Matches</h2>
        <div className="filter_box">
        <input type="search" placeholder="Search" onChange={e=>setSearchTerm(e.target.value)} value={searchTerm}/>
        <button className="global_btn" onClick={handleSearch}><Search/></button>
        </div>
        {(fetchedData.data && fetchedData.data.length > 0)  && fetchedData.data.map((match,index)=>{
            return(
                <MatchCard match={match} key={index}/>
            )
        })}
      
    </div>
    </LoadingPageLayout>
  );
};

export default MatchesTable;
