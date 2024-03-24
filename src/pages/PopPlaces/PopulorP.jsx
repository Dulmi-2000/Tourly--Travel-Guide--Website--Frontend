




import React, { useRef } from 'react';
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

  // Array of image URLs
  const images = [
    'https://leisuregrouptravel.com/wp-content/uploads/2021/01/Photo-Credit-Austin-Adventures-North-Carolina-Grandfather-Mtn.jpg',
    'https://leisuregrouptravel.com/wp-content/uploads/2021/01/Photo-Credit-Austin-Adventures-North-Carolina-Grandfather-Mtn.jpg',
    'https://leisuregrouptravel.com/wp-content/uploads/2021/01/Photo-Credit-Austin-Adventures-North-Carolina-Grandfather-Mtn.jpg',
    'https://leisuregrouptravel.com/wp-content/uploads/2021/01/Photo-Credit-Austin-Adventures-North-Carolina-Grandfather-Mtn.jpg',
    'https://leisuregrouptravel.com/wp-content/uploads/2021/01/Photo-Credit-Austin-Adventures-North-Carolina-Grandfather-Mtn.jpg',
    
  ];

  return (
    <div className='container PopularP-Container col-12'>
    {/* Left arrow positioned in the middle */}
    <div className='left-arrow-container'>
      <MdChevronLeft onClick={slideLeft} size={40} className='left-arrow' />
    </div>
    
    <div className='pictures' ref={sliderRef} style={{ overflowX: 'scroll', scrollBehavior: 'smooth' }}>
      {images.map((imageUrl, index) => (
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
