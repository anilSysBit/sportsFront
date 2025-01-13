import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { formatDateTime } from '../../utils/date';

const EventView = () => {
  const [fetchedData,setFetchedData] = useState(null)

    const oteam = {
        name: 'The Warriors',
        email: 'warriors@example.com',
        is_verified: true,
        banner: 'https://th.bing.com/th/id/OIP.M24CMUk9pgKAZgXZofFr4gHaCH?rs=1&pid=ImgDetMain',
        logo: 'https://th.bing.com/th/id/OIG1.egQEJxg7JTBbpWL.xSuQ?pid=ImgGn'
      };

      const team =  oteam
      const params = useParams()

      const event_id = params.event_id

      

      const fetchEventData =async()=>{
        try{
          const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/event/${event_id}/`)
          setFetchedData(response.data)

          console.log(response)
        }catch(error){
          console.log(error)
        }
      }

      const teams = fetchedData?.event_teams
      const event = fetchedData

      // console.log('teams',teams)

      const navigate = useNavigate();
      useEffect(()=>{
        fetchEventData();
      },[])
    return(
        <div className="user_profile seller_profile_container event_view_container">
        <div className="seller_profile_sm">
          <div className="banner_container">
            <div 
              className="img_container" 
              style={{ 
                backgroundImage: `url(${fetchedData?.banner ? fetchedData?.banner : 'https://th.bing.com/th/id/OIP.M24CMUk9pgKAZgXZofFr4gHaCH?rs=1&pid=ImgDetMain'})` 
              }}
            ></div>
  
            <div className="profile_picture">
              <div className="img_box">
                {fetchedData?.logo ? (
                  <img src={fetchedData?.logo} alt="Team Logo" />
                ) : (
                  <img src="https://th.bing.com/th/id/OIG1.egQEJxg7JTBbpWL.xSuQ?pid=ImgGn" alt="Default Logo" />
                )}
              </div>
              
              <div className="details">
                <h2>
                  {fetchedData?.title}
                </h2>
                {/* <p>{team.email}</p> */}
              </div>
            </div>
          </div>

          <div className="event_detail_box">
            <div className="sm">
              <div className="data_table">
                <tr>
                  <td>Status</td>
                  <td><span className={`event_status ${event?.status}`}>{event?.status}</span></td>
                </tr>
              <tr>
                <td>Registration Date</td>
                <td>{formatDateTime(event?.registration_start_date,false,true)}  to {formatDateTime(event?.registration_end_date,false,true)}</td>
              </tr>
              <tr>
                <td>Event Date</td>
                <td>{formatDateTime(event?.event_start_date,false,false)}</td>
              </tr>
              <tr>
                <td>Match Duration</td>
                <td>{event?.match_duration}</td>
              </tr>

              <tr>
                <td>Entry Fee</td>
                <td>Rs. {event?.entry_fee}</td>
              </tr>

              <tr>
                <td>Age Limit</td>
                <td>Under {event?.event_age_limit} Year</td>
              </tr>
              <tr>
                <td>Default Address</td>
                <td>{event?.province?.name}, {event?.district?.name}, {event?.municipality?.name}, {event?.area}</td>
              </tr>

              <div className="button_groups">
                {/* {event?.status == 'Initiated' && <button className='global_btn'>Apply as Team</button>} */}
                <button className="global_btn outline" onClick={()=>navigate(`/matches?event=${event?.id}/`)}>View Matches</button>
              </div>
              </div>

            </div>
          </div>

          <div className="registered_team_list">
            <h2>Registered Teams ({teams?.length})</h2>
            <table className="responsive-table">
              <thead>
                <tr>
                  <th>SN</th>
                  <th>Tag</th>
                  <th>Team</th>
                  {/* <th>Action</th> */}
                </tr>
              </thead>

              <tbody>
                {teams && teams.map((elem,index)=>{
                  return(
                    <tr key={index} onClick={()=>{navigate(`/jersey/${elem?.id}`)}}>
                      <td>{index+1}</td>
                      <td>{elem?.short_name}</td>
                      <td> 
                        <div className="td_detail">
                          <div className="avatar">
                          <img className='avatar' src={elem?.logo || `https://picsum.photos/200/?random=${index}`} alt="" />
                          </div>
                          {elem?.name}
                        </div>
                        </td>
                      {/* <td></td> */}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
};

export default EventView;
