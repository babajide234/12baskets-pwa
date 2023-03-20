import React, { useState,useEffect } from 'react'
import {
    BsCart2
} from 'react-icons/bs';
import {
    HiMenuAlt1
} from 'react-icons/hi';
import { Link } from 'react-router-dom';
import useFetch from '../../api/useFetch';
import useAppStore from '../../store/appSlice';
import useCartStore from '../../store/cartSlice';
import useUserStore from '../../store/userSlice';
import { SearchInput } from '../Inputs';
import { motion } from 'framer-motion';
import { headerVariants } from '../../utils/variants';

const TopNav = () => {
  const toggleSidebar = useAppStore((state) => state.toggleSidebar);
  const cart = useCartStore((state) => state.cart);
  const token = useUserStore(state => state.token)
  const getCart = useCartStore(state=> state.getCart);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 0) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const data = {
      token: token,
      from: "",
      to: ""
    }
    getCart(data);
  }, [])

  let cartNumber = cart && cart.quantity;


  
  return (
    <motion.header
      variants={headerVariants}
      initial="unfixed"
      animate={isHeaderFixed ? 'fixed' : 'unfixed'}
      className="py-6 w-full z-30 bg-default px-4"
    >

        {/* <ul className=" flex justify-between items-center">
            <li onClick={() => toggleSidebar()}  className=" text-2xl font-bold text-gray-500 w-14 h-14 rounded-full flex justify-center items-center "><HiMenuAlt1/></li>
            <li className=" relative text-2xl font-bold text-gray-500 w-14 h-14 rounded-full flex justify-center items-center ">
              <Link to={'/cart'}>
                <BsCart2/>
              </Link>
              <span className=" bg-primary w-5 h-5 rounded-full absolute text-white flex justify-center items-center text-xs top-1 right-1">{cartNumber}</span>
            </li>
        </ul> */}
        <div className="w-full flex justify-between items-center">
          <button onClick={() => toggleSidebar()}  className="text-xl font-bold text-gray-500 w-8 h-8 rounded-full flex justify-center items-center"><HiMenuAlt1/></button>
          <SearchInput/>
          <Link to='/profile' className=' w-8 h-8 rounded-full bg-slate-200'></Link>
        </div>
    </motion.header>
  )
}

export default TopNav