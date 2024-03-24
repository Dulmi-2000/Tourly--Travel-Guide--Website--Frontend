import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRef } from 'react';
import './PopularP.css';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const PopulorP = () => {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 500;
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 500;
    }
  };

  const [imageLinks, setImageLinks] = useState([]);

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = async () => {
    try {
      const result = await axios.get('http://localhost:8080/destination/image/beach');
      setImageLinks(result.data); // Update image links state with the fetched data
      console.log(result);
    } catch (error) {
      console.error('Error loading images:', error);
    }
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
          <img key={index} src={imageUrl} alt={`Image ${index}`} className='places' />
        ))}
      </div>

      {/* Right arrow positioned on the right side */}
      <div className='right-arrow-container'>
        <MdChevronRight onClick={slideRight} size={40} className='right-arrow' />
      </div>
    </div>
  );
};

export default PopulorP;
