import React, { useState } from 'react'
import LoadingPageLayout from '../../layouts/LoadingPageLayout'
import NewsCard from '../news/NewsCard';
import PhotoGallery from '../../components/elements/PhotoGallery';
import SponserBanner from '../../components/global/SponserBanner';
import MatchCard from '../match/MatchCard';
import { Link } from 'react-router-dom';


interface fetchType{
    data:any | null,
    pagination:number,
}
const SponserPage:React.FC = () => {
    const [fetchedData,setFetchedData] = useState<fetchType>({
        data:null,
        pagination:1,
    });
    let url:string = `${import.meta.env.VITE_API_URL}/api/sponsers/`
  return (
    <LoadingPageLayout apiUrl={url} isResponseArray setFetchedData={setFetchedData}>
        <div className="team_page_container">
        <h2 className='txt-center mt-10'>Sponsers</h2>
        <div className="team-list">
        {fetchedData.data && fetchedData.data.map((team, index) => (
          <div className="team-card">
            <div className="team-logo">
              <img src={team?.logo} alt={team?.name} />
            </div>
            {/* <p className='short_name'>{team.name}</p> */}

            <div className="team-details">
              <p className='team-name'>{team?.name}</p>
              <p className='sm_text mt-5'>{team?.small_description}</p>
            
            <a href={team?.link} target='_blank'><button className="global_btn">View More </button></a>
            </div>
          </div>
        ))}
      </div> 
        </div>
    </LoadingPageLayout>
  )
}

export default SponserPage