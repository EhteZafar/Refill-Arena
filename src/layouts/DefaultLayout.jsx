import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from '../components/layout/Topbar'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const DefaultLayout = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default DefaultLayout