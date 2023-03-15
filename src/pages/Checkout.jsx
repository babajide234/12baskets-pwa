import React, {useState} from 'react'
import Buttons from '../components/buttons/Buttons'
import { CardContent } from '../components/Cards/Cards'
import Checkbox from '../components/Forms/Checkbox'
import { Modal } from '../components/Modal/Modal'
import useCartStore from '../store/cartSlice'
import useUserStore from '../store/userSlice'
import { Formik } from 'formik'
import { AuthInputs } from '../components/Inputs'
import { Spinner } from '../components/Spinner'


const Checkout = () => {
    const token = useUserStore((state) => state.token)
    const details = useUserStore((state) => state.details)
    const cart = useCartStore((state) => state.cart)
    const loading = useCartStore(state=> state.loading);
    const shipping = useCartStore(state=> state.shipping);
    const shiping_details = useCartStore(state=> state.shiping_details);

    const [modal, setModal] = useState(false);

    const initialValues = {
        details: "",
        info: "",
    }

    console.log("checkout: ", shiping_details)
    
    const closeModal = ()=>{
        setModal(!modal)
    }
    const onSubmit = (values)=>{
        const data = {
            details: values.details,
            info: values.info,
        }
        shipping(data)
    }
  return (
    <div className=" flex flex-col px-[50px]  pb-40">
            <h2 className=" font-thin text-4xl mb-10">Delivery</h2>
            <CardContent
                title='Address details'
            >
               <h2 className=" font-medium text-xl capitalize">{` ${details.othernames} ${details.lastname}`}</h2>
               <span className=" w-full block my-3 border-b border-solid "></span>
               <p className=" text-sm font-normal">{details.address ? details.address : 'No Address' }</p>
               <span className=" w-full block my-3 border-b border-solid "></span>
               <h3 className=" text-base font-normal">{details.phone}</h3>
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
                <h3 className=" text-2xl font-bold">{ cart.amount.total}</h3>
            </div>
            <div className=" px-8 py-5 fixed bottom-0 left-0 w-full">
                <button onClick={()=>setModal(!modal)} className='w-full py-4 flex justify-center items-center text-lg font-bold rounded-full bg-primary text-default'>Shipping Info</button>
            </div>
            <Modal title={'Shipping Form'} open={modal} close={closeModal} >
                {
                    shiping_details ? (
                        <Formik initialValues={initialValues} onSubmit={onSubmit}>
                            {(props)=>(
                                <form onSubmit={props.handleSubmit}>
                                    <AuthInputs name="details" placeholder={'Shipping Address'} value={props.values.details} onChange={props.handleChange} />
                                    <AuthInputs name="info" placeholder={'Additional Info'} value={props.values.info} onChange={props.handleChange} />
                                    <button  
                                        type='submit' 
                                        className='w-full py-4 flex justify-center items-center text-lg font-bold rounded-full bg-primary text-default'

                                    >{loading ? <Spinner/> : "Proceed"}</button>
                                </form>
                            )}                                                                                                                  
                        </Formik>
                    ): (
                        <>
                            <Buttons  to="/payment" type={'primary'}>Proceed to payment</Buttons>
                        </>
                    )
                }
            </Modal>

    </div>
  )
}

export default Checkout