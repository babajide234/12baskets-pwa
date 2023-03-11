import React, { useState,useEffect } from 'react'
import Buttons from '../components/buttons/Buttons'
import { CardContent } from '../components/Cards/Cards'
import { UnauthContainer } from '../components/UnauthContainer'
import useUserStore from '../store/userSlice'

import { CgClose } from 'react-icons/cg';
import { Formik } from 'formik'
import { AuthInputs } from '../components/Inputs'
import { Modal } from '../components/Modal/Modal'
import { Spinner } from '../components/Spinner'

const UserProfile = () => {
    const [modal, setModal] = useState(false)
    const details = useUserStore(state=> state.details);
    const loading = useUserStore(state=> state.loading);
    const updateDetails = useUserStore(state=> state.updateDetails);

    const initialValues = {
            email: "",
            phone: "",
            username: "",
            account_no: "",
            bank_code: "",
            address: "",
            file: ""
    }

    useEffect(()=>{
        console.log('details', details);
    },[details])
    
    const onSubmit = (values)=>{
        const data ={
            email: "",
            phone: values.phone,
            username: "",
            account_no: "",
            bank_code: "",
            address: values.address,
            file: ""
        }
        updateDetails(data)
    }
    const closeModal = ()=>{
        setModal(!modal)
    }
  return (
    <UnauthContainer>
        <div className=" flex flex-col px-[50px] py-10">
            <h2 className=" font-thin text-4xl mb-10">My profile</h2>

            <CardContent
                title='Personal details'
            >
                <div className=" flex flex-col justify-center items-center">
                    <label htmlFor='profile-pic' className=' flex justify-center flex-col items-center mb-5'>
                        {/* <img src={ details.photo ? details.photo : 'https://ui-avatars.com/api/?name='+details.username } alt="" className=" w-[91px] h-[100px] rounded-full mb-3" /> */}
                        <img src={ details.photo ? details.photo : 'https://i.pravatar.cc/300' } alt="" className=" w-[91px] h-[100px] rounded-full mb-3" />
                        <input type="file" name='profile-pic' id='profile-pic' className='hidden' />
                        <p className=" text-sm">click too upload</p>
                    </label>
                    <div className="">
                        <h2 className=" font-bold text-xl">{ details.username}</h2>
                        <h3 className="text-base">{ details.email  ? details.email : "empty Email"}</h3>
                        <span className=" w-full block my-3 border-b border-solid "></span>
                        <h3 className=" text-base font-normal">{ details?.phone }</h3>
                        <span className=" w-full block my-3 border-b border-solid "></span>
                        <p className=" text-sm font-normal">{ details.address  ? details.address : "No Address"}</p>
                    </div>
                </div>
            </CardContent>
            <div className=" px-8 py-5 fixed bottom-0 left-0 w-full">
                <button onClick={()=>setModal(!modal)} className='w-full py-4 flex justify-center items-center text-lg font-bold rounded-full bg-primary text-default'>Update</button>
            </div>

            <Modal title={'Form'} open={modal} close={closeModal} >
                <Formik initialValues={initialValues} onSubmit={onSubmit}>
                    {(props)=>(
                        <form onSubmit={props.handleSubmit}>
                            <AuthInputs name="phone" placeholder={'Email'} value={props.values.email} onChange={props.handleChange} />
                            <AuthInputs name="address" placeholder={'Address'} value={props.values.address} onChange={props.handleChange} />
                            <button  
                                type='submit' 
                                className='w-full py-4 flex justify-center items-center text-lg font-bold rounded-full bg-primary text-default'

                            >{loading ? <Spinner/> : "Update"}</button>
                        </form>
                    )}
                </Formik>
            </Modal>
        </div>
    </UnauthContainer>
  )
}

export default UserProfile