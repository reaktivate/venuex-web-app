import React from 'react';
import styled, { css } from 'styled-components';

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

export default ({ title, ...restProps }) => <ColTitle {...restProps} />;
