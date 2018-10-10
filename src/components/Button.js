import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.div`
  height: 50px;
  padding: 0px 30px;
  box-shadow: 0 2px 4px 0 rgba(125, 125, 125, 0.2);
  border: solid 1px #ededed;
  font-size: 12px;
  font-weight: 800;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  color: #7d7d7d;
  text-transform: uppercase;
  cursor: pointer;

  ${props => props.kind === 'primary' && css`
    background-color: ${props.theme.colors.primary};
    color: #FFF;
    border: solid 1px ${props.theme.colors.primary}
  `}
`;

export default ({ label, ...restProps }) => (
  <Button {...restProps}>
    {label}
  </Button>
);
