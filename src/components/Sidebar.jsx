import React from 'react'
import { MdDashboard } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaBorderAll } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsCalendar2Date } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoIosLogIn } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className='sidebar border-end'>
       <div className="sidebar-logo">
        <h4 className='text-success text-center mt-3'>Bravo Dashboard</h4>
       </div>
       <hr />
       <div className="sidebar-menu">
         <ul className='list-unstyled'>
            <li className='px-3 p-1'><Link to="/" className='text-decoration-none d-flex align-items-center gap-2 text-success fs-5 p-1 sidebar-link'><MdDashboard/>dashboard</Link></li>
            <li className='px-3 p-1'><Link to="/users" className='text-decoration-none d-flex align-items-center gap-2 text-success fs-5 p-1 sidebar-link'><FaRegUser/>users</Link></li>
            <li className='px-3 p-1'><a href="#" className='text-decoration-none d-flex align-items-center gap-2 text-success fs-5 p-1 sidebar-link'><MdOutlineShoppingCart/>Products</a></li>
            <li className='px-3 p-1'><a href="#" className='text-decoration-none d-flex align-items-center gap-2 text-success fs-5 p-1 sidebar-link'><FaBorderAll/>Order</a></li>
            <li className='px-3 p-1'><a href="#" className='text-decoration-none d-flex align-items-center gap-2 text-success fs-5 p-1 sidebar-link'><CiDeliveryTruck/>Delivery</a></li>
            <li className='px-3 p-1'><a href="#" className='text-decoration-none d-flex align-items-center gap-2 text-success fs-5 p-1 sidebar-link'><IoMdNotificationsOutline/>Notifications</a></li>
            <li className='px-3 p-1'><a href="#" className='text-decoration-none d-flex align-items-center gap-2 text-success fs-5 p-1 sidebar-link'><BsCalendar2Date/>Celander</a></li>
            <li className='px-3 p-1'><a href="#" className='text-decoration-none d-flex align-items-center gap-2 text-success fs-5 p-1 sidebar-link'><CgProfile/>Prodile</a></li>
            <li className='px-3 p-1'><a href="#" className='text-decoration-none d-flex align-items-center gap-2 text-success fs-5 p-1 sidebar-link'><IoIosLogIn/>Logout</a></li>
            <li className='px-3 p-1'><a href="#" className='text-decoration-none d-flex align-items-center gap-2 text-success fs-5 p-1 sidebar-link'><IoMdSettings/>Settings</a></li>
         </ul>
       </div>

    </div>
  )
}

export default Sidebar
