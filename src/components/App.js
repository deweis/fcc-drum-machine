import React, { Component } from 'react';
import Display from './Display';
import Pads from './Pads';
import './App.css';

/*
- Manage Pad backgrounds in the Pads component
- Create Td's by a loop and put in pad component
*/

class App extends Component {
  state = {
    currentPad: "I'm a Drum, play me.."
  };

  onPadClick = padId => {
    this.setState({
      currentPad: padId
    });
  };

  render() {
    return (
      <div id="drum-machine" className="App">
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
