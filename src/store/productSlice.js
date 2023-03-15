import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { postrequest } from '../api/requests';

const useProductStore = create(
    (set,get) =>({
        products: [],
        categories:[],
        loading: false,
        product:null,
        getProducts:(data)=>{
            set(state => ({ ...state, loading: true }))
            
            postrequest('store/products', data).then( res => {
                console.log(res)
                if( res.data.status == 'success'){
                    set(state => ({ ...state, loading: false }))
                    set(state => ({ ...state, products: res.data.data }))
                }
            })
        },
        getProductsDetails:(data)=>{
            set(state => ({ ...state, loading: true }))
            
            postrequest('store/products', data).then( res => {
                console.log(res)
                if( res.data.status == 'success'){
                    set(state => ({ ...state, loading: false }))
                    set(state => ({ ...state, product: res.data.data }))
                }
            })
        },
        getCat:(data)=>{
            set(state => ({ ...state, loading: true }))
            
            postrequest('misc/category', data).then( res => {
                if( res.data.status == 'success'){
                    console.log(res.data)
                    set(state => ({ ...state, loading: false }))
                    set(state => ({ ...state, categories: res.data.data }))
                }
            })
        }
    }))

export default useProductStore;