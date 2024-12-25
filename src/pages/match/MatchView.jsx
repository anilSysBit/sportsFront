import { CalendarMonth, LocationOn, Schedule } from '@mui/icons-material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { formatDateTime } from '../../utils/date';

const MatchView = () => {
    const [fetchedData,setFetchedData] = useState({
        data:null,
    })

    const [teamplayers,setTeamPlayers] = useState({
        team1:null,
        team2:null,
    })
    const param = useParams();
    const match_id = param.match_id


    const players = [
        { id: 1, name: 'John Doe', jersey_no: 10, designation: 'Forward', is_active: true },
        { id: 2, name: 'Jane Smith', jersey_no: 8, designation: 'Midfielder', is_active: false },
        { id: 3, name: 'Sam Wilson', jersey_no: 5, designation: 'Defender', is_active: true },
      ];
    
    const fetchMatchData =async()=>{
        try{
          const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/match/${match_id}/`)
          setFetchedData(prev=>({
            ...prev,
            data:response.data
          }))

          console.log(response)
        }catch(error){
          console.log(error)
        }
      }


      const fetchMatchPlayers =async(pos,team_id)=>{
        try{
          const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/match/${match_id}/players/${team_id}`)
          setTeamPlayers(prev=>({
            ...prev,
            [`team${pos}`]:response.data
          }))

        //   console.log('players data ',response)
        }catch(error){
          console.log(error)
        }
      }
      const match = fetchedData?.data
      const team1 = fetchedData?.data?.team1
      const team2 = fetchedData?.data?.team2
      const event = fetchedData?.data?.event

    useEffect(()=>{
        fetchMatchData();
    },[])

    useEffect(()=>{
        if(fetchedData.data){
            // setInterval(()=>{
                fetchMatchPlayers(1,team1?.id)
                fetchMatchPlayers(2,team2?.id)
            // },5000)
        }
    },[fetchedData.data])

  return (
    <div className="main_page_container match_page">
        
    <div className="event_description">
        <h2  className="txt-center">Event - Event Title</h2>
    </div>

    <div className="match_vs_box">
        <div className="vs_box">
            <p className="vs_text">Vs</p>
        </div>
        <div className="team team1">
            <div className="detail">
                <div className="avatar">
                    <img className='avatar' src={team1?.logo || "https://picsum.photos/100"} alt=""/>
                    
                </div>
                <p>{team1?.name}</p>
            </div>
            <div className="score">{teamplayers?.team1?.total_goals}</div>
        </div>
        <div className="team team2">
            <div className="score right">{teamplayers?.team2?.total_goals}</div>
            <div className="detail">
                <p>{team2?.name}</p>
            <div className="avatar">
                <img className='avatar' src={team2?.logo || "https://picsum.photos/101"} alt=""/>

            </div>
            </div>
        </div>
    </div>
{/* 
    <div className="timer-container">
        <p>Match Start After</p>
        <div id="timer" className="timer_box timer"></div>
    </div> */}
    <div className="match_details">
        <div className="holder">
            <p>
                Match Status - <span className={`event_status ${match?.status}`}>{match?.status}</span>
                </p>
        </div>
        <div className="holder">
            <span className="icon material-symbols-outlined">
                <CalendarMonth/>
                </span>
                <p>Match on {formatDateTime(`${match?.match_date}T${match?.match_time}`,false,true)}</p>
        </div>

        <div className="holder">
            <span className="icon material-symbols-outlined">
                <LocationOn/>
                </span>
                <p>Match Location is {event?.default_address}</p>
    
                {/* <p>Match area - {{match.place}}</p> */}

        </div>


        <div className="holder">
            <span className="icon material-symbols-outlined">
                <Schedule/>
                </span>
                <p>Match Duration : {event?.match_duration} </p>
        </div>


        {/* <button className="global_btn secondary">View Match Details</button> */}
    </div>



    <div className="player_details">
        {[1,2].map((team,index)=>{
            return(
                <div className="team">
        <table className="responsive-table">
      <thead>
        <tr>
          <th>SN</th>
          <th>NAME</th>
          <th>POSITION</th>
          <th>GOAL</th>
          <th>FALLS</th>
          <th>ACTIVE</th>
        </tr>
      </thead>
      <tbody>
        {teamplayers[`team${team}`]?.players && teamplayers[`team${team}`].players.map((player, index) => (
          <tr key={player?.id || index}>
            <td>{index + 1}</td>
            <td>
              {player?.name} - {player?.jersey_no}
            </td>
            <td>{player?.designation}</td>
            <td>{player?.goal_count}</td>
            <td>{player?.foul_count}</td>
            <td style={{ textAlign: 'center' }}>
              <span
                className={`verification ${
                  player?.is_active ? 'verified' : ''
                } material-symbols-outlined`}
              >
                {player?.is_active ? 'Playing' : 'Extra'}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
        </div>
            )
        })}
    </div>   
    </div>
  )
}

export default MatchView