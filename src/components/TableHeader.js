import React from 'react';
import styled, { css } from 'styled-components';
import Checkbox from './Checkbox';
import downArrow from '../assets/caret-down-custom.svg';

const TableHeader = styled.div`
  height: 75px; /* not sure what to set this as */
  background-color: #ffffff;
  border-bottom: solid 1px #eeeeee;
  padding-left: 25px;
  display: flex;
  justify-content: left;
  align-items: center;
`;

const ColTitle = styled.div`
  font-family: Montserrat;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.3px;
  color: #888888;
  display: flex;
  align-items: center;
  justify-content: space-around
    ${props =>
      props.selected === 'true' &&
      css`
        font-weight: bold;
        color: #181818;
      `};
`;

const ColIcon = styled.img`
  width: 12px;
  height: 12px;
`;

export default ({ label, ...restProps }) => (
  <TableHeader {...restProps}>
    <Checkbox />
    <ColTitle selected="true">
      NAME <ColIcon src={downArrow} />
    </ColTitle>
    <ColTitle>EMAIL</ColTitle>
  </TableHeader>
);
