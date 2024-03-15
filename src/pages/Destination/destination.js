import React, { useEffect, useState } from 'react';
import { Link,  useParams } from 'react-router-dom';
import axios from 'axios';
import './destination.css'

export default function ViewUSer() {


    
  const [location, setLocation] = useState({
    description: '',
    mapLink: '',
    locationName: ''
  });
  const { locationName } = useParams();


  const { description,imageLink,id,district, mapLink,otherDetails } = location;

  useEffect(() => {
    loadUser();
}, []);

const loadUser = async () => {
    try {
        const result = await axios.get(`http://localhost:8080/destination/${locationName}`);
        setLocation(result.data);
    } catch (error) {
        console.error('Error loading user:', error);
    }
}

  return (
     
    <div className='container'>
      <div className='row'>
        <div className='col md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>User Details</h2>
                      <br></br>
                      
                      <div className='card'>
                          <div className='card-header'>
            <h4>  Details of user id  </h4> {id}
              <br></br>
              <br></br>
                              <ul className='list-droup list-group-flush'>
                                  <li className='list-group-item'>
                                  <b>Description :</b>   {description}
                                  </li> 
                                  <li className='list-group-item'>
                                  <b>image : </b> <img src={imageLink} alt='image' className='image'></img>
                                  </li> 
                                  <li className='list-group-item'>
                                  <b>locationName :   </b>  {locationName}
                </li> 
                <li className='list-group-item'>
                                  <b>image : </b> <img src={mapLink} alt='image' className='image'></img>
                                  </li> 
                              </ul>
                              
                          </div>
                          
                      </div>
                      <Link className='btn btn-primary my-2' to={"/"}>Back to Home</Link>
                  </div>
              </div>
              </div>

  )
}
