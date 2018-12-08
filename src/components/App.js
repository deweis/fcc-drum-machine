import React, { Component } from 'react';
import Display from './Display';
import Pads from './Pads';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="drum-machine" className="App">
        <h1>fCC Drum</h1>
        <div className="section">
          <div className="container">
            <div className="row">
              <Display id="display" />
            </div>
            <div className="row">
              <Pads />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
