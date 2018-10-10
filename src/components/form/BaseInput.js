import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  font-weight: 500;
  align-items: center;
  padding: 15px 0px;

  ${props => props.alignItems && css`
    align-items: ${props.alignItems};
  `}
`;

export default ({ label, children, alignItems }) => (
  <Container alignItems={alignItems}>
    <div style={{ whiteSpace: 'nowrap', color: '#7d7d7d', paddingRight: 20 }}>
      {label}
    </div>
    <div style={{ flex: 1 }}>
      {children}
    </div>
  </Container>
);
