import { motion,AnimatePresence } from 'framer-motion';
import React from 'react'
import logo from '../assets/logo.png'
import Buttons from '../components/buttons/Buttons';

const Landing = () => {
  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      className="bg-hero-bg w-full h-screen bg-cover py-11 px-16 flex flex-col justify-between"
      >
          <div className=" w-full flex flex-col justify-center items-center">
              <img src={logo} alt="" className=" w-36 h-36" />
              <h1 className=" text-3xl text-white font-bold ">Food for Everyone</h1>
          </div>
          <div className=" flex">
              <Buttons
                  type={'default'}
                  to={'/shop'}
              >Get Started</Buttons>
          </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Landing;