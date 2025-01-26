import React from 'react'
import LandingPage from '../components/home/LandingPage'
import About from '../components/home/About'
import NewsBox from './news/NewsBox'
import RecentNewsPage from './news/RecentNewsPage'
import SubscribeBox from '../components/global/SubscribeBox'
import SponserBanner from '../components/global/SponserBanner'
// import SimpleSlider from '../components/elements/CustomSlider'

const Homepage = () => {

  
  return (
    <>
        <LandingPage/>
        <About/>
        {/* <NewsBox onFront={true}/> */}
        <RecentNewsPage/>
        {/* <SponserBanner/> */}
        <SubscribeBox/>
        </>
  )
}

export default Homepage