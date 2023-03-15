import React, { useEffect } from 'react'
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

const TopNav = () => {
  const toggleSidebar = useAppStore((state) => state.toggleSidebar);
  const cart = useCartStore((state) => state.cart);
  const token = useUserStore(state => state.token)
  const getCart = useCartStore(state=> state.getCart);


  useEffect(() => {
    const data = {
      token: token,
      from: "",
      to: ""
    }
    getCart(data);
}, [])
  // const values = {
  //   token,
  //   from:"",
  //   to:""
  // }
  // const { data , loading, error} = useFetch('order/cart',values);

  // if (!loading){
  //   console.log("cart",cart);
  // } 

  let cartNumber = cart && cart.quantity;


  
  return (
    <div className=" fixed top-0 left-0 px-10 py-2 w-full z-30 bg-default">
        <ul className=" flex justify-between items-center">
            <li onClick={() => toggleSidebar()}  className=" text-2xl font-bold text-gray-500 w-14 h-14 rounded-full flex justify-center items-center "><HiMenuAlt1/></li>
            <li className=" relative text-2xl font-bold text-gray-500 w-14 h-14 rounded-full flex justify-center items-center ">
              <Link to={'/cart'}>
                <BsCart2/>
              </Link>
              <span className=" bg-primary w-5 h-5 rounded-full absolute text-white flex justify-center items-center text-xs top-1 right-1">{cartNumber}</span>
            </li>
        </ul>
    </div>
  )
}

export default TopNav