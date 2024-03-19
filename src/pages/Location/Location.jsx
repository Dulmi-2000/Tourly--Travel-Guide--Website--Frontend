import React, { useEffect, useState } from 'react';
import { Link,  useParams } from 'react-router-dom';
import axios from 'axios';
import './location.css'
import { CiLocationOn } from "react-icons/ci";

export default function Location() {
    
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
        <div className='contentgrid'>
          <h2>Explore {locationName}</h2>
                      <br></br>
                      
              
                      
                  {/*new*/}
                  <div className='singleDestination'>
                      <div className='imagediv'>
                          <img src={imageLink} alt={district}></img>
                      </div>
                      
                      <div className='cardinfo'>
                          <h5 className='destTitle'>{locationName}</h5>

                          <span className='content-flex content'>
                              <CiLocationOn className='iconsearch' />
                              <span className='name'>{district}</span>
                          </span>

                          <div className='desc'>
                              <p>{otherDetails}</p>
                          </div>
                      </div>

                      </div>

                      </div>
                   {/*   <Link className='btn btn-primary my-2' to={"/"}>Back to Home</Link>*/}
              </div>
              
              <div>
                  
              </div>
              </div>
              

  )
}
     /*     <div className='card'>
                          <div className='card-header'>
            
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
                      */