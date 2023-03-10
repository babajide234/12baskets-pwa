import React, {useEffect} from 'react'
import {
    MdArrowBackIosNew
} from 'react-icons/md';
import {TiHeartOutline} from 'react-icons/ti'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

const PageNav = () => {
    const location = useLocation();
    const navigate = useNavigate();
    let { productId, query } = useParams();

    useEffect(() => {
        return () => {
            console.log('location',location.pathname);
        };
    }, [location])
  return (
    <div className=" fixed top-0 left-0 px-10 py-5 w-full bg-default z-50">
            {
                !productId && !query  && (
                    <div className=" flex text-center items-center w-full relative">
                        <button onClick={() => navigate(-1)} className=" text-3xl font-bold absolute left-0 top-2  text-gray-900 w-5 h-5"><MdArrowBackIosNew/></button>
                        <h2 className=" capitalize flex-grow text-3xl text font-thin">{ location.pathname.replace('/','') }</h2>
                    </div>
                )
            }
            {
                productId && !query  && (
                    <div className=" flex justify-between text-center items-center w-full relative">
                        <button onClick={() => navigate(-1)} className=" text-xl font-bold  text-gray-900 w-5 h-5"><MdArrowBackIosNew/></button>
                        <button className=" text-xl font-boldtext-gray-900 w-5 h-5"><TiHeartOutline/></button>
                    </div>
                )
            }
            {
                !productId && query && (
                    <div className=" flex text-center items-center w-full relative">
                        <button onClick={() => navigate(-1)} className=" text-3xl font-bold absolute left-0 top-2  text-gray-900 w-5 h-5"><MdArrowBackIosNew/></button>
                        {/* <h2 className=" capitalize flex-grow text-3xl text font-thin">{ location.pathname.replace('/','') }</h2> */}
                        <input type="text" className=" mx-auto px-4 py-2 bg-default outline-none border-none" value={query} />
                    </div>
                )
            }
    
    </div>
  )
}

export default PageNav