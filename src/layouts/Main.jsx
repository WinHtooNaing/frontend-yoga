import React from 'react'
import Navbar from '../pages/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../pages/Footer'

const Main = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}

export default Main