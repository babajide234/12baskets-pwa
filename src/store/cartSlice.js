import { create } from "zustand";

import { persist, createJSONStorage } from 'zustand/middleware'
import { postrequest } from '../api/requests';

const useCartStore = create( persist(
    (set,get) =>({
        cart:[],
        loading:false,
        addToCart:(data) => {
            set(state => ({ ...state, loading: true }))
            
            postrequest('order/add', data).then( res => {
                if( res.data.status == 'success'){
                    set(state => ({ ...state, loading: false }))
                    set(state => ({ ...state, cart: res.data.data }))
                }
            })
        },
        getCart:(data) => {
            set(state => ({ ...state, loading: true }))
            
            postrequest('order/cart', data).then( res => {
                if( res.data.status == 'success'){
                    set(state => ({ ...state, loading: false }))
                    set(state => ({ ...state, cart: res.data.data }))
                }
            })
        }
    }),
    {
        name:'12basket-cart',
        storage: createJSONStorage(() => sessionStorage)
    }
));

export default useCartStore;