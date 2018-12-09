import React from 'react';
import Wrapper from './Wrapper';

const Display = props => {
  return (
    <Wrapper>
      <h3 id={props.id}>{props.pad}</h3>
    </Wrapper>
  );
};

export default Display;
