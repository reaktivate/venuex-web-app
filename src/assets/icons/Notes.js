import React from 'react';
import { withTheme } from 'styled-components';

const Notes = props => (
  <svg width={props.size} height={props.size} {...props} viewBox="0 0 18 22">
    <g
      fillRule="nonzero"
      fill={props.color ? props.color : props.theme.colors.primary}
    >
      <path d="M12.526 21.012H2.653a2.009 2.009 0 0 1-1.99-1.989V2.49C.664 1.406 1.57.5 2.654.5h12.694c1.084 0 1.99.906 1.99 1.989v13.713a.893.893 0 0 1-.262.631l-3.918 3.918a.892.892 0 0 1-.63.261zM2.448 2.49v16.534c0 .089.108.205.205.205h9.504l3.396-3.395V2.489c0-.089-.11-.205-.205-.205H2.646c-.088.005-.198.11-.198.205z" />
      <path d="M12.526 21.012a.89.89 0 0 1-.892-.892v-3.918c0-.492.4-.891.892-.891h3.918a.892.892 0 0 1 .63 1.522l-3.917 3.918a.892.892 0 0 1-.63.261zm.892-3.045l.873-.873h-.873v.873zM13.232 6.359H4.768a.892.892 0 1 1 0-1.784h8.463a.892.892 0 0 1 0 1.784zM13.232 9.806H4.768a.892.892 0 1 1 0-1.783h8.463a.892.892 0 1 1 0 1.783zM13.232 13.176H4.768a.892.892 0 1 1 0-1.784h8.463a.892.892 0 1 1 0 1.784z" />
    </g>
  </svg>
);

Notes.defaultProps = {
  size: 24
};

export default withTheme(Notes);
