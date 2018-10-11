import React from 'react';
import styled, { css } from 'styled-components';

const Table = styled.div`
  height: 100%; /* not sure what to set this as */
  margin: 20px 12.2px 0px 31.8px;
  border: solid 1px #ededed;
  background-color: #ffffff;

  width: 100%
    ${props =>
      props.kind === 'primary' &&
      css`
        color: red;
      `};
`;

export default ({ label, ...restProps }) => <Table {...restProps} />;
