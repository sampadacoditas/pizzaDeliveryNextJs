import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Footer } from '../Footer/Footer'
import { NavBar } from '../NavBar/NavBar'

export const Layout = ({children}:any) => {
  
  const notify = () => toast("Wow so easy !");
  return (
    <>
 
    <NavBar/>
   
    {children}
   
    <Footer/>
    </>
  )
}
