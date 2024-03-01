
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Hero   from "./Hero";
import'./css/Dashboard.css';
import Card from './Card';
const Dashboard = () => {
  const [userData, setUserData] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
    // Fetch all users initially
    axios.get('http://127.0.0.1:8000/users')
      .then(response => {
        setUserData(response.data);
        setOriginalData(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const handleSearch = async (destination, location) => {
    try {
      let filteredUsers = [];

      if (destination.trim() === '') {
        // If the search input is empty, show all users from the original data
        filteredUsers = originalData;
      } else {
        console.log('Destination:', destination);
        console.log('Location:', location); // Add this line to check the location received

        const response = await axios.get(`http://127.0.0.1:8000/users/search`, {
          params: {
            destination,
            location: JSON.stringify(location), // Ensure coordinates is stringified
          },
        });
        filteredUsers = response.data;
      }

      setUserData(filteredUsers);
    } catch (error) {
      console.error('Error searching users:', error);
    }
  };

  return (
    <div>
  
      
        <Header onSearch={handleSearch} />
      <div className="user-cards-container">
        {Array.isArray(userData) && userData.length > 0 ? (
          userData.map(user => (
            <Card key={user.username + user.rating} user={user} />
          ))
        ) : (
          <p></p>
        )}
    
      </div>
    </div>
  );
};

export default Dashboard;