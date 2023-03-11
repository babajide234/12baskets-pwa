import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { postrequest } from '../api/requests';

const useProductStore = create(
    (set,get) =>({
        products: [],
        loading: false,
        product:{},
        getProducts:()=>{
            set(state => ({ ...state, loading: true }))
            
            postrequest('order/add', data).then( res => {
                if( res.data.status == 'success'){
                    set(state => ({ ...state, loading: false }))
                    set(state => ({ ...state, cart: res.data.data }))
                }
            })
        },
        getProductDetails: ()=>{
            set(state => ({ ...state, loading: true }))
            
            postrequest('order/add', data).then( res => {
                if( res.data.status == 'success'){
                    set(state => ({ ...state, loading: false }))
                    set(state => ({ ...state, cart: res.data.data }))
                }
            })
        }
    }))

export default useProductStore;