import React, { Component } from 'react';
import Display from './Display';
import Pads from './Pads';
import './App.css';

class App extends Component {
  state = {
    currentPad: 'Play me..'
  };

  onPadClick = padId => {
    console.log(padId);
    this.setState({
      currentPad: padId
    });
  };

  render() {
    return (
      <div id="drum-machine" className="App">
        <h1>fCC Drum</h1>
        <div className="section">
          <div className="container">
            <div className="row">
              <Display id="display" pad={this.state.currentPad} />
            </div>
            <div className="row">
              <Pads clicked={this.onPadClick} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
