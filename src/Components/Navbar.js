import React , {useState }from 'react'
import './css/Navbar.css'
import { MenuItems } from './MenuItems'
import {Link  } from "react-router-dom";

const Navbar = ({}) => {
    const [state, setState] = useState({ clicked: false });
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

    
      
    </div>
  )
}

export default Navbar;
