import React, { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainNav from '../components/global/VisitorNav'
import LoginBoards from '../pages/auth/LoginBoards'
import Homepage from '../pages/Homepage'
import TeamBoard from '../components/svgs/TeamBoard'
import axios from 'axios'
import AnotherLogin from '../pages/auth/AnotherLogin'
import EventLayout from './EventLayout'
// import UpcomingMatches from '../pages/match/MatchPage'
import MatchesTable from '../pages/match/MatchPage'
import TeamList from '../pages/team/TeamList'

const VisitorLayout = () => {
  const role = 'visitor_layout'
  const [userRole,setUserRole] = useState('visitors');
  const validateUser =async()=>{
    
    try{
      const access_token = localStorage.getItem('access_token');
      const resonse = await axios.post(`${import.meta.env.VITE_API_URL}/api/user/validate/`,{},{
        headers:{
          'Authorization': `Bearer ${access_token}`
        }
      })

      const data = {
        status:200,
        login:true,
        userRole:1,
      }
      
    }catch(error){
      console.log(error)
    }
  }

  const findDefaultRoute =()=>{
    if(userRole == 'team'){
      return <Route path="" element={<Homepage/>} />
    }
  }
  return (
      <BrowserRouter>
        <MainNav/>
          <Routes>
            {findDefaultRoute()}
              <Route path='/join-now' element={<AnotherLogin/>}/>
              <Route path='/events' element={<EventLayout/>} />
              <Route path='' element={<Homepage/>} />
              <Route path='teams' element={<TeamList/>}/>
              <Route path='jersey/:team_id' element={<TeamBoard/>}/>
              <Route path='matches' element={<MatchesTable/>}/>

        
          </Routes>
      </BrowserRouter>
  )
}

export default VisitorLayout