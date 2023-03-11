import React from 'react'
import { Link, NavLink  } from 'react-router-dom'
import { 
    TiHome, 
    TiHeartOutline,
    TiUserOutline
 } from 'react-icons/ti';
import { 
    AiOutlineUser
 } from 'react-icons/ai';
import { 
    VscHistory
 } from 'react-icons/vsc';
const MobileNav = () => {
  return (
    <div className=" fixed bottom-0 left-0 px-10 z-30 py-2 w-full bg-default">
        <ul className=" flex justify-between">
            <li className=""><Link to='/shop'className=" text-2xl font-bold text-gray-500 w-14 h-14 rounded-full flex justify-center items-center"><TiHome/></Link></li>
            <li className=""><Link to='/saved'className=" text-2xl font-bold text-gray-500 w-14 h-14 rounded-full flex justify-center items-center"><TiHeartOutline/></Link></li>
            <li className=""><Link to='/profile'className=" text-2xl font-bold text-gray-500 w-14 h-14 rounded-full flex justify-center items-center"><AiOutlineUser/></Link></li>
            <li className=""><Link to='/history'className=" text-2xl font-bold text-gray-500 w-14 h-14 rounded-full flex justify-center items-center"><VscHistory/></Link></li>
        </ul>
    </div>
  )
}

export default MobileNav