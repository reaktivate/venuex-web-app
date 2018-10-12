import React, { PureComponent } from 'react';
import SidebarLayout from 'components/Sidebar.js';
import Table from 'components/Table.js';
import ManageStaffHeader from 'components/ManageStaffHeader.js';
import TableHeader from 'components/TableHeader.js';

class ManageStaff extends PureComponent {
  state = {};

  render() {
    return (
      <SidebarLayout>
        <Table>
          <ManageStaffHeader />
          <TableHeader />
        </Table>
      </SidebarLayout>
    );
  }
}

export default ManageStaff;
