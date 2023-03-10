import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { postrequest } from '../api/requests';

const useUserStore = create( persist(
    (set,get) =>({
        isLoggeIn:false,
        loading:false,
        token:'',
        details: {},
        setDetails: () => {

        },
        login:({ url, data })=>{
            postrequest(url, data).then(
                res => {
                    if( res.data.status == 'success'){
                        
                    }
                } 
            )
        },
        logout:()=>{},
    }),
    {
        name:'12basket-user',
        storage: createJSONStorage(() => sessionStorage)
    }
))

export default useUserStore;