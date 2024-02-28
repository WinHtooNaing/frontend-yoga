import React from 'react'
import AdminNavbar from '../pages/AdminNavbar'
import { Outlet } from 'react-router-dom'

const AdminMain = () => {
  return (
    <>
        <AdminNavbar/>
        <Outlet/>
    </>
  )
}

export default AdminMain