import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { MenuItems } from './MenuItems';
import axios from 'axios';
import './css/Header.css';
import {Link  } from "react-router-dom";
const Header = ({ onSearch }) => {
  const [state, setState] = useState({ clicked: false });
  const [inputValue, setInputValue] = useState('');
  const [locationInput, setLocationInput] = useState('');
  const [error, setError] = useState(null);

  const handleInputChange = (input) => {
    setInputValue(input);
  };

  const handleLocationChange = (location) => {
    setLocationInput(location);
  };

  const handleSearch = async () => {
    try {
      if (!inputValue || !locationInput) {
        setError('Please enter a destination and location');
        return;
      }

      const locationResponse = await axios.get('https://api.opencagedata.com/geocode/v1/json', {
        params: {
          q: locationInput,
          key: '2f1d27a18b7247cda3f24ae65f4a475d',
        },
      });

      const locationCoordinates = locationResponse.data.results[0]?.geometry;

      if (!locationCoordinates) {
        setError('Invalid location');
        return;
      }

      onSearch(inputValue, locationCoordinates); // Pass locationCoordinates to the onSearch function
      setError(null);
    } catch (error) {
      setError('Error searching users');
      console.error('Error searching users:', error);
    }
  };
const handleClick = () =>{
  setState({clicked: !this.state.clicked});
}
  return (
    <div className="header-container">
      <nav className="NavbarItems">
        <h1>Travel Partner </h1>
        <div className="menu-icons" onClick={handleClick}>
          <i className={state.clicked ? "fas fa-times" : "fas fa-bars"} onClick={() => setState({ clicked: !state.clicked })}>
          </i>
        </div>
        <ul className={state.clicked ? "nav-menu active" : "nav-menu"}>

          {MenuItems.map((item, index) => (
            <li key={index}>
              <Link className={item.cName} to ={item.url} >
                <i className={item.icon}></i>{item.title}
              </Link>
            </li>
          ))}
          <button>Sign Up</button>
        </ul>
      </nav>

      

      <div className="search-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => handleInputChange(e.target.value)}
          placeholder="Search by destination..."
        />
        <input
          type="text"
          value={locationInput}
          onChange={(e) => handleLocationChange(e.target.value)}
          placeholder="Enter your location..."
        />
        <FaSearch
          style={{ color: '#555', cursor: 'pointer' }}
          onClick={handleSearch}
        />
      </div>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default Header;
