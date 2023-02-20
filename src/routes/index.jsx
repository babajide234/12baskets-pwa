import { Children } from "react";
import {
    createBrowserRouter,
  } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import MainLayout from "../layout/MainLayout";
// import App from "../App";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Register from "../pages/register";
import Shop from "../pages/Shop";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing/>
    },
    {
      path:'/',
      element: <AuthLayout/>,
      children:[
        {
          path: 'login',
          element: <Login/>
        },
        {
          path: 'register',
          element: <Register/>
        }, 
      ]
    },
    {
      path:'/',
      element: <MainLayout/>,
      children: [
        {
          path:'/shop',
          element:<Shop/>
        }
      ]
    }
]);

export default router;