import React from 'react'
import { Outlet } from 'react-router-dom'
import MobileNav from '../components/Nav/MobileNav'
import TopNav from '../components/Nav/TopNav'
import Sidebar from '../components/sidebar/Sidebar'
import { motion, AnimatePresence } from "framer-motion";

const MainLayout = () => {
  return (
    <div className="">
      <AnimatePresence>
        {/* <Sidebar/> */}
        <motion.div 
            initial={{ x: 2000 }}
            animate={{ x: 0 }}
            transition={{ duration: .7 }}
            className=" min:h-full w-full bg-default pb-10"
        >
            <TopNav/>
            {/* <div className="flex flex-col bg-default"> */}
                <Outlet/>
            {/* </div> */}
            <MobileNav/>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default MainLayout