import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import router from './routes';
import { AnimatePresence } from 'framer-motion';
import { UserProvider } from './context/Context';
import Alert from './components/Alert';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <UserProvider>
        <RouterProvider router={router}/>
        <Alert/>
      </UserProvider>
  </React.StrictMode>,
)
