import React from 'react'
import '../assets/css/NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class NavBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isUserFocusing: false,
    }
  }

  // componentDidMount() {
  //   document.body.addEventListener('click', this.handleClickOutside);
  // }

  // componentWillUnmount() {
  //   document.body.removeEventListener('click', this.handleClickOutside);
  // }

  handleClick = () => {
    this.setState({isUserFocusing: !this.state.isUserFocusing})
  }

  // handleClickOutside(event) {
  //   debugger
  //   if (!document.body.contains(event.target)) {
  //     console.log('outside click');
  //   }
  // }

  render(){
    return(
    <div className="navbar">
      <button onClick={this.handleClick}>
        <FontAwesomeIcon icon="search" color="white" size="lg" />
        {this.state.isUserFocusing ? "SEARCH BAR" : null }
      </button>
    </div>
    )
  }
}

export default NavBar