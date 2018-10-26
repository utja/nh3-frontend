import React from 'react'

class Search extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      search: ''
    }
  }

  // add event listener so toggle search open/close
  componentDidMount() {
    document.body.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.handleClickOutside);
  }

  handleChange = (event) => {
    this.setState({search: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // TO-DO - set up backend for filter/search with suggestions
  }

  // check if user clicks outside of search bar or search icon
  // to toggle search by setting NavBar state of isUserFocusing to false
  handleClickOutside = (event) => {
    let search = document.getElementById('search');
    let button = document.getElementById('search-button');
    if (!search.contains(event.target) && !button.contains(event.target)) {
      this.props.handleClick();
    }
  }
  
  render(){
    const { search } = this.state;
    const { placeholder } = this.props;
    return(
      <form onSubmit={this.handleSubmit} id="search">
        <input name='search' type='text' value={search} onChange={this.handleChange} placeholder={placeholder} />
      </form>
    )
  }
}

export default Search