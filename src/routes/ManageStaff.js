import React, { PureComponent } from 'react';
import SidebarLayout from 'components/Sidebar.js';
import Table from 'components/Table/Table.js';
import ManageStaffHeader from 'components/ManageStaffHeader.js';
import TableHeader from 'components/Table/TableHeader.js';
import ColTitle from 'components/Table/ColTitle.js';
import CheckBox from 'components/Checkbox.js';

class ManageStaff extends PureComponent {
  state = {};

  render() {
    return (
      <SidebarLayout>
        <Table>
          <ManageStaffHeader />
          <TableHeader>
            <ColTitle title={<CheckBox />} width="5%" />
            <ColTitle title="Name" width="20%" selected sortable />
            <ColTitle title="Email" width="20%" sortable />
            <ColTitle title="Permission" width="20%" />
            <ColTitle title="Date Added" width="20%" />
          </TableHeader>
        </Table>
      </SidebarLayout>
    );
  }
}

export default ManageStaff;
