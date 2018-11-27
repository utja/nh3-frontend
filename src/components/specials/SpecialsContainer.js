import React from 'react'
import { connect } from 'react-redux'
import { getTodaysSpecials } from '../../actions/specials'
import TodaysSpecials from './TodaysSpecials';
import '../../assets/css/App.css'

class SpecialsContainer extends React.Component {
  componentDidMount(){
    this.props.getTodaysSpecials()
  }

  render(){
    return(
      <div className="specials-container">
        {this.props.loading ? 'Loading' : <TodaysSpecials specials={this.props.specials} day={this.props.day}/>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.specials.loadingSpecials,
    specials: state.specials.specials
  }
}

export default connect(mapStateToProps, { getTodaysSpecials })(SpecialsContainer)