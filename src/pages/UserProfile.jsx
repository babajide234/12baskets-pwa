import React, { useEffect } from 'react'
import Buttons from '../components/buttons/Buttons'
import { CardContent } from '../components/Cards/Cards'
import { UnauthContainer } from '../components/UnauthContainer'

const UserProfile = () => {
  return (
    <UnauthContainer>
        <div className=" flex flex-col px-[50px] py-10">
            <h2 className=" font-thin text-4xl mb-10">My profile</h2>

            <CardContent
                title='Personal details'
            >
                <div className=" flex flex-col justify-center items-center">
                    <img src="" alt="" className=" w-[91px] h-[100px] rounded-full mb-3" />
                    <div className="">
                        <h2 className=" font-bold text-xl">Micheal Afolaranmi</h2>
                        <h3 className="text-base">mikeafolaranmi@gmail.com</h3>
                        <span className=" w-full block my-3 border-b border-solid "></span>
                        <h3 className=" text-base font-normal">+234 9011039271</h3>
                        <span className=" w-full block my-3 border-b border-solid "></span>
                        <p className=" text-sm font-normal">5, Chief Collins Udofia Street, Off Fola Osibo, Lekki Phase 1.</p>
                    </div>
                </div>
            </CardContent>
            <div className=" px-8 py-5 fixed bottom-0 left-0 w-full">
                    <Buttons
                        type={'primary'}
                        to={'/payment'}
                    > Update</Buttons>
                </div>
        </div>
    </UnauthContainer>
  )
}

export default UserProfile