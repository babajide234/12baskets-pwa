import React from 'react'
import food from '../assets/food.svg';
import Buttons from '../components/buttons/Buttons';
const ProductPage = () => {
  return (
    <div className=" flex flex-col px-10 mb-20 pb-40">
        <div className=" flex justify-center items-center mb-10">
            <img src={food} alt="" className=' w-[200px] h-[200px] rounded-full shadow-card' />
        </div>
        <div className="  mb-11 text-center">
            <h2 className=" text-[28px] font-thin leading-9">Veggie tomato mix</h2>
            <h3 className=" tex-[22px] font-bold text-primary">N1,900</h3>
        </div>

        <div className=" mb-5">
            <h2 className=" text-[17px] font-thin mb-[6px]">Delivery info</h2>
            <p className=" text-[15px] font-normal leading-normal">Delivered between monday aug and thursday 20 from 8pm to 91:32 pm</p>
        </div>
        <div className="">
            <h2 className=" text-[17px] font-thin mb-[6px]">Return policy</h2>
            <p className="text-[15px] font-normal leading-normal">All our foods are double checked before leaving our stores so by any case you found a broken food please contact our hotline immediately.</p>
        </div>
        <div className=" px-8 py-5 fixed bottom-0 left-0 w-full">
                <Buttons
                    type={'primary'}
                    to={'/payment'}
                >Add to Cart</Buttons>
            </div>
    </div>
  )
}

export default ProductPage