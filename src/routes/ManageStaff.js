import React, { PureComponent } from 'react';
import SidebarLayout from 'components/Sidebar.js';
import Table from 'components/Table/Table.js';
import ManageStaffHeader from 'components/ManageStaffHeader.js';
import TableRow from 'components/Table/TableRow.js';
import ColTitle from 'components/Table/ColTitle.js';
import CheckBox from 'components/Checkbox.js';
import TableCell from 'components/Table/TableCell.js';
import PermissionsIcons from 'components/PermissionsIcons.js';

class ManageStaff extends PureComponent {
  state = {};

  render() {
    return (
      <SidebarLayout>
        <Table>
          <ManageStaffHeader />
          <TableRow>
            <TableCell width="5%">
              <CheckBox />
            </TableCell>
            <TableCell width="20%">
              <ColTitle title="Name" selected sortable color="#c0b59d" />
            </TableCell>
            <TableCell width="20%">
              <ColTitle title="Email" sortable color="#c0b59d" />
            </TableCell>

            <TableCell width="20%" content={<ColTitle title="Permissions" />} />
            <TableCell
              width="20%"
              content={<ColTitle title="Date Added" sortable color="#c0b59d" />}
            />
          </TableRow>
          <TableRow>
            <TableCell width="5%" content={<CheckBox />} />
            <TableCell content="First Column" width="20%" emphasize />
            <TableCell content="Second Column" width="20%" emphasize />
            <TableCell
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
            <TableCell content="Fourth Column" width="20%" />
          </TableRow>
          <TableRow>
            <TableCell width="5%" content={<CheckBox />} />
            <TableCell content="First Column" width="20%" />
            <TableCell content="Second Column" width="20%" />
            <TableCell content="Third Column" width="20%" />
            <TableCell content="Fourth Column" width="20%" />
          </TableRow>
        </Table>
      </SidebarLayout>
    );
  }
}

export default ManageStaff;
