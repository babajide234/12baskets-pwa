import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Container from '../components/Container'

const AuthLayout = () => {
  return (
    <Container>
        <div className=" w-full h-1/2 bg-auth-bg bg-cover bg-no-repeat bg-center rounded-bl-[30px] rounded-br-[30px] px-10 py-5 flex flex-col justify-end">
            <ul className="flex justify-between w-11/12 mx-auto">
                <li className=""><Link to='/login' className=' capitalize text-default font-semibold text-xl'>login</Link></li>
                <li className=""><Link to='/register' className=' capitalize text-default font-semibold text-xl'>Register</Link></li>
            </ul>
        </div>
        <div className=" px-11 py-10 h-full flex flex-col">
            <Outlet/>
        </div>
    </Container>
  )
}

export default AuthLayout