import React from 'react';
import Wrapper from './Wrapper';
import './Pads.css';

const sounds = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];
class Pads extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = event => {
    const pressedKey = sounds.find(x => x.keyCode === event.keyCode);
    if (pressedKey) {
      this.props.clicked(pressedKey.id);
    }
  };

  render() {
    return (
      <Wrapper>
        <table className="centered">
          <tbody>
            <tr>
              <td
                className="drum-pad"
                id={sounds[0].id}
                onClick={() => this.props.clicked(sounds[0].id)}
              >
                Q
                <audio id="Q" className="clip">
                  <source src={sounds[0].url} preload="auto" />
                </audio>
              </td>
              <td
                className="drum-pad "
                id={sounds[1].id}
                onClick={() => this.props.clicked(sounds[1].id)}
              >
                W
                <audio id="W" className="clip">
                  <source src={sounds[1].url} preload="auto" />
                </audio>
              </td>
              <td
                className="drum-pad"
                id={sounds[2].id}
                onClick={() => this.props.clicked(sounds[2].id)}
              >
                E
                <audio id="E" className="clip">
                  <source src={sounds[2].url} preload="auto" />
                </audio>
              </td>
            </tr>
            <tr>
              <td
                className="drum-pad"
                id={sounds[3].id}
                onClick={() => this.props.clicked(sounds[3].id)}
              >
                A
                <audio id="A" className="clip">
                  <source src={sounds[3].url} preload="auto" />
                </audio>
              </td>
              <td
                className="drum-pad"
                id={sounds[4].id}
                onClick={() => this.props.clicked(sounds[4].id)}
              >
                S
                <audio id="S" className="clip">
                  <source src={sounds[4].url} preload="auto" />
                </audio>
              </td>
              <td
                className="drum-pad"
                id={sounds[5].id}
                onClick={() => this.props.clicked(sounds[5].id)}
              >
                D
                <audio id="D" className="clip">
                  <source src={sounds[5].url} preload="auto" />
                </audio>
              </td>
            </tr>
            <tr>
              <td
                className="drum-pad"
                id={sounds[6].id}
                onClick={() => this.props.clicked(sounds[6].id)}
              >
                Z
                <audio id="Z" className="clip">
                  <source src={sounds[6].url} preload="auto" />
                </audio>
              </td>
              <td
                className="drum-pad"
                id={sounds[7].id}
                onClick={() => this.props.clicked(sounds[7].id)}
              >
                X
                <audio id="X" className="clip">
                  <source src={sounds[7].url} preload="auto" />
                </audio>
              </td>
              <td
                className="drum-pad"
                id={sounds[8].id}
                onClick={() => this.props.clicked(sounds[8].id)}
              >
                C
                <audio id="C" className="clip">
                  <source src={sounds[8].url} preload="auto" />
                </audio>
              </td>
            </tr>
          </tbody>
        </table>
      </Wrapper>
    );
  }
}

export default Pads;
