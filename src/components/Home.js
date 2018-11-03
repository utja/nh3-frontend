import React from 'react';
import * as constants from '../constants';
import SpecialsContainer from './specials/SpecialsContainer';

class Home extends React.Component {

  render(){
    let now = new Date();
    let today = now.getDay();
    return(
      <div>
        <h1>Happy {constants.WEEKDAYS[today]}!</h1>
        <SpecialsContainer day={today}/>
      </div>
    )
  }
}

export default Home