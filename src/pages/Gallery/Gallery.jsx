import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './gallery.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Navbar from '../../layout/Navbar/Navbar';


const Gallery = () => {


  const [location] = useState({
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



  // Array of image URLs
  const images = [
    require('../../Assets/coastal123.jpeg'),
    'https://leisuregrouptravel.com/wp-content/uploads/2021/01/Photo-Credit-Austin-Adventures-North-Carolina-Grandfather-Mtn.jpg',
    'https://leisuregrouptravel.com/wp-content/uploads/2021/01/Photo-Credit-Austin-Adventures-North-Carolina-Grandfather-Mtn.jpg',
    'https://leisuregrouptravel.com/wp-content/uploads/2021/01/Photo-Credit-Austin-Adventures-North-Carolina-Grandfather-Mtn.jpg',
    'https://leisuregrouptravel.com/wp-content/uploads/2021/01/Photo-Credit-Austin-Adventures-North-Carolina-Grandfather-Mtn.jpg',
    'https://leisuregrouptravel.com/wp-content/uploads/2021/01/Photo-Credit-Austin-Adventures-North-Carolina-Grandfather-Mtn.jpg',
    
  ];


  const [imageLinks, setImageLinks] = useState([]);

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = async () => {
    try {
      const result = await axios.get('http://localhost:8080/destinations');
      setImageLinks(result.data); 
      console.log(result);
    } catch (error) {
      console.error('Error loading images:', error);
    }
  };


  const navigate = useNavigate();

 const handleImageClick = (imageLink1, locationName) => {
    console.log('Image clicked:', imageLink1);
    navigate(`/Location/Location/${locationName}`);
};

  


return (
  <div className='container col-12'>
    <div className='col-12'>
      <h1>Gallery</h1>
    </div>

    <br></br>

  <div className='whole-picture col-12'>
    {imageLinks.map((location, index) => (
      <div key={index} className="locations-container1 ">
        {location.imageLink && (
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          <img
            src={location.imageLink}
            alt={`Location ${index} Image`}
            className='places-img1'
            onClick={() => handleImageClick(location.imageLink1, location.locationName)} 
          />
        )}
      </div>
      
    ))}
      </div>
 
    

    
</div>

);

};

export default Gallery;
