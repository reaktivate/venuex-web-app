import React from 'react';
import { withTheme } from 'styled-components';

const Delete = props => (
  <svg width={props.size} height={props.size} viewBox="0 0 21 21">
    <path
      d="M16.409 17.589c0 .702-.571 1.273-1.274 1.273h-9.17c-.703 0-1.273-.57-1.274-1.273V4.088H16.41v13.5zM7.239 1.795c0-.14.113-.255.254-.255h6.114c.14 0 .254.114.254.255v.764H7.238v-.764zm12.99.764h-4.84v-.764c0-.983-.799-1.783-1.782-1.783H7.493c-.983 0-1.783.8-1.783 1.783v.764H.87a.764.764 0 0 0 0 1.529h2.293v13.5a2.805 2.805 0 0 0 2.802 2.803h9.17a2.805 2.805 0 0 0 2.802-2.802V4.088h2.293a.764.764 0 0 0 0-1.529zM10.55 16.57a.764.764 0 0 0 .764-.764V7.654a.764.764 0 0 0-1.528 0v8.151a.764.764 0 0 0 .764.765zm-3.566 0a.764.764 0 0 0 .764-.764V7.654a.764.764 0 1 0-1.529 0v8.151c0 .422.343.765.765.765zm7.132 0a.764.764 0 0 0 .764-.764V7.654a.764.764 0 1 0-1.528 0v8.151c0 .422.342.765.764.765z"
      fill={props.color ? props.color : props.theme.colors.primary}
      fillRule="nonzero"
    />
  </svg>
);

Delete.defaultProps = {
  size: 24
};

export default withTheme(Delete);
