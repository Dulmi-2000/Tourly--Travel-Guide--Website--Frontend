import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"

export default function Navbar() {

  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
   
    <nav className="navbar navbar-expand-sm">
     
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNavbar}
      >

        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${collapsed ? '' : 'show'}`}>
     {/*
        <div className='nav_bar'>
          <div className='menu'>
          <Link className="navbar-brand" to="/">Tourly</Link>
                <Link className='nav-link' to="/">Home</Link>
                <Link className="nav-link" to="Popular/Popular">Popular</Link>
                <Link className="nav-link" to="Blog/Blog">Blog</Link>
          </div>
          

            <div className='menu1'>
            <Link className="btn" to="Login/Login"> Login  </Link>
            <Link className="btn"  to="Signup/Signup"> Sign Up  </Link>
            </div>

            </div>
            
     */}

     
       <ul className="navbar-nav">
       <Link className="navbar-brand" to="/">Tourly</Link>
       
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="Popular/Popular">Popular</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="Destination/Destination">Popular</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="Blog/Blog">Blog</Link>
          </li>

          <li className='nav-item'>
            <Link className="btn2" to="Login/Login"> Login  </Link>
          </li>

          <li className='nav-item'>
            <Link className="btn2"  to="Signup/Signup"> Sign Up  </Link>
          </li>
          
        </ul> 

      </div>
        </nav>
       
  );
}
