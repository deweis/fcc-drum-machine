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

const Pads = () => {
  return (
    <Wrapper>
      <table className="centered">
        <tbody>
          <tr>
            <td
              className="drum-pad"
              id={sounds[0].id}
              onClick={() => console.log('Q')}
            >
              Q
            </td>
            <td
              className="drum-pad "
              id={sounds[1].id}
              onClick={e => console.log('W')}
            >
              W
            </td>
            <td
              className="drum-pad"
              id={sounds[2].id}
              onClick={e => console.log('E')}
            >
              E
            </td>
          </tr>
          <tr>
            <td
              className="drum-pad"
              id={sounds[3].id}
              onClick={e => console.log('A')}
            >
              A
            </td>
            <td
              className="drum-pad"
              id={sounds[4].id}
              onClick={e => console.log('S')}
            >
              S
            </td>
            <td
              className="drum-pad"
              id={sounds[5].id}
              onClick={e => console.log('D')}
            >
              D
            </td>
          </tr>
          <tr>
            <td
              className="drum-pad"
              id={sounds[6].id}
              onClick={e => console.log('Z')}
            >
              Z
            </td>
            <td
              className="drum-pad"
              id={sounds[7].id}
              onClick={e => console.log('X')}
            >
              X
            </td>
            <td
              className="drum-pad"
              id={sounds[8].id}
              onClick={e => console.log('C')}
            >
              C
            </td>
          </tr>
        </tbody>
      </table>
    </Wrapper>
  );
};

export default Pads;
