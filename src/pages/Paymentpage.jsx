import React,{useState,useEffect} from 'react'
import { useFlutterwave } from 'flutterwave-react-v3';
import useUserStore from '../store/userSlice';
import useCartStore from '../store/cartSlice';
import { CardContent } from '../components/Cards/Cards';

const Paymentpage = () => {
  const token = useUserStore((state) => state.token)
  const details = useUserStore((state) => state.details)
  const cart = useCartStore((state) => state.cart)
  const checkout = useCartStore((state) => state.checkout)
  const { open , setOpen } = useState(false);

  const config = {
    public_key: 'FLWPUBK_TEST-e6a2fdc7c99903def336ab7d047ad6f7-X',
    tx_ref: checkout != null ? checkout : Date.now(),
    amount: cart.amount.total,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: details.email,
      phone_number:details.phone,
      name: details.othernames+" "+details.lastname,
    },
    customizations: {
      title: 'Payment',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const handleCheckout= ()=>{
    const data = {
      token
    };
    checkout(data);
  }

  useEffect(() => {
    if(checkout != null){

      handleFlutterPayment({
        callback: (response) => {
          console.log(response);
          handleCheckout()
          closePaymentModal() // this will close the modal programmatically
        },
        onClose: () => {
          
        },
      });
    }
  }, [checkout])
  // 4ffbee16a9ceb0489346de08b30b8ef0
  return (
    <div className=" flex flex-col px-[50px]  pb-40">
        <h2 className=" font-thin text-4xl mb-10">Payment</h2>
        <CardContent>
          <div className="flex justify-between">
            <h2 className=" text-lg font-semibold ">Products</h2>
            <span className="">N{cart.amount.product}</span>
          </div>
           <span className=" w-full block my-3 border-b border-solid "></span>
          <div className="flex justify-between">
            <h2 className=" text-lg font-semibold">Shipping</h2>
            <span className="">N{cart.amount.shipping}</span>
          </div>
          <span className=" w-full block my-3 border-b border-solid "></span>
          <div className="flex justify-between">
            <h2 className=" text-lg font-semibold">Vat</h2>
            <span className="">N{cart.amount.vat}</span>
          </div>
        </CardContent>

        <div className=" px-8 py-5 fixed bottom-0 left-0 w-full">
            <button 
              onClick={() => {
                handleCheckout()
              }} 
              className='w-full py-4 flex justify-center items-center text-lg font-bold rounded-full bg-primary text-default'
              >Pay N{cart.amount.total}</button>
        </div>

        <div 
         className={`fixed w-full h-screen top-0 left-0 z-50 bg-gray-900/30 ${ open ? 'flex':'hidden'} justify-center items-center`}
        >
          <div className=" w-5/6 bg-default h-3/6"></div>
        </div>
    </div>
  )
}

export default Paymentpage