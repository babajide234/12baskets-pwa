import React from 'react'
import Buttons from '../buttons/Buttons'
import { AuthInputs } from '../Inputs'
import { Formik, ErrorMessage  } from 'formik'
import useUserStore from '../../store/userSlice'

const RegisterForm = () => {
  const Loading = useUserStore(state=> state.loading);
  const register = useUserStore(state=> state.register);

  const initialValues = {
    username: "",
    email: "",
    phone: "",
    passcode: "",
    referral_code: ""
  };

  const onSubmit = (values, { setSubmitting }) => {

    const data = {
      username: values.username,
      email: values.email,
      passcode: values.passcode,
      phone: values.phone,
      referral_code: values.referral_code
    }

    register(data)
    setSubmitting(false);

  };
  return (
    <div className=" flex flex-col h-full justify-between">
        <Formik initialValues={initialValues}  onSubmit={onSubmit}>
        {({ isSubmitting, values, handleSubmit,handleChange }) => (
          <form action="" onSubmit={handleSubmit}>
              <div className="">
                  <AuthInputs name='username' onChange={handleChange} placeholder={'Username'} type={'text'}/>
                  <AuthInputs name='email' onChange={handleChange} placeholder={'Email'} type={'email'}/>
                  <AuthInputs name='phone' onChange={handleChange} placeholder={'Phone'} type={'text'}/>
                  <AuthInputs name='passcode' onChange={handleChange} placeholder={'Password'} type={'password'}/>
                  <AuthInputs name='referral_code' onChange={handleChange} placeholder={'Refferal Code'} type={'text'}/>
              </div>
              <button 
                type="submit"
                className="w-full py-4 flex justify-center items-center text-lg font-bold rounded-full bg-primary text-default"
              >
                { Loading ? <Spinner/> : 'Register'}
                {/* <Spinner/> */}
              </button>
          </form>
        )}
        </Formik>
    </div>
  )
}

export default RegisterForm