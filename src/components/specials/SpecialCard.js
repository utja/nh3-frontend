import React from 'react'

class SpecialCard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      toggled: false
    }
  }

  // https://stackoverflow.com/questions/19700283/how-to-convert-time-milliseconds-to-hours-min-sec-format-in-javascript/32180863
  msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
      seconds = parseInt((duration / 1000) % 60),
      minutes = parseInt((duration / (1000 * 60)) % 60),
      hours = parseInt((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  }

  handleClick = event => {
    this.setState({toggled: !this.state.toggled})
  }

  render(){
    console.log(this.props);
    return (
      <div className="special" onClick={this.handleClick}>
        {this.state.toggled ? 
        <ul>
          <li>Back of card</li>
        </ul>
        :
        <ul>
          <li>{this.props.special.restaurant.name}</li>
          <li>Special: {this.props.special.name}</li>
          <li>Time: {this.msToTime(Date.parse(this.props.special.start_time))} - {this.msToTime(Date.parse(this.props.special.end_time))}</li>
        </ul> 
        }
      </div>
    )
  }

}

export default SpecialCard