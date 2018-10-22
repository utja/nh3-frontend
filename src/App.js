import React, { Component } from 'react';
import './assets/css/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import NoMatch from './components/NoMatch'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;
