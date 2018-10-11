import React, { PureComponent } from 'react';
import SidebarLayout from 'components/Sidebar.js';
import Table from 'components/Table.js';
import ManageStaffHeader from 'components/ManageStaffHeader.js';

class ManageStaff extends PureComponent {
  state = {};

  render() {
    return (
      <SidebarLayout>
        <Table>
          <ManageStaffHeader />
        </Table>
      </SidebarLayout>
    );
  }
}

export default ManageStaff;
