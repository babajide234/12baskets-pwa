import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import router from './routes';
import { AnimatePresence } from 'framer-motion';
import { UserProvider } from './context/Context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <UserProvider>
        <RouterProvider router={router}/>
      </UserProvider>
  </React.StrictMode>,
)
