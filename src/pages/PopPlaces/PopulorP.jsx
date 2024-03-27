import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRef } from 'react';
import './PopularP.css';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';


const PopulorP = () => {

  
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

  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 320;
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 320;
    }
  };


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
      const result = await axios.get('http://localhost:8080/destination/image/beach');
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
    <div className='container PopularP-Container col-12'>
      {/* Left arrow positioned in the middle */}
      <div className='left-arrow-container'>
        <MdChevronLeft onClick={slideLeft} size={40} className='left-arrow' />
      </div>

<<<<<<< HEAD
      <div className='pictures' ref={sliderRef} style={{ overflowX: 'scroll', scrollBehavior: 'smooth' }}>
        {/* Render each image in the imageLinks array */}
        {imageLinks.map((imageUrl, index) => (
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          <img
            key={index}
            src={imageUrl}
            alt={`Image ${index}`}
            className='places'
            onClick={() => handleImageClick(index)} 
          />
          
        ))}
        <div></div>
      </div>
=======
<div className='pictures' ref={sliderRef} style={{ overflowX: 'scroll', scrollBehavior: 'smooth' }}>
  {imageLinks.map((location, index) => (
    <div key={index} className="location-container">
      

      {[location.imageLink].map((imageUrl, imgIndex) => (
        // eslint-disable-next-line jsx-a11y/img-redundant-alt
        <img
          key={imgIndex}
          src={imageUrl}
          alt={`Location ${index} Image ${imgIndex}`}
          className='places'
          onClick={() => handleImageClick(location.imageLink1, location.locationName)} 
        />
      ))}
    </div>
  ))}
</div>

>>>>>>> 6212886f807499b545d0e889ff743bec266d52d3

    
      <div className='right-arrow-container'>
        <MdChevronRight onClick={slideRight} size={40} className='right-arrow' />
      </div>
    </div>
  );
};

export default PopulorP;
