import React from 'react'
import LandingPage from '../components/home/LandingPage'
import About from '../components/home/About'
import NewsBox from './news/NewsBox'
import RecentNewsPage from './news/RecentNewsPage'
import SubscribeBox from '../components/global/SubscribeBox'

const Homepage = () => {
  return (
    <>
        <LandingPage/>
        <About/>
        <RecentNewsPage/>
        <SubscribeBox/>
        </>
  )
}

export default Homepage