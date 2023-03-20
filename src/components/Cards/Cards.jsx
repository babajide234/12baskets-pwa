import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { 
  FaTrash,
  FaRegHeart
} from 'react-icons/fa';

export const ProductCards = ({src,title,price,id}) => {
  return (
    <Link to={`/product/${id}`} className=" w-[200px] h-[250px] rounded-[30px] shadow-card relative px-6 pb-5 text-center bg-white flex flex-col justify-end ml-[34px] mt-20 mb-20">
        <div className={`w-[160px] h-[160px] overflow-hidden rounded-full  absolute top-[-17%] left-[23px] flex justify-center items-center`}>
          <img src={src} alt="" className=" w-full h-full" />
        </div>
        <h2 className=" text-xl font-extralight capitalize mt-[75px]">{title}</h2>
        <h3 className=" text-primary font-bold text-lg mt-2 ">{price}</h3>
    </Link>
  )
}

export const ProductCard = ({src,title,price,id}) => {
  return (
    <Link 
      to={`/product/${id}`} 
      className=" w-[156px] h-[202px] shadow-card p-3 bg-white flex flex-col ml-[34px] mt-5  rounded-lg  ">
        <div className={`overflow-hidden rounded-lg flex justify-center items-center`}>
          <img src={src} alt="" className=" w-full h-full" />
        </div>
        <h3 className=" text-gray-400 text-xs mt-2">Platters</h3>
        <h2 className=" text-sm font-bold capitalize mt-[6px]">{title}</h2>
        <h3 className=" text-primary font-bold text-sm mt-[6px] ">₦ {price}</h3>
    </Link>
  )
}
export const RecommendProductCard = ({src,title,price,id}) => {
  return (
    <Link 
      to={`/product/${id}`} 
      className=" w-[239px] h-[90px] shadow-card p-3 bg-white flex justify-between mr-5 rounded-lg  ">
        <div className={`  w-[64px] h-[64px] bg-slate-200 overflow-hidden rounded-lg flex justify-center items-center`}>
          <img src={src} alt="" className=" w-full h-full" /> 
        </div>
        <div className="flex flex-col justify-center">
          <h2 className=" text-sm font-bold capitalize">Chairmans’s Choice</h2>
          <h3 className=" text-gray-400 text-xs">Platters</h3>
          <h3 className=" text-primary font-bold text-sm ">₦ 3000</h3>
        </div>
    </Link>
  )
}

export const SearchProductCards = ({src,title,price,id}) => {
  return (
    <Link to={`/product/${id}`} className=" w-[150px] h-[200px] rounded-[30px] shadow-card relative px-6 pb-5 text-center bg-white flex flex-col justify-end ">
        <div className={`w-[120px] h-[120px] overflow-hidden rounded-full  absolute top-[-20%] left-[17px] flex justify-center items-center`}>
          <img src={src} alt="" className=" w-full h-full" />
        </div>
        <h2 className=" text-xl font-extralight capitalize mt-[75px]">{title}</h2>
        <h3 className=" text-primary font-bold text-lg mt-2 ">{price}</h3>
    </Link>
  )
}

// export const CartCards = ({ item })=>{
//   const [showButtons, setShowButtons] = useState(false);
  
//   console.log(item)

//   const handleSwipe = (event, info) => {
//     if (info.offset.x < -50) {
//       setShowButtons(true);
//     } else {
//       setShowButtons(false);
//     }
//   };

//   const handleFavorite = () => {
//     // TODO: implement favorite functionality
//   };

//   const handleDelete = () => {
//     // TODO: implement delete functionality
//   };
//   return (
//     <div className=" relative mb-5">
//       <motion.div
//         className=" relative w-11/12 mx-auto rounded-[20px] bg-white py-3 px-5 flex items-center"
//         animate={{ x: showButtons ? -140 : 0 }}
//         onPan={handleSwipe}
//       >
//         <div className="">
//           <img src={item.main_photo ||  'https://api.12basketsfoods.com/files/a8a675761f1be5180a56f8e5298b6281YlObT9ZLVR.webp'} alt={item.name } className=' w-[100px] h-[100px] rounded-full ' />
//         </div>
//         <div className=" pl-5">
//           <h2 className=" text-[17px] font-bold capitalize">{item.name}</h2>
//           <div className="flex ">
//             <h3 className="">{item.amount}</h3>
//           </div>
//           <div className=" absolute right-5 bottom-3 bg-primary w-fit text-white rounded-full overflow-hidden flex justify-between items-center">
//             <button className=" px-3 py-[2px] text-2xl font-bold">-</button>
//             <span>{item.quantity}</span>
//             <button className="px-3 py-[2px] text-2xl font-bold">+</button>
//           </div>
//         </div>
//       </motion.div>
//       <motion.div
//         className="absolute top-0 right-5 h-full flex items-center"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: showButtons ? 1 : 0 }}
//       >
//         <button
//           className="flex items-center justify-center w-[45px] h-[45px] rounded-full bg-[#DF2C2C] text-white mr-5 font-bold text-xl"
//           onClick={handleFavorite}
//         ><FaRegHeart/></button>
//         <button
//           className="flex items-center justify-center w-[45px] h-[45px] rounded-full bg-[#DF2C2C] text-white font-bold text-xl"
//           onClick={handleDelete}
//         >
//           <FaTrash/>
//         </button>
//       </motion.div>
//     </div>
//   )
// }




export const CartCards = ({ item }) => {
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
    <div className="relative mb-5">
      <motion.div
        className="relative w-11/12 mx-auto rounded-[20px] bg-white py-3 px-5 flex items-center"
        animate={{ x: showButtons ? -140 : 0 }}
        onPan={handleSwipe}
        style={{ zIndex: showButtons ? 1 : 0 }}
      >
        <div className="">
          <img
            src={
              item.main_photo ||
              "https://api.12basketsfoods.com/files/a8a675761f1be5180a56f8e5298b6281YlObT9ZLVR.webp"
            }
            alt={item.name}
            className="w-[100px] h-[100px] rounded-full"
          />
        </div>
        <div className="pl-5">
          <h2 className="text-[17px] font-bold capitalize">{item.name}</h2>
          <div className="flex">
            <h3 className="">{item.amount}</h3>
          </div>
          <div className="absolute right-5 bottom-3 bg-primary w-fit text-white rounded-full overflow-hidden flex justify-between items-center">
            <button className="px-3 py-[2px] text-2xl font-bold">-</button>
            <span>{item.quantity}</span>
            <button className="px-3 py-[2px] text-2xl font-bold">+</button>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="absolute top-0 right-5 h-full flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: showButtons ? 1 : 0 }}
        style={{ zIndex: showButtons ? 0 : -1 }}
      >
        <button
          className="flex items-center justify-center w-[45px] h-[45px] rounded-full bg-[#DF2C2C] text-white mr-5 font-bold text-xl"
          onClick={handleFavorite}
        >
          <FaRegHeart />
        </button>
        <button
          className="flex items-center justify-center w-[45px] h-[45px] rounded-full bg-[#DF2C2C] text-white font-bold text-xl"
          onClick={handleDelete}
        >
          <FaTrash />
        </button>
      </motion.div>
    </div>
  );
};


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