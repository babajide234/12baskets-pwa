import React, {useEffect} from 'react'
import {
    MdArrowBackIosNew
} from 'react-icons/md';
import {
    BsCart2
} from 'react-icons/bs';
import {TiHeartOutline} from 'react-icons/ti'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import useCartStore from '../../store/cartSlice';
import useUserStore from '../../store/userSlice';

const PageNav = () => {
    const location = useLocation();
    const navigate = useNavigate();
    let { productId, query } = useParams();

    const cart = useCartStore(state=> state.cart);
    const getCart = useCartStore(state=> state.getCart);
    const token = useUserStore(state=> state.token);

    // let cartNumber = cart.product.length > 1 ? cart.product.length : 0 


    useEffect(() => {
        const data = {
          token: token,
          from: "",
          to: ""
        }
        getCart(data);
    }, [token,getCart])

    console.log('cart',cart);

  return (
    <div className=" fixed top-0 left-0 px-10 py-5 w-full bg-default z-50">
            {
                !productId && !query  && (
                    <div className=" flex text-center items-center w-full relative">
                        <button onClick={() => navigate('/shop')} className=" text-xl font-bold absolute left-0 top-2  text-gray-900 w-5 h-5"><MdArrowBackIosNew/></button>
                        
                        <h2 className=" capitalize flex-grow text-3xl text font-thin">{ location.pathname.replace('/','') }</h2>
                    </div>
                )
            }
            {
                productId && !query  && (
                    <div className=" flex justify-between text-center items-center w-full relative">
                        <button onClick={() => navigate('/shop')} className=" text-xl font-bold  text-gray-900 w-5 h-5"><MdArrowBackIosNew/></button>
                        {
                            cart != null ? (
                                <button className=" relative text-2xl font-bold text-gray-500 w-14 h-14 rounded-full flex justify-center items-center ">
                                    <Link to={'/cart'}>
                                        <BsCart2/>
                                    </Link>
                                    <span className=" bg-primary w-5 h-5 rounded-full absolute text-white flex justify-center items-center text-[10px] top-1 right-1">{cart.quantity}</span>
                                </button>
                            ) : (
                                <button className=" text-xl font-boldtext-gray-900 w-5 h-5"><TiHeartOutline/></button>
                            )
                        }
                    </div>
                )
            }
            {
                !productId && query && (
                    <div className=" flex text-center items-center w-full relative">
                        <button onClick={() => navigate('/shop')} className=" text-                                                                                                              xl font-bold absolute left-0 top-2  text-gray-900 w-5 h-5"><MdArrowBackIosNew/></button>
                        {/* <h2 className=" capitalize flex-grow text-3xl text font-thin">{ location.pathname.replace('/','') }</h2> */}
                        <input type="text" className=" mx-auto px-4 py-2 bg-default outline-none border-none" value={query} />
                    </div>
                )
            }
    
    </div>
  )
}

export default PageNav