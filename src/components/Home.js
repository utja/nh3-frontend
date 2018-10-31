import React from 'react'
import * as constants from '../constants'

class Home extends React.Component {

  render(){
    let now = new Date()
    let today = now.getDay()
    return(
      <div>
        <h1>Happy {constants.WEEKDAYS[today]}!</h1>
      </div>
    )
  }
}

export default Home