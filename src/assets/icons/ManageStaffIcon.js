import React from 'react';
import { withTheme } from 'styled-components';

const ManageStaffIcon = props => (
  <svg width={props.size} height={props.size} {...props} viewBox="0 0 25 22">
    <g
      fillRule="nonzero"
      fill={props.manageStaff ? props.theme.colors.primary : '#D8D8D8'}
    >
      <path d="M.673 17.195c0 .674.078 1.34.233 1.988a.782.782 0 0 0 1.521-.366 6.983 6.983 0 0 1 6.796-8.607 6.982 6.982 0 0 1 6.986 6.985c0 .55-.064 1.093-.187 1.62a.782.782 0 1 0 1.522.362c.152-.648.23-1.311.23-1.982 0-4.718-3.832-8.55-8.551-8.55-4.718 0-8.55 3.833-8.55 8.55z" />
      <path d="M9.223.597a4.065 4.065 0 0 0-4.061 4.06 4.067 4.067 0 0 0 4.06 4.065 4.069 4.069 0 0 0 4.065-4.064A4.067 4.067 0 0 0 9.223.597zm2.5 4.06c0 1.383-1.117 2.5-2.5 2.5a2.494 2.494 0 0 1-2.497-2.5 2.491 2.491 0 0 1 2.497-2.496c1.384 0 2.5 1.115 2.5 2.497zM14.426 9.475a.782.782 0 1 0 .679 1.41 5.472 5.472 0 0 1 2.396-.546 5.517 5.517 0 0 1 5.521 5.524 5.6 5.6 0 0 1-.146 1.275.782.782 0 1 0 1.52.366 7.09 7.09 0 0 0-9.97-8.03z" />
      <path d="M17.5 2.076a3.201 3.201 0 0 0-3.197 3.198 3.203 3.203 0 0 0 3.198 3.197 3.202 3.202 0 0 0 3.194-3.197 3.2 3.2 0 0 0-3.194-3.198zm1.631 3.198a1.63 1.63 0 0 1-1.63 1.633 1.63 1.63 0 0 1-1.633-1.633c0-.907.727-1.634 1.633-1.634.903 0 1.63.728 1.63 1.634z" />
    </g>
  </svg>
);

ManageStaffIcon.defaultProps = {
  size: 24
};

export default withTheme(ManageStaffIcon);
