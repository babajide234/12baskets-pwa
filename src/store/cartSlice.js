import { create } from "zustand";

import { persist, createJSONStorage } from 'zustand/middleware'
import { postrequest } from '../api/requests';

const useCartStore = create( persist(
    (set,get) =>({
        cart:[],
        loading: false,
        shiping_details: false,
        checkout:null,
        report:null,
        addToCart:(data) => {
            set(state => ({ ...state, loading: true }))

            postrequest('order/add', data).then( res => {
                console.log(res);
                if( res.data.status == 'success'){
                    set(state => ({ ...state, loading: false }))
                }
                set(state => ({ ...state, loading: false }))
            })
        },
        getCart:(data) => {
            
            postrequest('order/cart', data).then( res => {
                console.log(res);
                if( res.data.status == 'success'){
                    set(state => ({ ...state, cart: res.data.data }))

                }
            })
        },
        remove:(data) => {
            
            postrequest('order/remove', data).then( res => {
                console.log(res);
                if( res.data.status == 'success'){
                    set(state => ({ ...state, cart: res.data.data }))
                     
                }
            })
        },
        shipping:(data) =>{
            set(state => ({ ...state, loading: true }))

            postrequest('order/shipping', data).then( res => {
                console.log(res);
                if( res.data.status == 'success'){
                    set(state => ({ ...state, shiping_details: true }))
                    
                }
                set(state => ({ ...state, shiping_details: true }))
                set(state => ({ ...state, loading: false }))
            })
        },
        order:(data) =>{
            set(state => ({ ...state, loading: true }))

            postrequest('order/checkout', data).then( res => {
                console.log(res);
                if( res.data.status == 'success'){
                    set(state => ({ ...state, checkout: res.data.reference_code }))

                }
                set(state => ({ ...state, loading: false }))
            })
        },
        orderReport:(data) =>{
            set(state => ({ ...state, loading: true }))

            postrequest('order/report', data).then( res => {
                console.log(res);
                if( res.data.status == 'success'){
                    set(state => ({ ...state, report : res.data.data }))

                }
                set(state => ({ ...state, loading: false }))
            })
        }
    }),
    {
        name:'12basket-cart',
        storage: createJSONStorage(() => sessionStorage)
    }
));

export default useCartStore;