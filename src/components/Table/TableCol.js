import React from 'react';
import styled, { css } from 'styled-components';

const TableCol = styled.div`
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-stretch: normal;
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
  ${props =>
    props.width &&
    css`
      width: ${props.width};
    `};
  ${props =>
    props.emphasize === true &&
    css`
      font-weight: bold;
      color: #222222;
    `};
`;

export default ({ content, ...restProps }) => (
  <TableCol {...restProps}>{content}</TableCol>
);
