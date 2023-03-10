import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import useUserStore from '../store/userSlice'

export const UnauthContainer = ({children}) => {
  const isLoggedIn = useUserStore(state => state.isLoggedIn)
  const navigate = useNavigate();
  
  if(isLoggedIn){
    return (<>{children}</>)
  }
//   navigate('/login');
return (
    <Navigate to="/login"/>
)
}
