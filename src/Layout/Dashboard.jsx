import React from 'react';
import { FaCalendarAlt, FaHome, FaShoppingCart, FaWallet } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import useCart from '../Hooks/useCart';

const Dashboard = () => {
  const [cart] = useCart()
    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
         <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li><Link><FaHome></FaHome>Home</Link></li>
            <li><Link><FaCalendarAlt></FaCalendarAlt>Reservations</Link></li>
            <li><Link><FaWallet></FaWallet>Payment History</Link></li>
            <li><Link to='/dashboard/myclass'><FaShoppingCart></FaShoppingCart>My Class
            <div className="badge badge-error">{cart.length}</div>
            </Link>
           
            </li>
            <div className='divider'></div>
      
            <li><Link to='/'><FaHome></FaHome>Home</Link></li>
            <li><Link to='/menu'>Our Menu</Link></li>
           <li><Link to='/order/salad'>Order Food</Link></li>
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;