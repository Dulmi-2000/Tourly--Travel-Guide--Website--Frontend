import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import coverImage from '../../Assets/CoverN.jpg';
import './HomeL.css';
import bcvideo from '../../Assets/tourly.mp4';

const HomeL = () => {
    const navigate = useNavigate();
    const [locationName, setLocationName] = useState('');
    const [suggestions, setSuggestions] = useState([]);

  const onInputChange = async (e) => {
    const inputValue = e.target.value;
    setLocationName(inputValue);

    // Fetch suggestions based on the entered letters
    try {
        if (inputValue.trim() === '') {
            // If the input value is empty, clear the suggestions
            setSuggestions([]);
        } else {
            const response = await fetch(`http://localhost:8080/destinations/${inputValue}`);
            const data = await response.json();
            setSuggestions(data); 
        }
    } catch (error) {
        console.error('Error fetching suggestions:', error);
    }
};

  /*navigate to the selected destination*/
    const onSuggestionClick = (location) => {
        navigate(`/Location/Location/${location}`);
    };

    return (
        <div className="all-page col-12">
            <div className="col-12">
                <video src={bcvideo} muted autoPlay loop id="main-picture" type="video/mp4"></video>
            </div>
            <div className="container ddd col-12">
                <div className="col-12 main-title">
                    <h1 className="title-details"> Discover Your Next Adventure with Tourly</h1>
                </div>
          <div className="search-main col-12">
            
            
              <div className='searchbar'>

                        <div className="search-group">
                            <input
                                className="input-main"
                                placeholder="Enter your destination"
                                type="text"
                                autoComplete="off"
                                value={locationName}
                                onChange={onInputChange}
                                required
                />
                
                {suggestions.length > 0 && (
                        <div className="suggestions">
                            <ul>
                                {suggestions.map((location) => (
                                    <li className='search-items' key={location} onClick={() => onSuggestionClick(location)}>
                                        {location}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
              </div>
              
                
                <div className='btn-border'>
                <button className='btn44'>Search</button>
             </div>
             
             
              </div>
                    
                    
                </div>
            </div>
            <br></br>
            <br />
        </div>
    );
};

export default HomeL;
