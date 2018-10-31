import React from 'react'
import '../assets/css/NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Search from './Search';
import logo from '../assets/images/logo.png'

class NavBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isUserFocusing: false,
    }
  }

  // toggle search bar open/close
  handleClick = () => {
    this.setState({isUserFocusing: !this.state.isUserFocusing})
  }

  render(){
    return(
    <div className="navbar">
      <img src={logo} alt="logo" style={{height: '30px', width: '30px'}}></img>
      <button onClick={this.handleClick} id="search-button">
        <FontAwesomeIcon icon="search" color="white" size="lg" />
      </button>
      {this.state.isUserFocusing ? <Search placeholder="Beer, Wine, Food" handleClick={this.handleClick} /> : null }
    </div>
    )
  }
}

export default NavBar