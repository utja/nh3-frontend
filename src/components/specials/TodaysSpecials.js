import React from 'react'
import SpecialCard from './SpecialCard';

class TodaysSpecials extends React.Component {

  render(){
    const { specials, day } = this.props;
    const todaysSpecials = specials.filter(special => special.day_id === day)
    const mappedSpecials = todaysSpecials.map(special => {
      return <SpecialCard key={special.id} special={special} />
    })
    console.log(this.props)
    console.log(todaysSpecials)
    return(
      <div className="todays-specials">
        <h1>Today's Specials</h1>
        <div className="todays-container">
          {mappedSpecials}
        </div>
      </div>
    )
  }
}

export default TodaysSpecials
