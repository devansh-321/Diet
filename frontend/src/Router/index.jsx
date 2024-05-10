

import React from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Authentication/Login'
import SingUp from '../Pages/Authentication/SignUp'
import ForgotPassword from '../Pages/Authentication/ForgotPassword'


const AllRouter = () =>{
    const router = [
        {path: '/', element: <Home />},

        {path: '/login', element: <Login />},
        {path: '/signup', element: <SingUp />},
        {path: '/forgot-password', element: <ForgotPassword />},
    ]

    return useRoutes(router)
}

function MainRouter() {
  return (
    <div>
        <BrowserRouter basename='/'>
            <AllRouter />
        </BrowserRouter>
    </div>
  )
}

export default MainRouter