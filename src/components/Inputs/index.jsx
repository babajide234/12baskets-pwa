import React from 'react'
import { FiSearch } from 'react-icons/fi';

export const AuthInputs = ({placeholder, type}) => {
  return (
    <div class="relative z-0 mb-11 last-of-type:mb-9">
        <input 
            type={type} 
            id="floating_standard" 
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer" 
            placeholder=" " 
        />
        <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{placeholder}</label>
    </div>
  )
}

export const SearchInput =()=>{
    return (
        <div className=" flex justify-between items-center rounded-full w-full bg-gray-50  px-5 py-3 ">
            <span className=" text-2xl">
                <FiSearch/>
            </span>
            <input 
                type="text" 
                className=" w-full py-2 outline-none border-none bg-slate-50 px-3 text-2xl placeholder:text-2xl" 
                placeholder="Search" 
            />
        </div>
    )
}