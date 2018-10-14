import React from 'react';
import CalendarEdit from 'assets/icons/CalendarEdit.js';
import CalendarDelete from 'assets/icons/CalendarDelete.js';
import Billing from 'assets/icons/Billing.js';
import ManageStaffIcon from 'assets/icons/ManageStaffIcon.js';
import styled from 'styled-components';

const PermissionIcons = styled.div`
  display: flex;
  align-items: center;
  min-width: 110px;
`;

export default ({ ...restProps }) => (
  <PermissionIcons {...restProps}>
    <CalendarEdit {...restProps} />
    <CalendarDelete {...restProps} />
    <Billing {...restProps} />
    <ManageStaffIcon {...restProps} />
  </PermissionIcons>
);
