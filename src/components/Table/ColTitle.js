import React from 'react';
import styled, { css } from 'styled-components';
import downArrow from '../../assets/caret-down-custom.svg';

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
  ${props =>
    props.width &&
    css`
      width: ${props.width};
    `};
`;

const ColIcon = styled.img`
  width: 12px;
  height: 12px;
  margin-left: 10.5px;
  display: none
    ${props =>
      props.sortable === true &&
      css`
        display: block;
      `};
`;

export default ({ title, ...restProps }) => (
  <ColTitle {...restProps}>
    {title} <ColIcon src={downArrow} {...restProps} />
  </ColTitle>
);
