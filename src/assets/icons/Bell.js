import React from 'react';
import { withTheme } from 'styled-components';

const Bell = props => (
  <svg width={props.size} height={props.size} {...props} viewBox="0 0 20 24">
    <path
      d="M13.456 19.923a3.462 3.462 0 0 1-6.912 0h-5.39A1.153 1.153 0 0 1 0 18.77v-1.155a2.31 2.31 0 0 1 2.308-2.307v-4.616a7.694 7.694 0 0 1 5-7.208v-.101a2.693 2.693 0 0 1 5.384 0v.101a7.695 7.695 0 0 1 5 7.208v4.615A2.311 2.311 0 0 1 20 17.615v1.155c0 .635-.518 1.153-1.155 1.153h-5.389zm-1.542 0H8.086a1.923 1.923 0 0 0 3.828 0zm6.548-1.538v-.77a.772.772 0 0 0-.77-.769c-.85 0-1.538-.687-1.538-1.539v-4.615c0-2.76-1.833-5.16-4.444-5.913l-.556-.16V3.382a1.153 1.153 0 0 0-2.308 0v1.235l-.556.16a6.155 6.155 0 0 0-4.444 5.914v4.615c0 .85-.69 1.54-1.538 1.54a.77.77 0 0 0-.77.768v.77h16.924z"
      fill={props.theme.colors.primary}
      fillRule="nonzero"
    />
  </svg>
);
Bell.defaultProps = {
  size: 24
};

export default withTheme(Bell);
