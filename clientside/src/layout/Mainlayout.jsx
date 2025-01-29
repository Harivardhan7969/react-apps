import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Home from '../pages/Home'
import Trending from '../components/Trending'

const MainLayout = () => {
  return (
    <>
      <Navbar />
      {/* <Home /> */}


      <Outlet />
    </>
  )
}

export default MainLayout