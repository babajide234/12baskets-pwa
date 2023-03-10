import React from 'react'
import Buttons from '../components/buttons/Buttons'
import { CardContent } from '../components/Cards/Cards'
import Checkbox from '../components/Forms/Checkbox'

const Checkout = () => {
  return (
    <div className=" flex flex-col px-[50px]  pb-40">
            <h2 className=" font-thin text-4xl mb-10">Delivery</h2>
            <CardContent
                title='Address details'
            >
               <h2 className=" font-bold text-xl">Marvis Kparobo</h2>
               <span className=" w-full block my-3 border-b border-solid "></span>
               <p className=" text-sm font-normal">5, Chief Collins Udofia Street, Off Fola Osibo, Lekki Phase 1.</p>
               <span className=" w-full block my-3 border-b border-solid "></span>
               <h3 className=" text-base font-normal">+234 9011039271</h3>
            </CardContent>
            <CardContent
                title='Delivery method.'
            >
               <Checkbox label='Door delivery'/>
               <span className=" w-full block my-3 border-b border-solid "></span>
               <Checkbox label='Pick up'/>
            </CardContent>
            <div className="flex justify-between">
                <h3 className=" text-lg font-semibold">Total</h3>
                <h3 className=" text-2xl font-bold">23,000</h3>
            </div>
            <div className=" px-8 py-5 fixed bottom-0 left-0 w-full">
                <Buttons
                    type={'primary'}
                    to={'/payment'}
                > Proceed to Payment</Buttons>
            </div>
    </div>
  )
}

export default Checkout