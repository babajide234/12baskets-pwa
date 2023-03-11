import React from 'react'
import {
  BiUserCircle,
} from 'react-icons/bi';

import {
  BsShieldShaded
} from 'react-icons/bs';

const Sidebar = () => {
  return (
    <div className=" h-screen w-full bg-primary absolute top-0 left-0 -z-10 py-24 px-10 ">
      <div className=" h-full flex flex-col justify-between items-start">
        <ul className=" flex flex-col ">
          <li className=' text-lg text-default font-semibold py-5 border-b border-solid border-slate-50 last-of-type:border-b-0 flex items-center '> <BiUserCircle/> Profile </li>
          <li className=' text-lg text-default font-semibold py-5 border-b border-solid border-slate-50 last-of-type:border-b-0 flex items-center '> orders</li>
          <li className=' text-lg text-default font-semibold py-5 border-b border-solid border-slate-50 last-of-type:border-b-0 flex items-center '>  offer and promo</li>
          <li className=' text-lg text-default font-semibold py-5 border-b border-solid border-slate-50 last-of-type:border-b-0 flex items-center '>  Privacy policy</li>
          <li className=' text-lg text-default font-semibold py-5 border-b border-solid border-slate-50 last-of-type:border-b-0 flex items-center '>  Security </li> 
        </ul>

        <button className=' text-lg text-default font-semibold'>Sign-out</button>
      </div>
    </div>
  )
}

export default Sidebar