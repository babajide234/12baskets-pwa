import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { 
  FaTrash,
  FaRegHeart
} from 'react-icons/fa';

export const ProductCards = ({src,title,price}) => {
  return (
    <Link to="/product/1" className=" w-[200px] h-[250px] rounded-[30px] shadow-card relative px-6 pb-5 text-center bg-white flex flex-col justify-end ml-[34px] mt-20 mb-20">
        <div className={`w-[160px] h-[160px] rounded-full bg-slate-500 absolute top-[-17%] left-[23px] bg-[url(${src})] bg-cover bg-center`}></div>
        <h2 className=" text-xl font-extralight capitalize mt-[75px]">{title}</h2>
        <h3 className=" text-primary font-bold text-lg mt-2 ">{price}</h3>
    </Link>
  )
}

export const CartCards = ({ item })=>{
  const [showButtons, setShowButtons] = useState(false);

  const handleSwipe = (event, info) => {
    if (info.offset.x < -50) {
      setShowButtons(true);
    } else {
      setShowButtons(false);
    }
  };

  const handleFavorite = () => {
    // TODO: implement favorite functionality
  };

  const handleDelete = () => {
    // TODO: implement delete functionality
  };
  return (
    <div className=" relative">
      <motion.div
        // className="bg-white rounded-md shadow-md p-4 relative overflow-hidden"
        className=" relative w-11/12 mx-auto rounded-[20px] bg-white py-3 px-5 flex items-center"
        animate={{ x: showButtons ? -140 : 0 }}
        onPan={handleSwipe}
      >
        {/* <div className="flex items-center">
          <div className="w-20 h-20 bg-gray-200 rounded-md mr-4"></div>
          <div className="flex-grow">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-500">{item.description}</p>
          </div>
          <div className="text-gray-500 text-right">
            <span className="block font-semibold">${item.price}</span>
            <span className="block text-sm">Qty: {item.quantity}</span>
          </div>
        </div> */}
        <div className="">
          <img src={item.src} alt="" className=' w-[100px] rounded-full ' />
        </div>
        <div className=" pl-5">
          <h2 className=" text-[17px] font-bold capitalize">Chairmans Platter </h2>
          <div className="flex ">
            <h3 className="">#19,000</h3>
          </div>
          <div className=" absolute right-5 bottom-3 bg-primary w-fit text-white rounded-full overflow-hidden flex justify-between items-center">
            <button className=" px-3 py-[2px] text-2xl font-bold">-</button>
            <span>1</span>
            <button className="px-3 py-[2px] text-2xl font-bold">+</button>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="absolute top-0 right-5 h-full flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: showButtons ? 1 : 0 }}
      >
        <button
          className="flex items-center justify-center w-[45px] h-[45px] rounded-full bg-[#DF2C2C] text-white mr-5 font-bold text-xl"
          onClick={handleFavorite}
        ><FaRegHeart/></button>
        <button
          className="flex items-center justify-center w-[45px] h-[45px] rounded-full bg-[#DF2C2C] text-white font-bold text-xl"
          onClick={handleDelete}
        >
          <FaTrash/>
        </button>
      </motion.div>
    </div>
  )
}

export const CardContent = ({title,children})=>{
  return(
    <div className=" flex flex-col mb-10 ">
      <div className=" flex justify-between mb-6">
        <h3 className=" font-thin text-xl capitalize">{title}</h3>
      </div>
      <div className=" bg-white w-full mx-auto px-[30px] py-[25px] rounded-[20px] flex flex-col">
        {children}
      </div>
    </div>
  )
}