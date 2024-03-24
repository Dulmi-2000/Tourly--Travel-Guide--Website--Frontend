import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';
import coverh from '../../Assets/coverh.jpg'

export default function Login() {

    const navigate = useNavigate();

    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Check if the username exists
            const usernameResponse = await axios.get(`http://localhost:8080/email/${email}`);
            const existingUser = usernameResponse.data;

            if (existingUser) {
                // User exists, check password
                if (existingUser.password === password) {
                    // Passwords match, navigate to home page
                    navigate("/");
                } else {
                    // Incorrect password
                    setErrMsg('Incorrect password. Please try again.');
                }
            } else {
                // User not found, prompt to sign up
                setErrMsg('User not found. Please sign up.');
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle errors here, log or set error messages as needed
        }
    };

    return (
        <div className='imgcov col-12' style={{ backgroundImage: `url(${coverh})` }}>
            <div className='log col-12 container'>
                <div className='signinform col-12'>
                    <div className='rightside  col-lg-6'>
                        <h1 className='descript'>Welcome </h1>
                        <h1 className='descript'>Back</h1>
                    </div>
                    <div className='leftside  col-lg-6'>
                        <div className='frm col-12'>
                            <h1 className='logdes'>Login</h1>
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div class="group col-12">
                                    <input
                                        className='input11'
                                        placeholder='Enter your email'
                                        type='text'
                                        id='email'
                                        autoComplete='off'
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        required
                                    />
                                </div>
                                <br />
                                <div class="group">
                                    <input
                                        className='input11'
                                        placeholder='Enter your password'
                                        type='password'
                                        id='password'
                                        autoComplete='off'
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                        required
                                    />
                                    <br />
                                </div>
                                <p style={{ textAlign: 'center' }}>
                                    <Link className='link3' to=''>Forgot Password ?</Link>
                                </p>
                                <br />
                                <br />
                                <button className='btn5' type='submit'>
                                    Login
                                </button>
                                <br />
                                {errMsg && (
                                    <p style={{ textAlign: 'center', color: 'red' }}>{errMsg}</p>
                                )}
                                <br />
                                <hr />
                                <div className='signinlink'>
                                    <p className='p1' style={{ textAlign: 'center' }}>
                                        Don't have an account? <Link className='link2' to='/Signup/Signup'>Sign Up</Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

    

  /* <div className='main'>

       
        <div className='whole' >
    
           
        <div className='img01'>
          <img src={travel} alt='Travel' className='img1' />
        </div>
                

        <div className='frm'>
         
            <h1>Login</h1>
            
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
                    
                        <button className='btn btn-outline-dark ' type='submit'>
                            Login
                        </button>
                        <p style={{ textAlign: 'center' }}>
                        Don't have an account? <Link className='link1' to='/Signup/Signup'>Sign In</Link>
                    </p>
                </form>
                
                    <br />
                  
                    <p ref={errMsgRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>
                        {errMsg}
                        </p>
                        
                    </div>
                </div>
     
                </div>*/