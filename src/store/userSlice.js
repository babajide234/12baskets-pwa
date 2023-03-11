import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { postrequest } from '../api/requests';

const useUserStore = create( persist(
    (set,get) =>({
        isLoggedIn:false,
        loading:false,
        token:'',
        details: {},
        registerStatus: false,
        setDetails: () => {
            set(state => ({ ...state, loading: false }))

            postrequest('account/details', { token: get().token }).then(
                res => {
                    console.log(res);
                    if( res.data.status == 'success'){
                        set(state => ({ ...state, loading: false }))
                        set(state => ({ ...state, details: res.data.data }))
                    } else {
                        set(state => ({ ...state, loading: false }))
                    }
                } 
            )
        },
        login:(data)=>{
            set(state => ({ ...state, loading: true }))
            
            postrequest('account/login', data).then(
                res => {
                    console.log(res);
                    if( res.data.status == 'success'){
                        set(state => ({ ...state, loading: false }))
                        set(state => ({ ...state, token: res.data.token }))
                        get().setDetails();
                        set(state => ({ ...state, isLoggedIn: true }))
                    } else {
                        set(state => ({ ...state, loading: false }))
                    }
                } 
            )
        },
        register:(data)=>{
            set(state => ({ ...state, loading: true }))
            
            postrequest('account/register', data).then(
                res => {
                    console.log(res);
                    if( res.data.status == 'success'){
                        set(state => ({ ...state, loading: false }))
                        set(state => ({ ...state, registerStatus: true }))
                    } else {
                        set(state => ({ ...state, loading: false }))
                    }
                } 
            )
        },
        logout:() => {
            set(state => ({ ...state, isLoggedIn: false }))
            set(state => ({ ...state, token: '' }))
            set(state => ({ ...state, details: {} }))
        },
        updateDetails:(data) =>{
            set(state => ({ ...state, loading: true }))
            postrequest('account/update', data).then(
                res => {
                    console.log(res);
                    if( res.data.status == 'success'){
                        set(state => ({ ...state, loading: false }))
                        get().setDetails();
                    } else {
                        set(state => ({ ...state, loading: false }))
                    }
                } 
            )
        }
    }),
    {
        name:'12basket-user',
        storage: createJSONStorage(() => sessionStorage)
    }
))

export default useUserStore;