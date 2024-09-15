import React from 'react'
import NavBar from '../components/Navbar/NavBar'

const AdminPage = () => {
  return (
    <>
     <NavBar/>
     <h1 className='m-5 p-4 font-bold text-2xl'>Welcome <span className='text-3xl text-blue-800 font-bold font-serif'>Admin</span></h1> 
    </>
  )
}

export default AdminPage
