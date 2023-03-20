import { create } from "zustand";

import { persist, createJSONStorage } from 'zustand/middleware'
import { postrequest } from '../api/requests';
import useLoaderStore from './loaderSlice';

const useCartStore = create( persist(
    (set,get) =>({
        cart:[],
        loading: false,
        shiping_details: false,
        checkout:null,
        report:null,
        orders:null,
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
            useLoaderStore.setState({ isLoading: true });

            postrequest('order/shipping', data).then( res => {
                console.log(res);
                if( res.data.status == 'success'){
                    set(state => ({ ...state, shiping_details: true }))
                    
                }
            })
            .catch((err) => {
                console.error(err);
            })
            .finally(() => {
                useLoaderStore.setState({ isLoading: false });
            });
        },
        order:(data) =>{
            useLoaderStore.setState({ isLoading: true });

            postrequest('order/checkout', data).then( res => {
                console.log(res);
                if( res.data.status == 'success'){
                    set(state => ({ ...state, checkout: res.data.reference_code }))
                }
            })
            .catch((err) => {
                console.error(err);
            })
            .finally(() => {
                useLoaderStore.setState({ isLoading: false });
            });
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
        },
        removeCart:(data)=>{
            set(state => ({ ...state, loading: true }))

            postrequest('order/remove', data).then( res => {
                console.log(res);
                if( res.data.status == 'success'){
                    set(state => ({ ...state, report : res.data.data }))

                }
                set(state => ({ ...state, loading: false }))
            })
        },
        getorders:(data)=>{

            postrequest('order/details', data).then( res => {
                console.log(res);
                if( res.data.status == 'success'){
                    set(state => ({ ...state, orders : res.data.data }))

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