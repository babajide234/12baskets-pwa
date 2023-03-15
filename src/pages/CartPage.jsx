import React from 'react'
import { CartCards } from '../components/Cards/Cards'
import img from '../assets/food.svg';
import Buttons from '../components/buttons/Buttons';
import useCartStore from '../store/cartSlice';
import EmptyPage from '../components/EmptyPage';
import Icon from '../assets/ector.svg'

const CartPage = () => {
    const cart = useCartStore(state=> state.cart);
    const remove = useCartStore(state=> state.remove);

    const item = {
        name: 'Chairmans Platter ',
        description:'',
        price:'',
        quantity:'',
        src:img
    }
  return (
    <div className="">
        {
            cart.product && cart.product.map((item)=>(
                <CartCards
                    item={item}
                />
            ))
        }
        {
             !cart.product && (

                 <EmptyPage
                 image={Icon}
                 title={'No Cart yet'}
                 subtitle={'Hit the orange button down below to Create an order'}
                 />
             )
        }
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