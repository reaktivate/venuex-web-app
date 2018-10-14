import React, { PureComponent } from 'react';
import SidebarLayout from 'components/Sidebar.js';
import Table from 'components/Table/Table.js';
import ManageStaffHeader from 'components/ManageStaffHeader.js';
import TableRow from 'components/Table/TableRow.js';
import ColTitle from 'components/Table/ColTitle.js';
import CheckBox from 'components/Checkbox.js';
import TableCol from 'components/Table/TableCol.js';
import PermissionsIcons from 'components/PermissionsIcons.js';

class ManageStaff extends PureComponent {
  state = {};

  render() {
    return (
      <SidebarLayout>
        <Table>
          <ManageStaffHeader />
          <TableRow>
            <TableCol width="5%">
              <CheckBox />
            </TableCol>
            <TableCol width="20%">
              <ColTitle title="Name" selected sortable color="#c0b59d" />
            </TableCol>
            <TableCol width="20%">
              <ColTitle title="Email" sortable color="#c0b59d" />
            </TableCol>

            <TableCol width="20%" content={<ColTitle title="Permissions" />} />
            <TableCol
              width="20%"
              content={<ColTitle title="Date Added" sortable color="#c0b59d" />}
            />
          </TableRow>
          <TableRow>
            <TableCol width="5%" content={<CheckBox />} />
            <TableCol content="First Column" width="20%" emphasize />
            <TableCol content="Second Column" width="20%" emphasize />
            <TableCol
              content={
                <PermissionsIcons
                  color="#c0b59d"
                  delete
                  edit
                  billing
                  manageStaff
                />
              }
              width="20%"
            />
            <TableCol content="Fourth Column" width="20%" />
          </TableRow>
          <TableRow>
            <TableCol width="5%" content={<CheckBox />} />
            <TableCol content="First Column" width="20%" />
            <TableCol content="Second Column" width="20%" />
            <TableCol content="Third Column" width="20%" />
            <TableCol content="Fourth Column" width="20%" />
          </TableRow>
        </Table>
      </SidebarLayout>
    );
  }
}

export default ManageStaff;
