import React from 'react'
import { NavLink  } from 'react-router-dom'

import { TiHome,TiHeartOutline} from 'react-icons/ti';
import { FiSettings } from 'react-icons/fi';
import { CgShoppingBag } from 'react-icons/cg';
import { RiNotification2Line } from 'react-icons/ri';
import { BsCart2 } from 'react-icons/bs';

const MobileNav = () => {
  return (
    <div className=" fixed bottom-0 left-0 px-4 z-30 py-2 w-full bg-default">
        <ul className=" flex justify-between">
            <li className="">
              <NavLink to='/shop' 
                className={
                  ({ isActive, isPending }) => 
                     isActive ? 'text-2xl font-bold text-primary w-14 h-14 rounded-full flex justify-center items-center'
                     :'text-2xl font-bold text-gray-500 w-14 h-14 rounded-full flex justify-center items-center'
                }
              ><TiHome/></NavLink>
            </li>
            <li className="">
              <NavLink to='/saved' 
              className={
                ({ isActive, isPending }) => 
                   isActive ? 'text-2xl font-bold text-primary w-14 h-14 rounded-full flex justify-center items-center'
                   :'text-2xl font-bold text-gray-500 w-14 h-14 rounded-full flex justify-center items-center'
              }
              ><TiHeartOutline/></NavLink>
            </li>
            <li className="">
              <NavLink to='/shop' className=" text-2xl font-bold text-gray-500 w-14 h-14 rounded-full flex justify-center items-center bg-primary text-white"><CgShoppingBag/></NavLink>
            </li>
            <li className="">
              <NavLink to='/cart' 
              className={
                ({ isActive, isPending }) => 
                   isActive ? 'text-2xl font-bold text-primary w-14 h-14 rounded-full flex justify-center items-center'
                   :'text-2xl font-bold text-gray-500 w-14 h-14 rounded-full flex justify-center items-center'
              }
              ><BsCart2/></NavLink>
            </li>
            <li className="">
              <NavLink to='/profile' 
                className={
                  ({ isActive, isPending }) => 
                     isActive ? 'text-2xl font-bold text-primary w-14 h-14 rounded-full flex justify-center items-center'
                     :'text-2xl font-bold text-gray-500 w-14 h-14 rounded-full flex justify-center items-center'
                }
                ><FiSettings/></NavLink>
            </li>
        </ul>
    </div>
  )
}

export default MobileNav