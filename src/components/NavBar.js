import React from 'react'
import '../assets/css/NavBar.css'
import { NavLink } from 'react-router-dom'

const NavBar = props => {
  const handleClick = () => {
    console.log('hello')
  }
  return(
    <div className="navbar">
      <NavLink to="/about">About</NavLink>
      <NavLink to="/">Home</NavLink>
    </div>
  )
}

export default NavBar