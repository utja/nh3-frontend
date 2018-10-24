import React from 'react'
import '../assets/css/NavBar.css'
import { NavLink } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";

const NavBar = props => {
  const handleClick = () => {
    console.log('hello')
  }
  return(
    <div className="navbar">
      <NavLink to="/about">About</NavLink>
      <NavLink to="/">Home</NavLink>
      <FaSearch color="white" onClick={handleClick} />
    </div>

//     <div class="navbar">
//   <a href="#home">Home</a>
//   <a href="#news">News</a>
//   <div class="dropdown">
//     <button class="dropbtn">Dropdown 
//       <i class="fa fa-caret-down"></i>
//     </button>
//     <div class="dropdown-content">
//       <a href="#">Link 1</a>
//       <a href="#">Link 2</a>
//       <a href="#">Link 3</a>
//     </div>
//   </div> 
// </div>
  )
}

export default NavBar