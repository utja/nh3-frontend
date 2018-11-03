import React from 'react'

class SpecialCard extends React.Component {

  render(){
    return (
      <div className="special">{this.props.special.name}</div>
    )
  }

}

export default SpecialCard