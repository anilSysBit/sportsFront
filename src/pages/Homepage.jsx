import React from 'react'
import LandingPage from '../components/home/LandingPage'
import About from '../components/home/About'
import NewsBox from './news/NewsBox'
import RecentNewsPage from './news/RecentNewsPage'

const Homepage = () => {
  return (
    <>
        <LandingPage/>
        <About/>
        <RecentNewsPage/>
        </>
  )
}

export default Homepage