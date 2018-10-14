import React, { PureComponent } from 'react';
import SidebarLayout from 'components/Sidebar.js';
import Table from 'components/Table/';
import CheckBox from 'components/Checkbox.js';
import PermissionsIcons from 'components/PermissionsIcons.js';
import ManageStaffHeader from 'components/ManageStaffHeader';

class ManageStaff extends PureComponent {
  state = {};

  render() {
    return (
      <SidebarLayout>
        <Table>
          <ManageStaffHeader />
          <Table.Row>
            <Table.Cell width="5%">
              <CheckBox />
            </Table.Cell>
            <Table.Cell width="20%">
              <Table.HeaderCell
                title="Name"
                selected
                sortable
                color="#c0b59d"
              />
            </Table.Cell>
            <Table.Cell width="20%">
              <Table.HeaderCell title="Email" sortable color="#c0b59d" />
            </Table.Cell>

            <Table.Cell
              width="20%"
              content={<Table.HeaderCell title="Permissions" />}
            />
            <Table.Cell width="20%">
              {' '}
              <Table.HeaderCell
                title="Date Added"
                sortable
                color="#c0b59d"
              />{' '}
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell width="5%" content={<CheckBox />} />
            <Table.Cell content="First Column" width="20%" emphasize />
            <Table.Cell content="Second Column" width="20%" emphasize />
            <Table.Cell width="20%">
              {' '}
              <PermissionsIcons color="#c0b59d" delete edit manageStaff />{' '}
            </Table.Cell>
            <Table.Cell content="Fourth Column" width="20%" />
          </Table.Row>
          <Table.Row>
            <Table.Cell width="5%" content={<CheckBox />} />
            <Table.Cell content="First Column" width="20%" />
            <Table.Cell content="Second Column" width="20%" />
            <Table.Cell content="Third Column" width="20%" />
            <Table.Cell content="Fourth Column" width="20%" />
          </Table.Row>
        </Table>
      </SidebarLayout>
    );
  }
}

export default ManageStaff;
