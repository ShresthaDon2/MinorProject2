import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./css/Login.css"; // Import the CSS file
import { FaUser ,FaLock } from "react-icons/fa";

const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios.post("http://127.0.0.1:8000/login", user).then((res) => {
      alert(res.data.message);
      setLoginUser(res.data.user);

      if (res.data.redirectTo) {
        navigate(res.data.redirectTo);
      } else {
        navigate("/");
      }
    });
  };

  return (
    <div className="login-container">
      <div className="wrapper">
      <form action="">
        <h1>Login</h1>
      <div className="input-box">
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Enter your email"/>
        
        <FaUser className="icon"/>
        </div>
      <div className="input-box">
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Enter your Password"
        
      />
      <FaLock className="icon"/>
      </div>
      <button onClick={login} className="login-button">
        Login
      </button>
      <div>or</div>
      <button onClick={() => navigate("/register")} className="register-button">
        Register
      </button>
      </form>
    </div>
    </div>
  );
};
export default Login;