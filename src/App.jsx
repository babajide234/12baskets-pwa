import React, { useState, useEffect } from 'react'
import './App.css'
import 'react-alice-carousel/lib/alice-carousel.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './routes';
import useCartStore from './store/cartSlice';
import useUserStore from './store/cartSlice';

function App() {


  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
