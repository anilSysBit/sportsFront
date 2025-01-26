import React, { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainNav from './components/global/VisitorNav'
import LoginBoards from './pages/auth/LoginBoards'
import Homepage from './pages/Homepage'
import TeamBoard from './components/svgs/TeamBoard'
import axios from 'axios'
import AnotherLogin from './pages/auth/AnotherLogin'
import EventLayout from './layouts/EventLayout'
import MatchesTable from './pages/match/MatchPage'
import TeamList from './pages/team/TeamList'
import EventView from './pages/event/EventView'
import Login from './pages/auth/Login'
import VerifyEmail from './pages/auth/VerifyEmail'
import OtpValidation from './pages/auth/OtpValidation'
import ChangePassword from './pages/auth/ChangePassword'
import MatchView from './pages/match/MatchView'
import Subscribe from './pages/auth/Subscribe'
import RegisterTeam from './pages/auth/RegisterTeam'
import ThankPage from './pages/auth/ThankPage'
import Footer from './components/global/Footer'
import NewsBox from './pages/news/NewsBox'
import SponserPage from './pages/sponsers/SponserPage'
import RecentNewsPage from './pages/news/RecentNewsPage'
import SponserBanner from './components/global/SponserBanner'
import PrivacyPolicy from './pages/legal/PrivacyPolicy'
import NewsDetail from './pages/news/NewsDetail'

const App = () => {

  return (
      <BrowserRouter>
        <MainNav/>
          <Routes>
                <Route path="subscribe" element={<AnotherLogin/>}
                
                >
                  <Route path='' element={<Subscribe/>}/>
                </Route>

                <Route path="register" element={<AnotherLogin/>}
                
                >
                  <Route path='' element={<RegisterTeam/>}/>
                  <Route path='success' element={<ThankPage/>} />
                </Route>
              <Route path='/join-now' element={<AnotherLogin/>}>
                <Route path='' element={<Login/>}/>
                <Route path='forgot-password' element={<VerifyEmail/>}/>
                <Route path='otp-validation' element={<OtpValidation/>}/>
                <Route path='change-password' element={<ChangePassword/>}/>
              </Route>
              <Route path='/events' element={<EventLayout/>} />
              <Route path='/event/:event_id' element={<EventView/>}/>
              <Route path='' element={<Homepage/>} />
              <Route path='teams' element={<TeamList/>}/>
              <Route path='jersey/:team_id' element={<TeamBoard/>}/>
              <Route path='matches' element={<MatchesTable/>}/>
              <Route path='/match/:match_id/' element={<MatchView/>}/>


              <Route path='/news' element={<NewsBox/> }/>
              <Route path='/news/:news_id' element={<NewsDetail/> }/>
              <Route path='/sponsers' element={<SponserPage/> }/>
              <Route path='/privacy-and-policy' element={<PrivacyPolicy/>}/>
          </Routes>
           <SponserBanner/>
          <Footer/>
      </BrowserRouter>
  )
}

export default App