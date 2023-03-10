import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import Buttons from '../components/buttons/Buttons'
import PageNav from '../components/Nav/PageNav'
import { motion, AnimatePresence } from 'framer-motion'

const SideLAyout = () => {
    let { query } = useParams();
  return (
    <AnimatePresence>
      <motion.div 
        initial={{ x: 2000 }}
        animate={{ x: 0 }}
        transition={{ duration: .7 }}
        className=" relative h-screen w-full ">
          <PageNav/>
          <div className=" mt-14 h-screen py-10 flex flex-col bg-default">
              <Outlet/>
          </div>
        
      </motion.div>
    </AnimatePresence>
  )
}

export default SideLAyout