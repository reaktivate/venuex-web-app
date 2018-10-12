import React from 'react';
import styled, { css } from 'styled-components';
import CaretDown from '../../assets/icons/caret-down.js';

const ColTitle = styled.div`
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-stretch: normal;
  text-transform: uppercase;
  line-height: normal;
  letter-spacing: 0.3px;
  color: #888888;
  display: flex;
  align-items: center;
  ${props =>
    props.selected === true &&
    css`
      font-weight: bold;
      color: #181818;
    `};
`;

const ColIcon = styled.div`
    display: none;
    ${props =>
    props.sortable === true &&
    css`
      display:block;
    `};
`;

export default ({ title, ...restProps }) => (
  <ColTitle {...restProps}>
    {title}
    <ColIcon {...restProps}> <CaretDown {...restProps} /> </ColIcon>
  </ColTitle>
);
