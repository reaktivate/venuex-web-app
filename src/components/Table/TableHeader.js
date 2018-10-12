import React from 'react';
import styled from 'styled-components';

const TableHeader = styled.div`
  height: 75px; /* not sure what to set this as */
  background-color: #ffffff;
  border-bottom: solid 1px #eeeeee;
  padding-left: 25px;
  display: flex;
  justify-content: left;
  align-items: center;
`;

export default ({ label, ...restProps }) => <TableHeader {...restProps} />;
