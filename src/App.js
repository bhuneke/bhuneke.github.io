import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './App.css';
import IconsBar from './components/IconsBar';
import Description from './components/Description';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className='main-content'>
          <div >
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <h4>DEVELOPER / DESIGNER</h4>
          <Description />
          <IconsBar />
        </div>
        <div className='picture'/> 
      </div>
    );
  }
}

export default App;
