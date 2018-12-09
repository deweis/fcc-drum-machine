import React from 'react';
import Wrapper from './Wrapper';
import Sounds from './Sounds';
import './Pads.css';

class Pads extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  /* If played by keypad */
  handleKeyPress = event => {
    const pressedKey = Sounds.find(x => x.keyCode === event.keyCode);
    if (pressedKey) {
      this.padTriggered(pressedKey);
    }
  };

  /* Helper function to play the respective pad Sounds */
  padTriggered = pad => {
    /* update parent state to display the pad clicked */
    this.props.clicked(pad.id);

    /* play the audio */
    document.getElementById(pad.keyTrigger).currentTime = 0; // so it can be played fast
    document.getElementById(pad.keyTrigger).play();

    /* background change to show the pad clicked */
    document.getElementById(pad.id).style.background = '#ff9800';
    setTimeout(function() {
      document.getElementById(pad.id).style.background = '#ffe0b2';
    }, 100);
  };

  render() {
    return (
      <Wrapper>
        <table className="centered">
          <tbody>
            <tr>
              <td
                className="drum-pad"
                id={Sounds[0].id}
                onClick={() => this.padTriggered(Sounds[0])}
              >
                Q
                <audio
                  id="Q"
                  className="clip"
                  src={Sounds[0].url}
                  preload="auto"
                />
              </td>
              <td
                className="drum-pad "
                id={Sounds[1].id}
                onClick={() => this.padTriggered(Sounds[1])}
              >
                W
                <audio
                  id="W"
                  className="clip"
                  src={Sounds[1].url}
                  preload="auto"
                />
              </td>
              <td
                className="drum-pad"
                id={Sounds[2].id}
                onClick={() => this.padTriggered(Sounds[2])}
              >
                E
                <audio
                  id="E"
                  className="clip"
                  src={Sounds[2].url}
                  preload="auto"
                />
              </td>
            </tr>
            <tr>
              <td
                className="drum-pad"
                id={Sounds[3].id}
                onClick={() => this.padTriggered(Sounds[3])}
              >
                A
                <audio
                  id="A"
                  className="clip"
                  src={Sounds[3].url}
                  preload="auto"
                />
              </td>
              <td
                className="drum-pad"
                id={Sounds[4].id}
                onClick={() => this.padTriggered(Sounds[4])}
              >
                S
                <audio
                  id="S"
                  className="clip"
                  src={Sounds[4].url}
                  preload="auto"
                />
              </td>
              <td
                className="drum-pad"
                id={Sounds[5].id}
                onClick={() => this.padTriggered(Sounds[5])}
              >
                D
                <audio
                  id="D"
                  className="clip"
                  src={Sounds[5].url}
                  preload="auto"
                />
              </td>
            </tr>
            <tr>
              <td
                className="drum-pad"
                id={Sounds[6].id}
                onClick={() => this.padTriggered(Sounds[6])}
              >
                Z
                <audio
                  id="Z"
                  className="clip"
                  src={Sounds[6].url}
                  preload="auto"
                />
              </td>
              <td
                className="drum-pad"
                id={Sounds[7].id}
                onClick={() => this.padTriggered(Sounds[7])}
              >
                X
                <audio
                  id="X"
                  className="clip"
                  src={Sounds[7].url}
                  preload="auto"
                />
              </td>
              <td
                className="drum-pad"
                id={Sounds[8].id}
                onClick={() => this.padTriggered(Sounds[8])}
              >
                C
                <audio
                  id="C"
                  className="clip"
                  src={Sounds[8].url}
                  preload="auto"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </Wrapper>
    );
  }
}

export default Pads;
