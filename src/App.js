import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './App.css';
import IconsBar from './components/IconsBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <IconsBar/>
      </div>
    );
  }
}

export default App;
