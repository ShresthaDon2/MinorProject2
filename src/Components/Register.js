import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import "./css/Register.css";


const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = async () => {
    const { name, email, password, reEnterPassword } = user;

    if (!name || !email || !password || password !== reEnterPassword) {
      setError("Invalid input");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/register", user);
      alert(response.data.message);
      navigate("/login");
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        setError(`Server error: ${error.response.data.message}`);
      } else if (error.request) {
        // The request was made but no response was received
        setError("No response from server");
      } else {
        // Something happened in setting up the request that triggered an Error
        setError(`Error: ${error.message}`);
      }
    }
  };

  return (
    <div className="register-container">
    <div className="wrapper1">
   
        <h1>Create Account</h1>
        
       {error && <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>}
      <div className="input-box"> User Name 
      <input 
        type="text"
        name="name"
        value={user.name}
      
        onChange={handleChange}
        
      />
      </div>
      
      
      <div className="input-box"> Email 
      <input 
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
        
      />
      </div>
      <div className="input-box">Password 
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
      />
      </div>
      <div className="input-box"> Re-enter Password
      <input
        type="password"
        name="reEnterPassword"
        value={user.reEnterPassword}
        onChange={handleChange}
        
      /></div>
       <button onClick={register} className="register-button">
        Register
      </button>
      <div className="or">or</div>
      <button onClick={() => navigate("/login")} className="login-button">
        Login
      </button>
      </div>
      </div>
   
  );
};

export default Register;

