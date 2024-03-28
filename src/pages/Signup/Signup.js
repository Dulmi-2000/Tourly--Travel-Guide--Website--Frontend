import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import signupimg from '../../Assets/signupimg.jpg';
import './signup.css';

export default function Signup() {
  const errMsgRef = useRef(null);
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Check if email already exists
     
      if (await axios.get(`http://localhost:8080/email/${email}`).data) {
        // Email already exists, display error message
        setErrMsg('Email already exists. Please login.');
      } else {
       
        if (password !== confirmPassword) {
          setErrMsg('Passwords do not match.');
          return;
        }
        
        // User doesn't exist, proceed with signup
        const response = await axios.post('http://localhost:8080/user', { username, email, password });
        console.log('Response:', response.data);
        navigate('/Login/Login');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  

  return (
    <div className='imgcov col-12' style={{ backgroundImage: `url(${signupimg})` }}>
      <div className='log col-12 container'>
        <div className='signinform col-12'>
          <div className='rightside  col-lg-6'>
            <h1 className='descript'>Explore Sri Lanka </h1>
            <h1 className='descript'>with Us</h1>
          </div>
          <div className='leftside col-12 col-lg-6'>
            <div className='frm col-12'>
              <h1 className='logdes'>Sign Up</h1>
              <br />
              <form onSubmit={(e) => handleSubmit(e)}>
                <div class="group col-12">
                  <input
                    className='input11'
                    placeholder='Enter your Name'
                    type='text'
                    id='username'
                    autoComplete='off'
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    required
                  />
                </div>
                <br />
                <div class="group">
                  <input
                    className='input11'
                    placeholder='Enter your Email'
                    type='email'
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
                    placeholder='Enter your Password'
                    type='password'
                    id='password'
                    autoComplete='off'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                  />
                </div>
                <br />
                <div class="group">
                  <input
                    className='input11'
                    placeholder='Confirm your Password'
                    type='password'
                    id='confirmPassword'
                    autoComplete='off'
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    required
                  />
                </div>
                <br />
                <button className='btn5' type='submit'>
                  Sign Up
                </button>
                <br />
                {errMsg && (
                  <p style={{ textAlign: 'center', color: 'red' }}>{errMsg}</p>
                )}
                <br />
                <hr />
                <div className='signinlink'>
                  <p className='p1' style={{ textAlign: 'center' }}>
                    Already have an account? <Link className='link2' to='/Login/Login'>Login</Link>
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
