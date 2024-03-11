/*import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./home.css"

export default function Home() {
  let navigate = useNavigate();

  const [destination, setDestination] = useState({
    location: '',
    startDate: '',
    endDate: '',
  });

  const { location, startDate, endDate } = destination;
  const [message, setMessage] = useState('');


  const onSubmit = async (e) => {
    e.preventDefault();
  
  
    
  };
  const onInputChange = (e) => {
    setDestination({ ...destination, [e.target.name]: e.target.value });
    setMessage('');
  };

  return (
    
      <div className='contain-1'>
        <div className='bdy justify-content-center align-items-center' >
    

        
          <div className='row doc '>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-1 mb-1 shadow box'>
             <h2 className='text-center m-4'>Plan Your Journey With Us</h2>
              <form onSubmit={(e) => onSubmit(e)}>
                <div className='mb-3 text-start'>
                  <label htmlFor='Location' className='form-label'></label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Where do you want to go?'
                    name='location'
                    value={location}
                    onChange={(e) => onInputChange(e)}
                    
                  />
                </div>
                <div className='row'>
                  <div className='col-md-6 mb-3'>
                    <label htmlFor='StartDate' className='form-label'>
                      Start Date
                    </label>
                    <input
                      type='date'
                      className='form-control'
                      placeholder='Start Date'
                      name='startDate'
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  <div className='col-md-6 mb-3'>
                    <label htmlFor='EndDate' className='form-label'>
                      End Date
                    </label>
                    <input
                      type='date'
                      className='form-control'
                      placeholder='End Date'
                      name='endDate'
                      value={endDate}
                      onChange={(e) => onInputChange(e)}
                      
                    />
                  </div>
                </div>
                <br />
                <div className='d-flex justify-content-center'>
                  <button type='submit' className='btn btn-outline-dark btn1'>
                    Start Planning
                  </button>
                </div>
              </form>
              {message && (
                <p style={{ textAlign: 'center', color: 'red' }}>{message}</p>
              )}
            </div>
          </div>
          <div className='row'>

          </div>
      </div>
      </div>
  );
}
*/

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import cover from '../../Assets/cover.png';
import '../Home/home.css';

export default function Home() {
  let navigate = useNavigate();

  const [destination, setDestination] = useState({
    location: '',
    startDate: '',
    endDate: '',
  });

  const { location, startDate, endDate } = destination;
  const [message, setMessage] = useState('');

  const onInputChange = (e) => {
    setDestination({ ...destination, [e.target.name]: e.target.value });
    setMessage('');
  };

  const onSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.get(`http://localhost:8080/destination/${location}`);
      const existingData = response.data;
      navigate("/Destination/destination");
      // Check if existingUser has data or not
      if (!existingData) {
        setMessage('Location not found. Please enter a valid location.');
        return;
      }

    } catch (error) {
      // Handle other errors (like network issues)
      setMessage('Error fetching data. Please try again.');
    }
};
  

return (
    <div className='container10 col-12'>
    
          <div className='col-12 image-div'>
          <img src={cover} alt='Travel' className='imgcover'/>
        </div>
             
{/*}
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow formtour'>
          
        <h2 className='text-center m-4'>Plan Your Journey</h2>
          <form onSubmit={(e) => onSubmit(e)}>
           
           
            <div className='mb-3 text-start'>
              <label htmlFor='Location' className='form-label'></label>
              <input
                type='text'
                className='form-control'
                placeholder='Where do you want to go?'
                name='location'
                value={location}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='row'>
              <div className='col-md-6 mb-3'>
                <label htmlFor='StartDate' className='form-label'>
                  Start Date
                </label>
                <input
                  type='date'
                  className='form-control'
                  placeholder='Start Date'
                  name='startDate'
                  value={startDate}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className='col-md-6 mb-3'>
                <label htmlFor='EndDate' className='form-label'>
                  End Date
                </label>
                <input
                  type='date'
                  className='form-control'
                  placeholder='End Date'
                  name='endDate'
                  value={endDate}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
            </div>
            <br />
            <div className='d-flex justify-content-center'>
              <button type='submit' className='btn btn-outline-dark'>
                Start Planning
              </button>
            </div>
          </form>
          {message && (
            <p style={{ textAlign: 'center', color: 'red' }}>{message}</p>
          )}
        </div>*/}
      
        </div>
  
  );
}
