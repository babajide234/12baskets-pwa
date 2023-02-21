import React from 'react'

export const ProductCards = ({src,title,price}) => {
  return (
    <div className=" w-[200px] h-[220px] rounded-[30px] shadow-card relative px-6 pt-20 text-center">
        <div className={`w-[100px] h-[100px] rounded-full bg-slate-500 absolute top-[-17%] left-[50px] bg-[url(${src})] bg-cover bg-center`}></div>
        <h2 className=" text-xl font-extralight tracking-widest capitalize">{title}</h2>
        <h3 className=" text-primary font-bold text-lg mt-4">{price}</h3>
    </div>
  )
}
