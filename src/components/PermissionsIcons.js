import React from 'react';
import Icons from 'assets/icons';
import styled from 'styled-components';

const PermissionIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 110px;
`;

export default ({ ...restProps }) => (
  <PermissionIcons {...restProps}>
    <Icons.CalendarEdit {...restProps} />
    <Icons.CalendarDelete {...restProps} />
    <Icons.Billing {...restProps} />
    <Icons.ManageStaff {...restProps} />
  </PermissionIcons>
);
