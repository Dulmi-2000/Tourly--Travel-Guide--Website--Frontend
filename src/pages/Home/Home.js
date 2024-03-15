
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import cover from '../../Assets/cover.png';
import travelling from '../../Assets/travelling.png';
import '../Home/home.css';
import { Link, useParams } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const [locationName, setLocationName] = useState('');

  const onInputChange = (e) => {
    setLocationName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    navigate(`/Destination/destination/${locationName}`);
  };

  return (
    <div className='container10 col-12'>
      <div className='col-12 image-div'>
        <img src={cover} alt='Travel' className='imgcover' />
      </div>
      <br />
      <div className='frm1' onSubmit={(e) => onSubmit(e)}>
        <h4>Discover new attractions and experiences to match your interests</h4>
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
          </div>
          <br />
          <br />
          
        </form>
      </div>
    </div>
  );
}
