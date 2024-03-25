
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import coverImage from '../../Assets/CoverN.jpg';
import './HomeL.css'


const HomeL = () => {
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
    <div className='all-page col-12'>
        <div className='main-picture col-12' style={{ backgroundImage: `url(${coverImage})` }}>
       
        </div>
        <div className='container ddd col-12' onSubmit={(e) => onSubmit(e)}>
          <div className='col-12 main-title'>
         <h1 className='title-details'> Discover Your Next Adventure with Tourly</h1>
            
          </div>
       <div className='search-main col-12'>
       <form  onSubmit={onSubmit}>
          <div className="search-group col-12">
            <svg width="400px" height="300px" viewBox="0 0 1024 1024" className="icon1" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" strokeWidth="40.96">
              {/* SVG path here */}
            </svg>
            <input
              className='input-main'
              placeholder='    Enter your destination'
              type='text'
              autoComplete='off'
              value={locationName}
              onChange={onInputChange}
              required
              />
               <button className='btn44'>Search</button>
            </div>
           
          <br />
          <br />
          
          </form>
       </div>
           
          </div>
    </div>
  )
}

export default HomeL