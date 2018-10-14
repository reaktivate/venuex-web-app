import React from 'react';
import styled, { css } from 'styled-components';

const TableBody = styled.div`
  height: fill-available; /* not sure what to set this as */
  background-color: #ffffff;
  overflow-y: scroll;
  width: 100%
    ${props =>
      props.kind === 'primary' &&
      css`
        color: red;
      `};
`;

export default ({ label, ...restProps }) => <TableBody {...restProps} />;
