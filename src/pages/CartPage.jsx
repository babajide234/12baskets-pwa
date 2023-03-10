import React from 'react'
import { CartCards } from '../components/Cards/Cards'
import img from '../assets/food.svg';
import Buttons from '../components/buttons/Buttons';
const CartPage = () => {
    const item = {
        name: 'Chairmans Platter ',
        description:'',
        price:'',
        quantity:'',
        src:img
    }
  return (
    <div className="">
        <CartCards
            item={item}
        />
        <div className=" px-8 py-5 fixed bottom-0 left-0 w-full">
                    <Buttons
                        type={'primary'}
                        to={'/checkout'}
                    > Complete Order</Buttons>
                </div>
    </div>
  )
}

export default CartPage