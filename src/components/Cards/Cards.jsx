import React from 'react'

export const ProductCards = ({src,title,price}) => {
  return (
    <div className=" w-[220px] h-[270px] rounded-[30px] shadow-card relative px-6 pt-32 text-center">
        <div className={`w-[164px] h-[164px] rounded-full bg-slate-500 absolute top-[-17%] left-[30px] bg-[url(${src})] bg-cover bg-center`}></div>
        <h2 className=" text-2xl font-extralight tracking-widest capitalize">{title}</h2>
        <h3 className=" text-primary font-bold text-xl mt-4">{price}</h3>
    </div>
  )
}
