import React from 'react';
import styled, { css } from 'styled-components';

import BaseInput from './BaseInput';


const Container = styled.div`
  position: relative;
  width: 55px;
  min-width: 55px;
  height: 30px;
  background-color: #B0B0B0;
  transition-duration: 0.15s;
  cursor: pointer;
  border-radius: 15px;
  box-sizing: border-box;

  ${props => props.isActive && css`
    background-color: #2CB070;
  `}
`;

const Circle = styled.div`
  position: absolute;
  left: 3px;
  top: 3px;
  width: 24px;
  height: 24px;
  background-color: #FFF;
  transition-duration: 0.15s;
  border-radius: 15px;
  box-sizing: border-box;

  ${props => props.isActive && css`
    left: 28px;
  `} 
`;

export default props => (
  <BaseInput {...props}>
    <Container
      onClick={() => props.input.onChange(!props.input.value)}
      isActive={props.input.value}
    >
      <Circle isActive={props.input.value} />
    </Container>
  </BaseInput>
);
