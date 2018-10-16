import React, { Component } from 'react';
import AppNavBar from './components/AppNavBar'
import RequestText from './components/RequestText'

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// [Two Components in current sprint]
// 1 - Navigation Bar
// 2 - Emotion Selection Oprions
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
      <AppNavBar />
      <RequestText />
      </div>
      </Provider>
    );
  }
}

export default App;
