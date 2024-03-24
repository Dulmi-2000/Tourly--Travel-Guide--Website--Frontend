// import axios from 'axios';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './signup.css';
// import { Link } from 'react-router-dom';

// export default function Signup() {

//   let navigate = useNavigate();

//   const [user, setUser] = useState({
//     password: '',
//     username: '',
//     email: '',
//   });

//     const { password, username, email } = user;
    
//   const [message, setMessage] = useState('');

//   const onInputChange = (e) => {
//     e.preventDefault();
//     setUser({ ...user, [e.target.name]: e.target.value });
//     setMessage('');
//   };

    
//     //handle user login
//   const onSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Check if the email exists in the database
//       const response = await axios.get(`http://localhost:8080/email/${email}`);
//       const existingUser = response.data;
  
//       if (!existingUser) {
//         // If email doesn't exist, register the user
//         await axios.post("http://localhost:8080/user", user);
        
//       } else {
//         // If email exists, display a message
//         setMessage('Email already exists. Please log in.');
//       }
//     } catch (error) {
//       // Handle 404 error when email doesn't exist
//       if (error.response && error.response.status === 404) {
//         try {
//           // Add the user to the database since the email doesn't exist
//           await axios.post("http://localhost:8080/user", user);
//           navigate("/Login/Login");
//         } catch (addError) {
//           console.error('Error adding user:', addError);
//         }
//       } else {
        
//       }
//     }
//   };
    

//   return (
//     <div className='container'>
      
//         <div className='signup-box border rounded p-4 shadow'>
//           <h2 className='text-center m-4'>Sign Up</h2>
//           <br></br>
//           <form onSubmit={(e) => onSubmit(e)}>
//             <div className='mb-3 text-start'>
//               <label htmlFor='Email' className='form-label'>
//                 Email :
//               </label>
//               <input
//                 type={'text'}
//                 className='form-control'
//                 placeholder='Enter your email'
//                 name='email'
//                 value={email}
//                 onChange={(e) => onInputChange(e)}
//               ></input>
//             </div>
//             <div className='mb-3 text-start'>
//               <label htmlFor='Username' className='form-label'>
//                 Username :
//               </label>
//               <input
//                 type={'text'}
//                 className='form-control'
//                 placeholder='Enter your username'
//                 name='username'
//                 value={username}
//                 onChange={(e) => onInputChange(e)}
//               ></input>
//             </div>
//             <div className='mb-3 text-start'>
//               <label htmlFor='Password' className='form-label'>
//                 Password :
//               </label>
//               <input
//                 type={'password'}
//                 className='form-control'
//                 placeholder='Enter your password'
//                 name='password'
//                 value={password}
//                 onChange={(e) => onInputChange(e)}
//               ></input>
//             </div>
//             <div className='d-flex justify-content-center'>
//               <button type='submit' className='btn btn-outline-primary '>
//                 Sign Up
//               </button>
//                 </div>
                      
//           </form>
//           {message && (
//             <p style={{ textAlign: 'center', color: 'red' }}>{message}</p>
//           )}
//           <br></br>
//           <p style={{ textAlign: 'center' }}>
//             Already have an account?{' '}
//             <Link className='link1' to='/Login/Login'>
//               Sign In
//             </Link>
//           </p>
//         </div>
   
//     </div>
//   );
// }


import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import signupimg from '../../Assets/signupimg.jpg';
import './signup.css';

export default function Signup() {
    const errMsgRef = useRef(null);
    const userRef = useRef(null);
    const navigate = useNavigate();

    const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [repwd, setRePwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    

   
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { username, password,email, repassword } = user;
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
            }
            else
            {
                console.log("User not found");
                setErrMsg('User not found. Please sign up.');
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle errors here, log or set error messages as needed
        }
    };


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
                <br/>
            
                  <form onSubmit={(e) => handleSubmit(e)}>


                        <div class="group col-12">

                            
                            <input
                                className='input11'
                                placeholder='Enter your Name'
                                type='text'
                                id='name'
                                ref={userRef}
                                autoComplete='off'
                                onChange={(e) => setName({ ...user, username: e.target.value })}
                                value={user.name}
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
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                                required
                    />
                    </div>
                    
                  <br />
                  <div class="group">

                    <input
                                className='input11'
                                placeholder='Confirm your Password'
                                type='password'
                                id='password'
                                autoComplete='off'
                                onChange={(e) => setRePwd(e.target.value)}
                                value={repwd}
                                required
                    />
                    </div>
                    <br></br>
                             
                      

                    <br />
                   
                    
                        <button className='btn5' type='submit'>
                            Sign Up
                      </button>
                                <br></br>
                                <br></br>
                                <hr></hr>

                                <div className='signinlink'>

                             
                        <p  className='p1' style={{ textAlign: 'center' }}>
                        Already an account? <Link className='link2' to='/Login/Login'>Login</Link>
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