import React from 'react'
import {
    BsCart2
} from 'react-icons/bs';
import {
    HiMenuAlt1
} from 'react-icons/hi';
const TopNav = () => {
  return (
    <div className=" absolute top-0 left-0 px-10 py-2 w-full bg-default">
        <ul className=" flex justify-between  items-center">
            <li className=" text-2xl font-bold text-gray-500 w-14 h-14 rounded-full flex justify-center items-center "><HiMenuAlt1/></li>
            <li className=" text-2xl font-bold text-gray-500 w-14 h-14 rounded-full flex justify-center items-center "><BsCart2/></li>
        </ul>
    </div>
  )
}

export default TopNav