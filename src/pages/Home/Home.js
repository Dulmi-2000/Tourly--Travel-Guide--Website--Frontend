import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tourly from '../../Assets/tourly.png';
import '../Home/home.css';
import Blog from '../Blog/Blog';

export default function Home() {
  const navigate = useNavigate();
  const [locationName, setLocationName] = useState('');

  const onInputChange = (e) => {
    setLocationName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    navigate(`/Location/Location/${locationName}`);
  };

  return (
   
    <div className='container10 col-12'>
  
    
      <div className='col-12 image-div'>
        <img src={tourly} alt='Travel' className='imgcover' />
     
      <div className='frm1' onSubmit={(e) => onSubmit(e)}>
          <p className='searchdes'>
          Discover <br/> Your Next Adventure <br/> with Tourly
            
          </p>
       
           <form className='form' onSubmit={onSubmit}>
          <div className="group-data">
            <svg width="300px" height="300px" viewBox="0 0 1024 1024" className="icon1" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" strokeWidth="40.96">
              {/* SVG path here */}
            </svg>
            <input
              className='input'
              placeholder='Enter your destination'
              type='text'
              autoComplete='off'
              value={locationName}
              onChange={onInputChange}
              required
              />
               <button className='btn4'>Search</button>
            </div>
           
          <br />
          <br />
          
          </form>
          </div>
      <br />
      </div>
    </div>
  );
}
