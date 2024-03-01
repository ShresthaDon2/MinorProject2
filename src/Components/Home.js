import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './css/Home.css';

const Home = () => {
  const [profile, setProfile] = useState({
    username: "",
    image: null,
    age: "",
    destination: "",
    gender: "",
    numberOfMembers: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      setProfile({
        ...profile,
        [name]: e.target.files[0],
      });
    } else {
      setProfile({
        ...profile,
        [name]: value,
      });
    }
  };

  const submitHandler = () => {
    setIsLoading(true);

    const formData = new FormData();
    formData.append("username", profile.username);
    formData.append("image", profile.image);
    formData.append("age", profile.age);
    formData.append("destination", profile.destination);
    formData.append("gender", profile.gender);
    formData.append("numberOfMembers", profile.numberOfMembers);

    axios.post("http://127.0.0.1:8000/profile", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        alert('User profile submitted successfully');
        navigate('/dashboard');
      })
      .catch((error) => {
        console.error("Error submitting user profile", error);
      
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="homepage">
      <form>
        <input
          type="text"
          name="username"
          value={profile.username}
          placeholder="Enter your Username"
          onChange={handleChange}
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          placeholder="Add Image"
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          value={profile.age}
          placeholder="Enter your Age"
          onChange={handleChange}
        />
        <input
          type="text"
          name="destination"
          value={profile.destination}
          placeholder="Enter your Destination"
          onChange={handleChange}
        />
        <select
          name="gender"
          value={profile.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="number"
          name="numberOfMembers"
          value={profile.numberOfMembers}
          placeholder="Number of Members"
          onChange={handleChange}
        />
        <button type="button" onClick={submitHandler} disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Home;