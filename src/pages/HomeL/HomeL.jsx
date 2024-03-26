import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import coverImage from '../../Assets/CoverN.jpg';
import './HomeL.css'
import bcvideo from '../../Assets/tourly.mp4'

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
        {/* <div className='main-picture col-12' style={{ backgroundImage: `url(${coverImage})` }}>
       
        </div> */}
<<<<<<< HEAD
      <div className=' col-12'>
        <video autoPlay loop muted  id='main-picture'>
          <source src={bcvideo} type='video/mp4' />
        </video>
=======
      <div className='col-12'>
        <video src={bcvideo} muted autoPlay loop id='main-picture' type="video/mp4"></video>
>>>>>>> 4ded64629006a741c95a7da7bba2c5e301dc1203

      </div>
        <div className='container ddd col-12' onSubmit={(e) => onSubmit(e)}>
          <div className='col-12 main-title'>
          
          </div>
       <div className='search-main col-12'>
       <form  onSubmit={onSubmit}>
          <div className="search-group col-12">
            
            <input
              className='input-main'
              placeholder='Enter your destination'
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
          <br></br><br/>
    </div>
  )
}

export default HomeL