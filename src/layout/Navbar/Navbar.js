import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { IoMdCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";


export default function Navbar() {

  const [active, setActive] = useState(false);

  // Function to toggle navbar
  const  shownav = () => {
    setActive(!active);
    // Toggles the state between true and false
  };
  
  // Function to close nav bar
  const closeNavbar = () => {
    setActive(false);
    // Set the state to false to close the navbar
  };
  


  return (
    <section className='NavBarSection'>
      <header className='header flex'>

        <div className='logodiv'>
        <Link className="navbar-brand" to="/">Tourly</Link>
       
        </div>
       

        <div className={`navBar expand-lg ${active ? 'activeNavBar' : ''}`} >
          
          <ul className="navLists grid">
            
       
          <li className="navitem">
            <Link className="navlink" to="/">Home</Link>
          </li>

          <li className="navitem">
            <Link className="navlink" to="Popular/Popular">Popular</Link>
          </li>
          <li className="navitem">
            <Link className="navlink" to="Destination/Destination">Destination</Link>
          </li>
          <li className="navitem">
            <Link className="navlink" to="Blog/Blog">Blog</Link>
          </li>
          
            
          <li className='navitem'>
            <Link className="btn3" to="Login/Login"> Login  </Link>
          </li>

          <li className='navitem'>
            <Link className="btn3"  to="Signup/Signup"> Sign Up  </Link>
          </li>
            
          </ul> 


          <div onClick={closeNavbar}  className="closeNavbar">
            <IoMdCloseCircle className='close-icon'/>
          </div>
          

        </div>
  
        <div className='togglenavbar expand-sm' onClick={shownav}>
          <TbGridDots className='list-icon' />
        </div>
        

      </header>

    </section>
  )
}

















/*import React, { useState } from 'react';
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


     
       <ul className="navbar-nav">
       <Link className="navbar-brand" to="/">Tourly</Link>
       
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="Popular/Popular">Popular</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="Destination/Destination">Destination</Link>
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
*/