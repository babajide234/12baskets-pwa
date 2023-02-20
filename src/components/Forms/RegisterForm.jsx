import React from 'react'
import Buttons from '../buttons/Buttons'
import { AuthInputs } from '../Inputs'

const RegisterForm = () => {
  return (
    <div className=" flex flex-col h-full justify-between">
        <div className="">
            <AuthInputs placeholder={'Username'} type={'text'}/>
            <AuthInputs placeholder={'Email'} type={'text'}/>
            <AuthInputs placeholder={'Phone'} type={'text'}/>
            <AuthInputs placeholder={'Password'} type={'text'}/>
            <AuthInputs placeholder={'Refferal Code'} type={'text'}/>
        </div>
        <Buttons type={'primary'} to={''}>Register</Buttons>
    </div>
  )
}

export default RegisterForm