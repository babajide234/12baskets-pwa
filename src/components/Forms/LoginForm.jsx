import React from 'react'
import { Link } from 'react-router-dom'
import Buttons from '../buttons/Buttons'
import { AuthInputs } from '../Inputs'

const LoginForm = () => {
  return (
    <div className=" flex flex-col h-full justify-between">
        <div className="">
            <AuthInputs placeholder={'Email address'} type={'email'}/>
            <AuthInputs placeholder={'Password'} type={'Password'}/>
            <Link to="" className=' text-primary text-lg font-medium'>Forgot password?</Link>
        </div>
        <Buttons type={'primary'} to={''}>Login</Buttons>
    </div>
  )
}

export default LoginForm