import React from 'react'
import '../assets/css/NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavBar = props => {
  const handleClick = () => {
    console.log('hello')
  }
  return(
    <div className="navbar">
      <button onClick={handleClick}>
        <FontAwesomeIcon icon="search" color="white" size="lg" />
      </button>
    </div>
  )
}

export default NavBar