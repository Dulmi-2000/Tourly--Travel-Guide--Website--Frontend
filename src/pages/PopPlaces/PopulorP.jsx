import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRef } from 'react';
import './PopularP.css';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const PopulorP = () => {
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

  const handleImageClick = (imageLink) => {
     
    console.log('Image clicked:', imageLink);
  };


  return (
    <div className='container PopularP-Container col-12'>
      {/* Left arrow positioned in the middle */}
      <div className='left-arrow-container'>
        <MdChevronLeft onClick={slideLeft} size={40} className='left-arrow' />
      </div>

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
      </div>

    
      <div className='right-arrow-container'>
        <MdChevronRight onClick={slideRight} size={40} className='right-arrow' />
      </div>
    </div>
  );
};

export default PopulorP;
