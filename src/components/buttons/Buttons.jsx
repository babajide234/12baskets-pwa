import React from 'react'
import { Link } from 'react-router-dom'

const Buttons = ({to,type,children}) => {
  return (
    <Link to={to} className={`
        w-full py-6 flex justify-center items-center text-lg font-bold rounded-full
        ${ type == 'default' && ' bg-default text-primary'}
        ${ type == 'primary' && ' bg-primary text-default'}
    `}>{children}</Link>    
  )
}

export default Buttons