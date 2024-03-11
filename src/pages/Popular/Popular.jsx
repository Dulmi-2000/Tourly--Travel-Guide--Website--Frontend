import React from 'react'
import travel from '../../Assets/travel.png';
import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './popular.css'

export default function Popular() {

  const errMsgRef = useRef(null);
  const userRef = useRef(null);
  const navigate = useNavigate();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const { password, username, email } = user;
  

 
  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const { username, password } = user;
          const usernameResponse = await axios.get(`http://localhost:8080/username/${username}`);
          const existingUser = usernameResponse.data;

          console.log("existingUser:", existingUser); // Log the existingUser data

          if (existingUser) {
              console.log("passwords:", password, existingUser.password); // Log passwords for comparison

              if (existingUser.password === password) {
                  console.log("Passwords match, navigating...");
                  navigate("/");
              } else {
                  console.log("Incorrect password");
                  setErrMsg('Incorrect password. Please try again.');
              }
          } else {
              console.log("User not found");
              setErrMsg('User not found. Please sign up.');
          }
      } catch (error) {
          console.error('Error:', error);
          // Handle errors here, log or set error messages as needed
      }
  };

  return (
   

/* main container*/
    <div className='container d-flex  justify-content-center align-items-center min-vh-100'>

      {/*login conatainer */}
      <div className='row bg-white shadow box-area col-12'>

         {/*left box */}
        <div className='col-md-6  rounded-4  left-box'>
          <div className='featured-image'>
          <img src={travel} className='img-fluid' style={{ width: '350px' , height:'400px',}} />
          </div>

        </div>
        {/*right box */}
        <div className='col-md-6 d-flex right-box justify-content-center align-items-center'>
          <div className='row align-items-center'>
            <div className='header-text mt-1'>
              <p>Login</p>
            </div>



            <form onSubmit={(e) => handleSubmit(e)}>


<div class="group">
    <svg stroke="currentColor" 
    stroke-width="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        class="icon">
        <path d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            stroke-linejoin="round"
            stroke-linecap="round">
              
            </path>
    </svg>

    
    <input
        className='input'
        placeholder='Enter your username'
        type='text'
        id='username'
        ref={userRef}
        autoComplete='off'
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        value={user.username}
        required
    />
</div>



<br />
<br />



<div class="group">
    <svg stroke="currentColor" 
    stroke-width="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        class="icon">
        <path d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            stroke-linejoin="round"
            stroke-linecap="round">
              
            </path>
    </svg>

    
    <input
        className='input'
        placeholder='Enter your password'
        type='password'
        id='password'
        autoComplete='off'
        onChange={(e) => setPwd(e.target.value)}
        value={pwd}
        required
    />
</div>


<br />
<br />
<button className='btn btn-outline-dark w-50 fs-6' type='submit'> 
    Login
</button>
<p style={{ textAlign: 'center' }}>
Don't have an account? <Link className='link1' to='/Signup/Signup'>Sign In</Link>
</p>
</form>
<br></br>

<p ref={errMsgRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>
{errMsg}
</p>
</div>




</div>

            </div>

          </div>
       
   
  );
}
