import React from 'react'
import {
    BsCart2
} from 'react-icons/bs';
import {
    HiMenuAlt1
} from 'react-icons/hi';
import { Link } from 'react-router-dom';
import useAppStore from '../../store/appSlice';

const TopNav = () => {
  const toggleSidebar = useAppStore(state=> state.toggleSidebar);

  return (
    <div className=" fixed top-0 left-0 px-10 py-2 w-full z-30 bg-default">
        <ul className=" flex justify-between items-center">
            <li onClick={() => toggleSidebar()}  className=" text-2xl font-bold text-gray-500 w-14 h-14 rounded-full flex justify-center items-center "><HiMenuAlt1/></li>
            <li className=" text-2xl font-bold text-gray-500 w-14 h-14 rounded-full flex justify-center items-center ">
              <Link to={'/cart'}>
                <BsCart2/>
              </Link>
            </li>
        </ul>
    </div>
  )
}

export default TopNav