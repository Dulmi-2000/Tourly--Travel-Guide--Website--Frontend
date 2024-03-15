import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';
import { Link } from 'react-router-dom';

export default function Signup() {

  let navigate = useNavigate();

  const [user, setUser] = useState({
    password: '',
    username: '',
    email: '',
  });

    const { password, username, email } = user;
    
  const [message, setMessage] = useState('');

  const onInputChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
    setMessage('');
  };

    
    //handle user login
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      // Check if the email exists in the database
      const response = await axios.get(`http://localhost:8080/email/${email}`);
      const existingUser = response.data;
  
      if (!existingUser) {
        // If email doesn't exist, register the user
        await axios.post("http://localhost:8080/user", user);
        
      } else {
        // If email exists, display a message
        setMessage('Email already exists. Please log in.');
      }
    } catch (error) {
      // Handle 404 error when email doesn't exist
      if (error.response && error.response.status === 404) {
        try {
          // Add the user to the database since the email doesn't exist
          await axios.post("http://localhost:8080/user", user);
          navigate("/Login/Login");
        } catch (addError) {
          console.error('Error adding user:', addError);
        }
      } else {
        
      }
    }
  };
    

  return (
    <div className='container'>
      
        <div className='signup-box border rounded p-4 shadow'>
          <h2 className='text-center m-4'>Sign Up</h2>
          <br></br>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className='mb-3 text-start'>
              <label htmlFor='Email' className='form-label'>
                Email :
              </label>
              <input
                type={'text'}
                className='form-control'
                placeholder='Enter your email'
                name='email'
                value={email}
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>
            <div className='mb-3 text-start'>
              <label htmlFor='Username' className='form-label'>
                Username :
              </label>
              <input
                type={'text'}
                className='form-control'
                placeholder='Enter your username'
                name='username'
                value={username}
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>
            <div className='mb-3 text-start'>
              <label htmlFor='Password' className='form-label'>
                Password :
              </label>
              <input
                type={'password'}
                className='form-control'
                placeholder='Enter your password'
                name='password'
                value={password}
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>
            <div className='d-flex justify-content-center'>
              <button type='submit' className='btn btn-outline-primary '>
                Sign Up
              </button>
                </div>
                      
          </form>
          {message && (
            <p style={{ textAlign: 'center', color: 'red' }}>{message}</p>
          )}
          <br></br>
          <p style={{ textAlign: 'center' }}>
            Already have an account?{' '}
            <Link className='link1' to='/Login/Login'>
              Sign In
            </Link>
          </p>
        </div>
   
    </div>
  );
}
