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
import { BsArrowBarRight, BsCaretRight, BsPencil, BsTrash } from 'react-icons/bs'
import { MdArrowForwardIos } from 'react-icons/md'

const UserProfile = () => {
    const [modal, setModal] = useState(false)
    const [order, setOrder] = useState(false)
    const details = useUserStore(state=> state.details);
    const token = useUserStore(state=> state.token);
    const loading = useUserStore(state=> state.loading);
    const profileUpload = useUserStore(state=> state.profileUpload);
    const updateDetails = useUserStore(state=> state.updateDetails);
    const [profilePic,setProfilePic] = useState('')

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
        console.log("user:",details)
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

    const handleUpload = ()=>{

        if (!profilePic) {
            return;
        }
        const formData = new FormData();
        formData.append("token", token);
        formData.append("file", profilePic);

        profileUpload(formData);
        setProfilePic('');
        // updateDetails
    }

    const handleFileSelect = (event) => {
        const selectedImage = event.target.files[0];
        console.log(selectedImage);
        if (selectedImage && selectedImage.type.includes("image")) {
            setProfilePic(selectedImage);

            const formData = new FormData();
            formData.append("token", token);
            formData.append("file", selectedImage);
    
            // profileUpload(formData);
            console.log("image upload", formData);
        } else {
            setProfilePic(null);
        }

        // if(profilePic && profilePic.type.includes("image")){
        //     console.log('photo', profilePic);
        //     handleUpload();
        // }
    };

    const handleUpdate = (event)=>{
        console.log(event)
    }

  return (
    <UnauthContainer>
        <div className=" flex flex-col px-[20px] py-10 min-h-screen">
            <h2 className=" font-thin text-4xl mb-10">My profile</h2>

            <CardContent
                title='Personal details'
            >
                <div className=" w-full flex flex-col justify-center items-center">
                    <label htmlFor='profile-pic' className=' relative flex justify-center flex-col items-center mb-5'>
                        <img src={ details.photo ? details.photo : 'https://i.pravatar.cc/300' } alt="" className=" w-[91px] h-[100px] rounded-full mb-3" />
                        <input type="file" name='profile-pic'  onChange={handleFileSelect} id='profile-pic' accept="image/*" className='hidden' />
                        <span className=' w-10 h-10 absolute bg-primary rounded-full text-white flex justify-center items-center bottom-2 right-0'><BsPencil/></span> 
                    </label>
                    <div className=" w-full">
                        <h2 className=" font-bold text-xl">{ details.username}</h2>

                        <div className="flex justify-between">
                            <h2 className=" font-bold text-xl">{` ${details.othernames} ${details.lastname}`}</h2>
                            <button className=' w-6 h-6 rounded-full '  onClick={()=>setModal(!modal)}><BsPencil/></button>
                        </div>
                        <h3 className="text-base">{ details.email  ? details.email : "empty Email"}</h3>
                        <span className=" w-full block my-3 border-b border-solid "></span>
                        <div className="flex justify-between">
                            <h3 className=" text-base font-normal">{ details?.phone }</h3>
                            <span><BsPencil/></span>
                        </div>
                        <span className=" w-full block my-3 border-b border-solid "></span>
                        <div className="flex justify-between">
                            <p className=" text-sm font-normal">{ details.address  ? details.address : "No Address"}</p>
                            <span><BsPencil/></span>                        
                        </div>
                    </div>
                </div>
            </CardContent>

            <CardContent title="">
                <div className="flex justify-between items-center">
                    <h2 className="text-gray-800 text-2xl font-bold">Orders</h2>
                    <span className='text-gray-800  font-bold w-6 h-6 flex justify-center items-center'><MdArrowForwardIos/></span>
                </div>
                <div className={` ${order ? '' : 'hidden'}`}>
                    
                </div>
            </CardContent>

            <CardContent title="">
                <div className="flex justify-between">
                    <h2 className="text-primary font-bold">Delete Account</h2>
                    <span className='text-primary font-bold'><BsTrash/></span>
                </div>
            </CardContent>

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