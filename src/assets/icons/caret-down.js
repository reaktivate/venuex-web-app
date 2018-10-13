import React from 'react';
import styled, { css } from 'styled-components';

const CaretDown = props => (
  <svg width={14} height={9}>
    <path
      fill={props.theme.colors.primary}
      stroke={props.theme.colors.primary}
      d="M1.467 2.134a.702.702 0 0 1 1.2-.506l4.803 4.79 4.79-4.79a.702.702 0 0 1 .998 0 .702.702 0 0 1 0 .999L7.975 7.922a.696.696 0 0 1-.505.203.751.751 0 0 1-.506-.203L1.67 2.627a.688.688 0 0 1-.202-.493z"
    />
  </svg>
);

const Icon = styled.img`
  width: 12px;
  height: 12px;
  margin-left: 10.5px;
  cursor: pointer;
  ${props =>
    props.sortable === false &&
    css`
      display: none;
    `};
`;
export default ({ ...restProps }) => <Icon {...restProps} src={CaretDown} />;