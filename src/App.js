import React, { useState } from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Homepage from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Service from './Components/Service';
import Dashboard from './Components/Dashboard';
import Front from './Components/Front';

function App() {
  const [user, setLoginUser] = useState({});

  return (
    <div className="App">
      <Router>
    
        <Routes>
          {/* <Route path="/" element={user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />} />
          <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Homepage/>}/>
           */}
           
          <Route path="/about" element={<About/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/contact" element={<Contact/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;