import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
// import logo from '../../../assets/clickLogoo.png'

import {FaShoppingCart} from 'react-icons/fa';
import DarkMode from '../../Home/DarkMode/DarkMode';
// import useCart from '../../../Hooks/useCart';

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
//   const [cart] = useCart()


  const handleLogOut = () => {
      logOut()
      .then(()=> {})
      .catch(error => console.log(error));
  }


    const navOptions = <>
     <DarkMode></DarkMode>
     <li><Link to='/'>Home</Link></li>
     <li><Link to='/classes'>Classes</Link></li>
     <li><Link to='/instructors'>Instructors</Link></li>
     
    
   
     
      
      {
        user ? <>
        <li><Link to='/dashboard'>Dashboard</Link></li>
       <span className='mt-2'>{user?.displayName}</span>
      
<button onClick={handleLogOut} class="btn btn-outline btn-sm btn-error ml-3 mt-1">Log Out</button>
<img className='rounded-full ml-3 mt-1' title= {user.displayName}style={{"height" : "38px" , "width": "38px"}} src={user.photoURL} alt="" />
        </> : <>
        <li><Link to='/login'>Login</Link></li>
        </>
      }
        
    </>
    return (
        <>
          <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {navOptions}
      </ul>
    </div>
    <Link to='/' ><img  className="w-[53px] h-[53px] mr-2 rounded-full" src="https://i.pinimg.com/originals/60/2a/a6/602aa6adc4d9a5c553f482b374bdbbde.gif" alt="" /></Link>
    <a className="btn btn-ghost normal-case text-xl">Click Academy</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navOptions}
    </ul>
  </div>
  
</div>  
        </>
    );
};

export default Navbar;