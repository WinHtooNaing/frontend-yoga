import React from 'react'
import { NavLink } from 'react-router-dom'
import '../index.css'
const AdminNavbar = () => {
  return (
    <>
        <section id="sidebar">
        <a href="#" class="brand" style={{textDecoration:"none"}}>
            <i class="bx bxs-smile"></i>
            <span class="text">Admin Panel</span>
        </a>
        <ul class="side-menu top">
            <li class="active" >
                <NavLink to="/admin/" id="a" style={{textDecoration:"none"}}>
                    <i class="bx bxs-dashboard"></i>
                    <span class="text">Dashboard</span>
                </NavLink>
            </li>
            <li >
                <NavLink to="/admin/trainer" id="a" style={{textDecoration:"none"}}>
                    <i class="bx bxs-shopping-bag-alt"></i>
                    <span class="text">Trainer</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/admin/class" id="a" style={{textDecoration:"none"}}>
                    <i class="bx bxs-doughnut-chart"></i>
                    <span class="text">Class</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/admin/sessions" id="a" style={{textDecoration:"none"}}>
                    <i class="bx bxs-message-dots"></i>
                    <span class="text">Sessions</span>
                </NavLink>
            </li>
            
        </ul>
        <ul class="side-menu">
           
            <li>
                <NavLink to="/login" class="logout" style={{textDecoration:"none",color:"red"}}>
                    <i class="bx bxs-log-out-circle"></i>
                    <span class="text">Logout</span>
                </NavLink>
            </li>
        </ul>
    </section>
    </>
  )
}

export default AdminNavbar