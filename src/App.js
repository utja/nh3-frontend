import React, { Component } from 'react';
import './assets/css/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import NoMatch from './components/NoMatch'
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
