import React from 'react';
import styled, { css } from 'styled-components';
import Button from './Button';
import RoundButton from './RoundButton';

const TableHeader = styled.div`
  height: 40px; /* not sure what to set this as */
  background-color: #fcfbfc;
  padding: 20px 15px;
  display: flex;
  justify-content: space-between
    ${props =>
      props.kind === 'primary' &&
      css`
        color: red;
      `};
`;

const ActionButtonGroup = styled.div``;

export default ({ label, ...restProps }) => (
  <TableHeader {...restProps}>
    {' '}
    <Button label="Filter" />
    <ActionButtonGroup>
      <RoundButton label="+" /> <RoundButton label="U" />
    </ActionButtonGroup>
  </TableHeader>
);
