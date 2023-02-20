import React from 'react'
import { Outlet } from 'react-router-dom'
import MobileNav from '../components/Nav/MobileNav'
import TopNav from '../components/Nav/TopNav'

const MainLayout = () => {
  return (
    <div className="relative h-screen w-full px-10 py-14">
        <TopNav/>
        <div className=" mt-3 h-full py-10">
            <Outlet/>
        </div>
        <MobileNav/>
    </div>
  )
}

export default MainLayout