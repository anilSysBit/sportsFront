import React, { useEffect, useState } from 'react'
import { Jersey } from './jersey'
import GroundSvg from './GroundSvg'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const TeamBoard = () => {

    const [fetchedData,setFetchedData] = useState({
        data:null,
        total_pages:1,
    })

    const params = useParams()
    const team_id = params.team_id;


    const GroupWithTeams =({className})=>{
        const playerData = fetchedData?.data?.players && fetchedData.data.players

        const jersey_data ={
            primaryColor:'darkblue',
            secondaryColor:'purple',
            textColor:"white",
            neckLineColor:'white',
            players:[
                { className: "goal_keeper", name: "Goal Keeper", jersey: 1 },
                { className: "defense center-left", name: "Defense", jersey: 2 },
                { className: "defense center-right", name: "Defense", jersey: 3 },
                { className: "defense left", name: "Defense", jersey: 4 },
                { className: "defense right", name: "Defense", jersey: 5 },
                { className: "middle left", name: "Midfield", jersey: 6 },
                { className: "middle right", name: "Midfield", jersey: 7 },
                { className: "front right", name: "Forward", jersey: 8 },
                { className: "front left", name: "Forward", jersey: 9 },
                { className: "front center-left", name: "Forward", jersey: 10 },
                { className: "front center-right", name: "Forward", jersey: 11 }
            ]
        }
          
        return(
            <div className={`team_ground ${className}`}>
                {playerData && playerData.map((elem,index)=>{
                    return(
                    <Jersey className={`ground_jersey ${elem?.position_display?.toLowerCase()}`} name={elem?.name || elem?.name} jersey={elem?.jersey_no} primaryColor={jersey_data.primaryColor} secondaryColor={jersey_data.secondaryColor} textColor={jersey_data.textColor} neckLineColor={jersey_data.neckLineColor}/>
                    )
                })}
            {/* <GroundSvg width={500} height={500}/> */}

            <div className="goal_post"></div>
            <div className="team_area"></div>
            <div className="post_center"></div>
            <div className="ground_center"></div>
            <div className="penalty_point"></div>
            </div>
        )
    }

    const teamList =[1,2,3]


    const TeamPlayerList =()=>{
        const playersData = fetchedData?.data?.players;
        return(
            <table className='responsive-table'>
                <thead>
                    <tr>
                        <th>SN</th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Active</th>
                    </tr>
                </thead>

                <tbody>
                    {playersData && playersData.map((elem,index)=>{
                        return(
                            <tr>
                                <td>{index+1}</td>
                                <td>{elem?.name} ({elem?.jersey_no})</td>
                                <td>{elem?.designation}</td>
                                <td>{elem?.is_active ? 'Y' : 'N'}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }


    const TeamProfileBox =()=>{
        const oteam = {
            name: 'The Warriors',
            email: 'warriors@example.com',
            is_verified: true,
            banner: 'https://th.bing.com/th/id/OIP.M24CMUk9pgKAZgXZofFr4gHaCH?rs=1&pid=ImgDetMain',
            logo: 'https://th.bing.com/th/id/OIG1.egQEJxg7JTBbpWL.xSuQ?pid=ImgGn'
          };

          const team = fetchedData?.data?.team || oteam


        return(
            <div className="user_profile seller_profile_container">
            <div className="seller_profile_sm">
              <div className="banner_container">
                <div 
                  className="img_container" 
                  style={{ 
                    backgroundImage: `url(${team.banner ? team.banner : 'https://th.bing.com/th/id/OIP.M24CMUk9pgKAZgXZofFr4gHaCH?rs=1&pid=ImgDetMain'})` 
                  }}
                ></div>
      
                <div className="profile_picture">
                  <div className="img_box">
                    {team.logo ? (
                      <img src={team.logo} alt="Team Logo" />
                    ) : (
                      <img src="https://th.bing.com/th/id/OIG1.egQEJxg7JTBbpWL.xSuQ?pid=ImgGn" alt="Default Logo" />
                    )}
                  </div>
                  
                  <div className="details">
                    <h2>
                      {team.name} 
                      <span 
                        className={`verification ${team.is_verified ? 'verified' : 'unverified'}`}
                      >
                        {team.is_verified ? 'verified' : 'unverified'}
                      </span>
                    </h2>
                    <p>{team.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }


    const fetchTeamPlayer =async(id)=>{
        try{
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/players/${id}/`)
            setFetchedData({
                data:response.data,
                total_pages:1,
            })
            console.log(response)
        }catch(error){
            console.log(error)
            
        }

    }

    useEffect(()=>{
        if(team_id){
            fetchTeamPlayer(team_id)
        }
    },[])
  return (
    <>
    <TeamProfileBox/>
    <div className='team_box_container'>
        <div className="box box1 player_list_box">
            <TeamPlayerList/>
        </div>
        <GroupWithTeams
            className="box team1"
        />
    </div>
    </>
  )
  
}

export default TeamBoard