import React from 'react'
import { Outlet } from 'react-router-dom'
import MobileNav from '../components/Nav/MobileNav'
import TopNav from '../components/Nav/TopNav'

const MainLayout = () => {
  return (
    <div className="relative h-screen w-full">
        <TopNav/>
        <div className=" mt-14 min:h-screen py-10 flex flex-col">
            <Outlet/>
        </div>
        <MobileNav/>
    </div>
  )
}

export default MainLayout