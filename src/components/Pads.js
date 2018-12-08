import React from 'react';
import Wrapper from './Wrapper';
import './Pads.css';

const Pads = () => {
  return (
    <Wrapper>
      <table className="centered">
        <tbody>
          <tr>
            <td>Q</td>
            <td>W</td>
            <td>E</td>
          </tr>
          <tr>
            <td>A</td>
            <td>S</td>
            <td>D</td>
          </tr>
          <tr>
            <td>Z</td>
            <td>X</td>
            <td>C</td>
          </tr>
        </tbody>
      </table>
    </Wrapper>
  );
};

export default Pads;
