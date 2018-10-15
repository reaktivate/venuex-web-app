import React from 'react';
import { withTheme } from 'styled-components';

const CalendarEdit = props => (
  <svg width={props.size} height={props.size} {...props} viewBox="0 0 26 22">
    <g fill="none" fillRule="evenodd">
      <path
        d="M18.251 2.504h-1.667V.837h-1.11v1.667h-8.89V.837h-1.11v1.667H3.808A2.781 2.781 0 0 0 1.03 5.282V18.06a2.781 2.781 0 0 0 2.778 2.778H18.25a2.781 2.781 0 0 0 2.779-2.778V5.28a2.782 2.782 0 0 0-2.779-2.777zm1.666 15.555c0 .918-.747 1.666-1.666 1.666H3.808c-.92 0-1.667-.748-1.667-1.666v-10h17.776v10zm0-11.11H2.141V5.28c0-.92.747-1.667 1.667-1.667h1.667v1.111h1.11v-1.11h8.888v1.111h1.111v-1.11h1.667c.919 0 1.666.746 1.666 1.665v1.667z"
        strokeWidth={0.5}
        fillRule="nonzero"
        fill={props.color ? props.color : props.theme.colors.primary}
        stroke={props.color ? props.color : props.theme.colors.primary}
      />
      <g fillRule="nonzero">
        <path
          d="M13.866 14.262l.007-.039a.136.136 0 0 1-.021.053l.014-.014zm2.775 2.776l-.015.014a.138.138 0 0 1 .054-.02l-.04.006zm-3.947-3.04l-.131-.13.424-.425 6.443-6.445a1.993 1.993 0 0 1 1.419-.588c.534 0 1.04.209 1.418.587l1.634 1.635a2.008 2.008 0 0 1 0 2.838l-6.866 6.871-.131-.13-.016.002-3.588.633c-.34.06-.68-.05-.933-.292l-.011-.01-.003-.004a1.081 1.081 0 0 1-.295-.936l.633-3.588c0-.006.002-.012.003-.017z"
          stroke="#FFF"
          strokeWidth={1.2}
          fill="#FFF"
        />
        <path
          d="M12.78 18.12l.011.01a.47.47 0 0 0 .406.125l3.586-.633a.468.468 0 0 0 .25-.131l.002.002 6.442-6.447a1.408 1.408 0 0 0 0-1.99l-1.634-1.635a1.396 1.396 0 0 0-.994-.411c-.375 0-.73.145-.994.41l-6.444 6.448.002.001a.468.468 0 0 0-.131.25l-.633 3.59a.478.478 0 0 0 .131.41zm5.902-8.2l2.298 2.3-4.5 4.504-2.79.492.492-2.792 4.5-4.505zm1.834-1.837a.464.464 0 0 1 .331-.136c.127 0 .244.049.332.136l1.636 1.636a.47.47 0 0 1 0 .664l-1.17 1.172-2.3-2.3 1.171-1.172z"
          stroke={props.color ? props.color : props.theme.colors.primary}
          strokeWidth={0.5}
          fill={props.color ? props.color : props.theme.colors.primary}
        />
      </g>
    </g>
  </svg>
);

CalendarEdit.defaultProps = {
  size: 24
};

export default withTheme(CalendarEdit);
