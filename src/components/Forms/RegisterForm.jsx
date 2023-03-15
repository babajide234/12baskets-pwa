import React from 'react'
import Buttons from '../buttons/Buttons'
import { AuthInputs } from '../Inputs'
import { Formik, ErrorMessage  } from 'formik'
import useUserStore from '../../store/userSlice'
import { AnimatePresence, motion } from 'framer-motion'

import { BsPersonCheck } from 'react-icons/bs';
import { Link } from 'react-router-dom'
import { Spinner } from '../Spinner'

const RegisterForm = () => {
  const Loading = useUserStore(state=> state.loading);
  const register = useUserStore(state=> state.register);
  const status = useUserStore(state=> state.registerStatus);

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
    <AnimatePresence>
      <div className=" flex flex-col h-full justify-between">
          { !status && (
            <Formik initialValues={initialValues}  onSubmit={onSubmit}>
              {({ isSubmitting, values, handleSubmit,handleChange }) => (
                <form onSubmit={handleSubmit}>
                    <div className="">
                        <AuthInputs value={values.username} name='username' onChange={handleChange} placeholder={'Username'} type={'text'}/>
                        <AuthInputs value={values.email} name='email' onChange={handleChange} placeholder={'Email'} type={'email'}/>
                        <AuthInputs value={values.phone} name='phone' onChange={handleChange} placeholder={'Phone'} type={'text'}/>
                        <AuthInputs value={values.passcode} name='passcode' onChange={handleChange} placeholder={'Password'} type={'password'}/>
                        <AuthInputs value={values.referral_code} name='referral_code' onChange={handleChange} placeholder={'Refferal Code'} type={'text'}/>
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
          )}
          {
            status && (
              <motion.div 
                initial = {{ opacity:0, scale:0 }}
                animate = {{ opacity:1, scale:1 }}
                transition= {{ duration: .4 }}
                className=" flex flex-col items-center justify-center "
              >
                <BsPersonCheck className=' text-9xl text-green-700' />
                <h2 className=" text-2xl font-bold text-gray-600 mb-5">Successfully Registered</h2>
                <Link to='' className=' font-bold text-primary border border-solid rounded-full border-primary px-4 py-2'>Go to Login</Link>
              </motion.div>
            )
          }
      </div>
    </AnimatePresence>
  )
}

export default RegisterForm