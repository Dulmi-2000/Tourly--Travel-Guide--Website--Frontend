import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './location.css'
import 'bootstrap/dist/css/bootstrap.css';
import { CiLocationOn } from "react-icons/ci";
import Navbar from '../../layout/Navbar/Navbar';

export default function Destination() {

  <Navbar></Navbar>

  const [location, setLocation] = useState({
    description1: '',
    description2: '',
    description3: '',
    description4: '',
    imageLink: '',
    imageLink1: '',
    imageLink2: '',
    imageLink3: '',
    locationName: '',
    district: '',
    mapLink: '',
    list1: '',
    list2: '',
    list3: '',
    list4: '',
    list5: '',
    list6: '',
    list7: '',
    list8: '',
    list9: '',
    list10: '',
    ltopic1: '',
    ltopic2: '',
    ltopic3: '',
    ltopic4: '',
    ltopic5: '',
    ltopic6: '',
    ltopic7: '',
    ltopic8: '',
    ltopic9: '',
    ltopic10: '',
    date: '',
    datedes1: '',
    datedes2: '',
    datedes3: '',
    datedes4: '',
    otherDetails: '',

  });
  const { locationName } = useParams();


  const { description1,description2,description3,description4,ltopic1,ltopic2,ltopic3,ltopic4,ltopic5,ltopic6,ltopic7,ltopic8,ltopic9,ltopic10,id,district, list1,list2,list3,list4,list5,list6,list7,list8,list9,list10,mapLink,otherDetails,date,datedes1,datedes2,datedes3,datedes4,imageLink,imageLink1,imageLink2,imageLink3 } = location;

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
    <div className='container full'>
      
      
    <h1 className='topic col-12'>{locationName && locationName.charAt(0).toUpperCase() + locationName.slice(1)}</h1>

    <br></br>
    <div className='imagebox col-12'>

      <div className=' col-12 col-lg-8 col-md-8 col-sm-12'>
        <img src={imageLink}
          alt='' className='imagelink11'>
          
        </img>
      </div>

      <div className='twoimages1 col-12 col-lg-4 col-sm-4'>
      
    
      <div className='col-12'>
      <img src={imageLink1}
          alt='' className='imagelink2'>
          
        </img>
      </div>
      <div className='col-12'>
      <img src={imageLink2}
          alt='' className='imagelink2'>
          
        </img> 
      </div>
      </div>

    </div>

    <span className='content-flex locationd col-12'>
      <CiLocationOn className='iconsearch' />
        <span className='name col-12'>{district}</span>
        </span>
  
    <div className='row2'>
      <br></br>
      <br />
      <h3 className='destDetails'>Destination Details</h3>
     <br/>
      <p>
        {description1}
        
        {description2}
      </p>

      <p>
        {description3}
        {description4}
      </p>
      <div>
        <br>
        </br>

        
        <h3>Things To Do</h3>
      <br></br>
        <div>
          <ul className='dolist'> 
            <li>
              <b>{ltopic1}</b>
              {list1}
            </li>
            <li>
              <b>{ltopic2} </b>
              {list2}
            </li>
            <li>
              <b> {ltopic3}</b>
              {list3}
            </li>
            <li>
              <b>{ltopic4}</b>
              {list4}
            </li>
            <li>
              <b>{ltopic5} </b>
              {list5}
            </li>
            <li>
              <b>{ltopic6}</b>
              {list6}
            </li>
            <li>
              <b>{ltopic7} </b>
              {list7}
            </li>
            <li>
              <b> {ltopic8}</b> 
              {list2}
            </li>
          </ul>
           
          <br></br>
          <div className='row3'>
            <h3>Best Time To Visit</h3>
            <br></br>
          </div>
          <b>{date}</b>
          <p>
            {datedes1}
            {datedes2}
   
            {datedes3}
            {datedes4}
          </p>


<br></br>

          <div className='row4'>
            <h3>View On Map</h3>
            <div className="map-container">
    <iframe
      title="Google Map"
      className="map-iframe"
      src={mapLink}
      allowFullScreen
    ></iframe>
            </div>
            
            </div>
    </div>
        </div>
      </div>
    </div>

      
  )
}
