import React, { Component } from 'react';
import AppNavBar from './components/AppNavBar'
import RequestText from './components/RequestText'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <AppNavBar></AppNavBar>
      <RequestText />
       
      </div>
    );
  }
}

export default App;
